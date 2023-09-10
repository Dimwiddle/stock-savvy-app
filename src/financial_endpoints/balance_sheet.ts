import { APIClient, getConfig } from '../utils/client.js';


export class BalanceSheet extends APIClient {

    public constructor(ticker: string){
        super();
        this.api_url = `${getConfig().API_HOST}/balance-sheet-statement/${ticker}?apikey=${getConfig().API_KEY}`;
    }
}
