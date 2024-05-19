
import { Injectable } from "@nestjs/common";
import { Datastore } from '@google-cloud/datastore';
import {
  IStartSellRequest,
  IStartSellResponse,
  ISendPaymentNotification,
  SetPassengersRequest,
  RESERVATION_STATES,
  GetPaymentConfigRequest,
  IBoldPaymentConfig
} from '../models/fligth.model';
import { PubSub } from '@google-cloud/pubsub';
const { Storage } = require('@google-cloud/storage');
import { CryptoService } from '../crypto/crypto.service';

@Injectable()
export class ReservationService {
  private frontSellURL = 'https://localhost:3001';
  private kind = 'reservations';
  private topic = 'reservations-payments';
  private flagSendMessage = true;
  private secretIntegrity = 'kY3r4beiK64_1Jy4zvJOsg';
  private frontUrl = 'http://localhost:3001';
  constructor(
    private cryptoService: CryptoService
  ) { }

  async startSell(startSellRequest: IStartSellRequest): Promise<IStartSellResponse> {
    const name = startSellRequest.outbound.id + '-RETURN-' + startSellRequest.return.id;

    const datastore = new Datastore();
    const taskKey = datastore.key([this.kind, name]);

    const task = {
      key: taskKey,
      data: {
        outbound: startSellRequest.outbound,
        return: startSellRequest.return,
        offer: startSellRequest.offer ?? '144038',
        passengers: {
          adults: [],
          children: [],
          infants: []
        },
        state: RESERVATION_STATES.INITIALIZED
      },
    };

    try {
      await datastore.save(task);
      return {
        code: 200,
        url: `${this.frontSellURL}/passengers/${name}`,
        tokenId: name
      }
    } catch (error) {
      return {
        code: 500,
        url: '',
        tokenId: ''
      }
    }
  }

  async sendPaymentNotification(sendPaymentNotification: ISendPaymentNotification): Promise<boolean> {
    const datastore = new Datastore();
    const name = `${sendPaymentNotification.outboundId}-RETURN-${sendPaymentNotification.returnId}`;
    const transaction = datastore.transaction();
    const taskKey = datastore.key([this.kind, name]);
    try {
      await transaction.run();
      const [task] = await transaction.get(taskKey);
      task.payment = {
        type: sendPaymentNotification.type,
      }
      task.state = RESERVATION_STATES.TO_CONFIRM_PAYMENT;
      transaction.save({
        key: taskKey,
        data: task,
      });
      await transaction.commit();
      if (this.flagSendMessage) {
        this.sendMessage(sendPaymentNotification.type);
      }
      if (sendPaymentNotification.type === 'TRANSFER' && sendPaymentNotification.voucher) {
        this.uploadVoucher(sendPaymentNotification.voucher, `${sendPaymentNotification.outboundId}-RETURN-${sendPaymentNotification.returnId}`);
      }
      return true;
    } catch (err) {
      console.log('reservation service - sendPaymentNotification->', err);
      await transaction.rollback();
      return false;
    }
  }

  async setPassengers(setPassengers: SetPassengersRequest): Promise<boolean> {
    const datastore = new Datastore();
    const name = `${setPassengers.outboundId}-RETURN-${setPassengers.returnId}`;
    const transaction = datastore.transaction();
    const taskKey = datastore.key([this.kind, name]);
    try {
      await transaction.run();
      const [task] = await transaction.get(taskKey);
      task.passengers = {
        adults: setPassengers.adults,
        children: setPassengers.children,
        infants: setPassengers.infants
      }
      transaction.save({
        key: taskKey,
        data: task,
      });
      await transaction.commit();
      return true;
    } catch (err) {
      await transaction.rollback();
      return false;
    }
  }

  private sendMessage(type: 'TRANSFER' | 'CARD' | 'PSE') {
    try {

      const pubsub = new PubSub();
      const topic = pubsub.topic(this.topic);

      const message = {
        type
      }

      topic.publishMessage({ data: Buffer.from(JSON.stringify(message)) });

    } catch (error) {
      console.log(error);
    }
  }

