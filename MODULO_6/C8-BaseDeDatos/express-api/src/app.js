import express from "express";
import { env } from "./config/env.js";
import router  from './routes/movieRoutes.js';
import { connection } from "./db/sequelize.js";

async function main () {
  const app = express();
  const port = env.port || 3000;
  
  app.use(express.json());
  
  app.use(router);
  
  
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  
  app.listen(port, () => {
    console.log('listening on port', port);
  });
  
  console.log("Starting");

}

main();


