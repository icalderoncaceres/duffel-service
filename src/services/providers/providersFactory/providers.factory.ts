
import { Injectable } from "@nestjs/common";
import { DuffelService } from '../duffel/duffel.service';
import { Avianca } from "../avianca/avianca.service";
import { Click } from '../click/click.service';
import { Wingo } from '../wingo/wingo.service'; 
import { Provider} from '../provider';
import { GetFlightsRequest } from "src/models/fligth.model";

@Injectable()
export class ProvidersFactory {
    async getProviders(getFlightsRequest: GetFlightsRequest): Promise<Provider[]> {
        return [new DuffelService()];
    }
}