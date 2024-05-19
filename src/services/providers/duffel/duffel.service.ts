
import {
  GetFlightsRequest,
  GetFlightsResponse,

} from '../../../models/fligth.model'
import { ConfigService } from '@nestjs/config';
import { IFlight } from '../../../models/fligth.model';
import { Duffel } from '@duffel/api';
import { CURRENCY } from '../../../data/currency';
import { Provider } from '../provider';

export class DuffelService extends Provider {
  private responseGetFlights: GetFlightsResponse;
  private duffel = new Duffel({
    // token: "duffel_live_7ARHL68hC3ZFKeIdqDlK9II7yoy77qNFbDpHBL8ZGfO"
    token: "duffel_test_g2vf9O3eVlWQ-dxzSZd-Aq0AEP1v6FReg5geGpeIXyq"
  });

  constructor() {
    super(new ConfigService());
  }

  async getFlights(getFlightsRequest: GetFlightsRequest): Promise<{ code: number, outboundFlights: any[], returnFlights: any[] }> {
    try {
      const offersRequest: any[] = await this.callDuffel(getFlightsRequest);
      const offersRequestProcess = await this.recalculePrices(offersRequest, getFlightsRequest.currency);
      this.responseGetFlights = {
        code: 200,
        outboundFlights: offersRequestProcess[0].data.offers,
        returnFlights: getFlightsRequest.mode === '1' ? offersRequestProcess[1].data.offers : [],
      }

    } catch (error) {
      console.log(error)
      this.responseGetFlights = {
        code: 500,
        outboundFlights: [],
        returnFlights: []
      }
    }
    return this.responseGetFlights;
  }

  async callDuffel(getFlightsRequest: GetFlightsRequest): Promise<any[]> {
    let slices = [];
    let passengers = [];
    for (let i = 0;i < getFlightsRequest.adults;i++) {
      passengers = [...passengers, { "type": "adult" }];
    }
    for (let i = 0;i < getFlightsRequest.children;i++) {
      passengers = [...passengers, { "type": "child" }];
    }
    for (let i = 0;i < getFlightsRequest.infants;i++) {
      passengers = [...passengers, { "type": "infant_without_seat" }];
    }

    let arrPromises = [];
    if (getFlightsRequest.mode === '1') {
      const slices1 = [
        {
          "origin": getFlightsRequest.outboundAirport,
          "destination": getFlightsRequest.returnAirport,
          "departure_date": getFlightsRequest.outboundDate,
        }
      ];

      const slices2 = [
        {
          "origin": getFlightsRequest.returnAirport,
          "destination": getFlightsRequest.outboundAirport,
          "departure_date": getFlightsRequest.returnDate,
        },
      ];
      arrPromises = [
        this.duffel.offerRequests.create({
          passengers,
          cabin_class: 'economy',
          slices: slices1,
        }),
        this.duffel.offerRequests.create({
          passengers,
          cabin_class: 'economy',
          slices: slices2,
        })        
      ];
    } else {
      slices = [
        {
          "origin": getFlightsRequest.outboundAirport,
          "destination": getFlightsRequest.returnAirport,
          "departure_date": getFlightsRequest.outboundDate,
        }
      ]
      arrPromises = [
        this.duffel.offerRequests.create({
          slices,
          passengers,
          cabin_class: 'economy',
        })
      ];
    }

    const offersRequest = await Promise.all(arrPromises);
    return offersRequest;
  }

  async recalculePrices(offersRequest: any[], currency: string): Promise<any> {
    const PERCENTAJE = 1.45;
    offersRequest.forEach((offer: {data: any}, index: number) => {
      offer.data.offers.forEach((flight: IFlight, index2: number) => {
        flight.base_amount = +(flight.base_amount * 1).toFixed(2);
        flight.tax_amount = +(flight.tax_amount * 1).toFixed(2);
        flight.total_fee_offer_amount = +(+flight.total_amount * PERCENTAJE / 100).toFixed(2);
        flight.total_fee_offer_currency = flight.base_currency;
        flight.total_fee_admin_amount = +(+flight.total_amount * PERCENTAJE / 100).toFixed(2);
        const totalFees: number = flight.total_fee_admin_amount + flight.total_fee_offer_amount;
        flight.total_fee_duffel_amount = +((+flight.total_amount + totalFees) * 0.029).toFixed(2);
        flight.total_amount = +(+flight.total_amount + totalFees + flight.total_fee_duffel_amount).toFixed(2);
        if (currency === 'COP') {
          flight.base_amount = +(flight.base_amount / CURRENCY.COP.EURO);
          flight.base_currency = 'COP';
          flight.total_fee_offer_amount = +(flight.total_fee_offer_amount / CURRENCY.COP.EURO).toFixed(2);
          flight.total_fee_offer_currency = 'COP';
          flight.total_currency = 'COP';
          flight.total_fee_admin_amount = +(flight.total_fee_admin_amount / CURRENCY.COP.EURO).toFixed(2);
          flight.total_fee_duffel_amount = +(flight.total_fee_duffel_amount / CURRENCY.COP.EURO).toFixed(2);
          flight.total_amount = +(flight.total_amount / CURRENCY.COP.EURO).toFixed(2);
          flight.tax_amount = +(flight.tax_amount / CURRENCY.COP.EURO).toFixed(2);
        } else if(currency === 'USD') {
          flight.base_amount = +(flight.base_amount / CURRENCY.USD.EURO).toFixed(2);
          flight.base_currency = 'USD';
          flight.total_fee_offer_amount = +(flight.total_fee_offer_amount / CURRENCY.USD.EURO).toFixed(2);
          flight.total_fee_offer_currency = 'USD';
          flight.total_currency = 'USD';
          flight.total_fee_admin_amount = +(flight.total_fee_admin_amount / CURRENCY.USD.EURO).toFixed(2);
          flight.total_fee_duffel_amount = +(flight.total_fee_duffel_amount / CURRENCY.USD.EURO).toFixed(2);
          flight.total_amount = +(flight.total_amount / CURRENCY.USD.EURO).toFixed(2);
          flight.tax_amount = +(flight.tax_amount / CURRENCY.USD.EURO).toFixed(2);
        }
      });
    });
    return offersRequest;
  }
}
