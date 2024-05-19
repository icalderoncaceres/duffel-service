import { Body, Controller, Get, HttpStatus, Param, Post, Provider, Res, UploadedFiles, UseInterceptors, UsePipes, ValidationPipe } from '@nestjs/common';
import { Response } from 'express'
import { 
  GetFlightsRequest,
  GetFlightsResponse,
  IStartSellResponse,
  StartSellRequest,
  GetUrlPaymentRequest,
  SetPassengersRequest,
  GetPaymentConfigRequest,
  RESERVATION_STATES
} from './models/fligth.model';
import {
  SubscribeRequest,
} from './models/subscription.model';
import { Airport } from './models/airport.model';
import { AirportService} from './services/airport.service';
import { SubscriptionService } from './services/subscription.service';
import { ProvidersFactory } from './services/providers/providersFactory/providers.factory';
import { ReservationService } from './services/reservation.service';
import { FileFieldsInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(
    private readonly airportService: AirportService,
    private readonly providersFactoryService: ProvidersFactory,
    private readonly subscriptionService: SubscriptionService,
    private readonly reservationService: ReservationService  
  ) {}

  @Post('/getFlights')
  @UsePipes(ValidationPipe)
  async getFlights(
    @Body() getFlightsRequest: GetFlightsRequest,
    @Res() res: Response
  ) {

    const listProviders = await this.providersFactoryService.getProviders(getFlightsRequest);
    const provider = listProviders[0];
    const response: GetFlightsResponse = await provider.getFlights(getFlightsRequest);
    
    if (response.code === 200) {
      res.status(HttpStatus.OK).json({outboundFlights: response.outboundFlights, returnFlights: response.returnFlights});
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({code: {id: ''}});
    }

    return res;
  }

  @Get('/filterAirport/:str')
  @UsePipes(ValidationPipe)
  getAirports(
    @Param() params: {str: string}
  ): Airport[] {
    return this.airportService.getAirports(params.str.toUpperCase());
  }

  @Post('/subscribe')
  @UsePipes(ValidationPipe)
  async subscribe(
    @Body() subscribeRequest: SubscribeRequest,
    @Res() res: Response
  ) {
    await this.subscriptionService.subscribe(subscribeRequest);
    res.status(HttpStatus.OK).json({
      code: 200,
    });
    return res;
  }

  @Post('/startSell')
  @UsePipes(ValidationPipe)
  async startSell(
    @Body() startSellRequest: StartSellRequest,
    @Res() res: Response 
  ) {
    const response: IStartSellResponse = await this.reservationService.startSell(startSellRequest); 
    if (response.code === 200) {
      res.status(HttpStatus.OK).json({code: 200, url: response.url, tokenId: response.tokenId});
    } else if(response.code === 401) {
      res.status(HttpStatus.UNAUTHORIZED).json({message: 'FLIGHT ID NOT VALID'});
    } else {
      res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({message: 'Server Error'})
    }
    return res;
  }

  @Post('/getUrlPayment')
  async getUrlPayment(
    @Body() getUrlPaymentRequest: GetUrlPaymentRequest,
    @Res() res: Response     
  ) {
    res.status(HttpStatus.OK).json({url: 'https://zoomviaje.com'});
  }

  @Post('/uploadVoucher')
  @UseInterceptors(FileFieldsInterceptor([
    { name: 'voucher', maxCount: 1 },
  ]))
  async uploadVoucer(
    @UploadedFiles() voucher: { voucher: Express.Multer.File[]},
    @Body() body: {outboundId: string, returnId: string},
    @Res() res: Response
  ) {
    const v = voucher.voucher[0]
    const { outboundId, returnId } = body;
    const response: boolean = await this.reservationService.sendPaymentNotification({
      type: 'TRANSFER',
      outboundId,
      returnId,
      voucher: v
    });

    res.status(HttpStatus.OK).json(response);
  }

  @Post('setPassengers')
  async setPassengers(
    @Body() setPassengersRequest: SetPassengersRequest,
    @Res() res: Response
  ) {
    const response: boolean = await this.reservationService.setPassengers(setPassengersRequest);
    res.status(HttpStatus.OK).json(response);
  }


  /*********** SERVICES FOR ADMIN APLICATION **********/
  @Get('reservations')
  async reservations(
    @Param() params: {type?: RESERVATION_STATES},
    @Res() res: Response
  ) {
    const reservations = await this.reservationService.getReservations(params.type);
    res.status(HttpStatus.OK).json({
      status: 200,
      data: reservations
    });
    return res;
  }

  @Get('getReservation/:id')
  async getReservation(
    @Param() params: {id: string},
    @Res() res: Response
  ) {
    console.log('params:', params);
    const reservation = await this.reservationService.getReservation(params.id);
    res.status(HttpStatus.OK).json({
      status: 200,
      data: reservation
    });
    return res;
  }

  @Post('getPaymentConfig')
  async getPaymentConfig(
    @Body() getPaymentConfigRequest: GetPaymentConfigRequest,
    @Res() res: Response
  ) {
    const config = await this.reservationService.getPaymentConfig(getPaymentConfigRequest);
    res.status(HttpStatus.OK).json({
      status: 200,
      data: config
    });
    return res;
  }

  
}
