import { APIClient } from '../utils/client.js';
import { iIncomeStatement } from '../api_interfaces/income_statement.js';

const host = 'https://fmpcloud.io/api/v3';
const apiKey = '48c4ab01b637a5eb0c8d133189d36f30';


export class IncomeStatement extends APIClient {

    public constructor(ticker: string){
        super();
        this.api_url = `${host}/income-statement/${ticker}?apikey=${apiKey}`;
    }
}

const apple_income = new IncomeStatement('AAPL');
const apple_data = await apple_income.getJson();
console.log(apple_data);
