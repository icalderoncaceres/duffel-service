
import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ISubscribeRequest } from "src/models/subscription.model";
import { Datastore } from '@google-cloud/datastore';

@Injectable()
export class SubscriptionService {
    private kind = 'subscriptions';
    constructor(private configService: ConfigService) {
        console.log(this.configService.get('envs.PERCENTAJE'));
    }

    async subscribe(subscribeRequest: ISubscribeRequest) {
        const name = `${subscribeRequest.outboundIta}_${Date.now()}`;
        console.log('name:', name);
        const datastore = new Datastore();
        const taskKey = datastore.key([this.kind, name]);
    
        const task = {
          key: taskKey,
          data: subscribeRequest,
        };
    
        try {
          await datastore.save(task);
          console.log('subscription successfully');
        } catch (error) {
            console.log('subscription failed');
          throw error;
        }
    }
}