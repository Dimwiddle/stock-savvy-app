import fetch from 'node-fetch';
import { config } from 'dotenv';
import 'dotenv/config';

config({path: '../.env'});

interface ENV {
    API_HOST: string | undefined;
    API_KEY: string | undefined;
}

export const getConfig = (): ENV => {
    return {
        API_HOST: process.env.API_HOST,
        API_KEY: process.env.API_KEY
};
   
};

export class APIClient {

    public api_url: string;

    public constructor() {
        this.api_url = "";
    }

    public async sendRequest(url: string) {
        this.api_url = url;
        const dataResponse = await fetch(url)
        .then(response => response.json())
        .then(data => {return data})
        .catch(e => console.log(e));

        const dataBody = Promise.resolve(await dataResponse);
        return dataBody;
    }

    async getJson() {
        const dataResponse = Promise.resolve(await this.sendRequest(this.api_url));
        return dataResponse;
    }

    
}

