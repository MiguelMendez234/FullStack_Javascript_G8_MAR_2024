import mongoose from 'mongoose';
import { env } from "../config/env.js";


const { user, database, password, host } = env.mongoDB;


const connectionString = `mongodb+srv://${user}:${password}@${host}/${database}?retryWrites=true&w=majority&appName=Cluster0`;


export async function mongoConnection () {
    console.log('mongo')
    try {
        await mongoose.connect(connectionString);
        console.log('Mongo DB connection established')
    } catch (err) { 
        console.log(err.message);

    } 


}


