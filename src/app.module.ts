import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AirportService } from './services/airport.service';
import { DuffelService } from './services/providers/duffel/duffel.service';
import { SubscriptionService} from './services/subscription.service';
import { Avianca } from './services/providers/avianca/avianca.service';
import { Wingo } from './services/providers/wingo/wingo.service';
import { Click } from './services/providers/click/click.service';
import configuration from './configuration/configuration';
import { ProvidersFactory } from './services/providers/providersFactory/providers.factory';
import { ReservationService } from './services/reservation.service';
import { CryptoService } from './crypto/crypto.service';
require('dotenv').config();
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: `./env/${process.env.NODE_ENV}.env`,
      isGlobal: true
    }),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    AirportService,
    DuffelService,
    SubscriptionService,
    ProvidersFactory,
    ReservationService,
    Avianca,
    Wingo,
    Click,
    CryptoService,
  ],
})
export class AppModule {}
