import { config } from 'dotenv';
import 'dotenv/config';
import mongoose from 'mongoose';
import { __dirname } from '../../shortcuts.js';

config({path: `${__dirname}/.env`});
mongoose.set('strictQuery', false);

interface ENV {
    MONGO_DB_PWD: string | undefined;
    MONGO_DB_USERNAME: string | undefined;
    MONGO_DB_NAME: string | undefined;
}

const getDBConfig = (): ENV => {
    return {
        MONGO_DB_PWD: process.env.MONGO_DB_PWD,
        MONGO_DB_USERNAME: process.env.MONGO_DB_USERNAME,
        MONGO_DB_NAME: process.env.MONGO_DB_NAME
};
   
};

export const startDB = async() => {
    const dbConfig = getDBConfig(); 
    const connectionString = `mongodb+srv://${dbConfig.MONGO_DB_USERNAME}:${dbConfig.MONGO_DB_PWD}@${dbConfig.MONGO_DB_NAME}.mongodb.net/?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(connectionString);
        console.log(`Connected to MongoDB...`)
    } catch(e){
        console.log(e);
    }
    
};