import { APIClient, getConfig } from '../utils/client.js';


export class CashFlow extends APIClient {

    public constructor(ticker: string){
        super();
        this.api_url = `${getConfig().API_HOST}/cash-flow-statement/${ticker}?apikey=${getConfig().API_KEY}`;
    }
}
