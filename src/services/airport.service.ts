
import { Injectable } from "@nestjs/common";
import { ConfigService } from '@nestjs/config';

import { AIRPORTS } from '../data/airports';
import { Airport } from "src/models/airport.model";

@Injectable()
export class AirportService {
    constructor(private configService: ConfigService) {
        console.log(this.configService.get('envs.variable1'));
    }

    getAirports(str: string): Airport[] {
        return AIRPORTS.filter(item => item.ita === str || item.city.toUpperCase().indexOf(str) !== -1 || item.countryName.toUpperCase().indexOf(str) !== -1);
    }
}