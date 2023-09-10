import { APIClient } from '../utils/client.js';

const host = 'https://fmpcloud.io/api/v3';
const apiKey = '48c4ab01b637a5eb0c8d133189d36f30';


export class BalanceSheet extends APIClient {

    public constructor(ticker: string){
        super();
        this.api_url = `${host}/balance-sheet-statement/${ticker}?apikey=${apiKey}`;
    }
}
const apple_income = new BalanceSheet('AAPL');
const apple_data = await apple_income.getJson();
console.log(apple_data);