  async uploadVoucher(voucher: Express.Multer.File, name: string) {
    const bucketName = 'offersflight-vouchers';
    
    const storage = new Storage();
    const bucket = storage.bucket(bucketName);
    
    // Upload the file to GCS
    const ext = voucher.mimetype.split('/')[1];
    // Create a readable stream from the buffer
    const fileStream = require('stream').Readable.from(voucher.buffer);

    // Create a file object in the bucket
    const file = bucket.file(`${name}.${ext}`);

    // Pipe the file stream to the file object
    await new Promise((resolve, reject) => {
        fileStream.pipe(file.createWriteStream())
            .on('error', (error) => {
                reject(error);
            })
            .on('finish', () => {
                resolve(file);
            });
    });
  }

  async getReservations(type?: RESERVATION_STATES): Promise<any[]> {
    const datastore = new Datastore();
    const query = datastore.createQuery(this.kind);
    try {
      let [reservations] = await datastore.runQuery(query);
      if (type) {
        reservations = reservations.filter((item: {state: RESERVATION_STATES}) => item.state === type)
      }
      const arrReturn = reservations.map((item: any) => {
        return {
          id: `${item.outbound.id}-RETURN-${item.return.id}`,
          passengers: item.passengers,
          outboundAirport: item.outbound.slices[0].origin.iata_code,
          returnAirport: item.return.slices[0].origin.iata_code,
          outboundDate: item.outbound.slices[0].segments[0].departing_at,
          returnDate: item.return.slices[0].segments[0].departing_at,
          amount: (item.outbound.total_amount + item.return.total_amount) + ' ' + item.outbound.base_currency,
          outboundFlight: item.outbound,
          returnFlight: item.return,
          outBoundAirline: item.outbound.owner.name,
          returnAirline: item.return.owner.name,
          currency: item.outbound.base_currency,
        }
      });
      return arrReturn;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getReservation(name: string): Promise<any> {
    const datastore = new Datastore();
    const transaction = datastore.transaction();
    const taskKey = datastore.key([this.kind, name]);
    try {
      await transaction.run();
      const [task] = await transaction.get(taskKey);
      if (task) {
        return {
          id: `${task.outbound.id}-RETURN-${task.return.id}`,
          passengers: task.passengers,
          outboundAirport: task.outbound.slices[0].origin.iata_code,
          returnAirport: task.return.slices[0].origin.iata_code,
          outboundDate: task.outbound.slices[0].segments[0].departing_at,
          returnDate: task.return.slices[0].segments[0].departing_at,
          amount: task.outbound.total_amount + task.return.total_amount,
          outboundFlight: task.outbound,
          returnFlight: task.return,
          outBoundAirline: task.outbound.owner.name,
          returnAirline: task.return.owner.name,
          currency: 'PESOS',
        }
      } else {
        return null;
      }
    } catch (err) {
      return false;
    }
  }

  async getPaymentConfig(getPaymentConfig: GetPaymentConfigRequest): Promise<IBoldPaymentConfig> {
    const datastore = new Datastore();
    const name = `${getPaymentConfig.outboundId}-RETURN-${getPaymentConfig.returnId}`;
    const transaction = datastore.transaction();
    const taskKey = datastore.key([this.kind, name]);
    try {
      await transaction.run();
      const [task] = await transaction.get(taskKey);
      // const orderId = `${getPaymentConfig.outboundId}-RETURN-${getPaymentConfig.returnId}`;
      // const amount = task.outbound.total_amount + task.return.total_amount;
      const orderId = "ABCD1234"
      const amount = '200000';
      const currency = task.outbound.total_currency;
      const integritySignature = this.cryptoService.generateSha256(`${orderId}${amount}${currency}${this.secretIntegrity}`);
      // const integritySignature = await this.generateHash(`${orderId}${amount}${currency}${this.secretIntegrity}`);
      return {
        orderId,
        currency,
        amount,
        apiKey: '8HCq7BcdsnYSGsAaIGjNUvS4KKdHWio6hMJCTsLExhg',
        integritySignature,
        urlSuccess: `${this.frontUrl}/${name}`,
        description: 'Producto de turismo',
        tax: '0'
      }
    } catch (err) {
      console.log(err);
      await transaction.rollback();
      return null;
    }
  }

  private async generateHash(cadenaConcatenada: string): Promise<string> {
    const encondedText = new TextEncoder().encode(cadenaConcatenada);
    const hashBuffer = await crypto.subtle.digest('SHA-256', encondedText);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    return hashHex;
  }
}

