import { APIClient, getConfig } from '../utils/client.js';

export class IncomeStatement extends APIClient {

    public constructor(ticker: string){
        super();
        this.api_url = `${getConfig().API_HOST}/income-statement/${ticker}?apikey=${getConfig().API_KEY}`;
    }
}
