import { ConfigService } from "@nestjs/config";
import { GetFlightsRequest } from "src/models/fligth.model";

interface IProvider {
    getFlights(getFlightsRequest: GetFlightsRequest): Promise<{ code: number, outboundFlights: any[], returnFlights: any[] }>
}

export abstract class Provider implements IProvider {

    constructor(protected configService: ConfigService) {
        console.log(this.configService);
    }
    public abstract getFlights(getFlightsRequest: GetFlightsRequest): Promise<{ code: number, outboundFlights: any[], returnFlights: any[] }> 
}
