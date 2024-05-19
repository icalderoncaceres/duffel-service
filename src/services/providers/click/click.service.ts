import { ConfigService } from "@nestjs/config";
import { Provider } from "../provider";
import { GetFlightsRequest, IFlight } from "src/models/fligth.model";

export class Click extends Provider {
    constructor() {
        super(new ConfigService());
    }

    public async getFlights(getFlightsRequest: GetFlightsRequest): Promise<{ code: number; outboundFlights: any[]; returnFlights: any[]; }> {
        const outboundFlights: IFlight[] = [];
        const returnFlights: IFlight[] = [];
        return {
            code: 200,
            outboundFlights,
            returnFlights,
        };
    }

}