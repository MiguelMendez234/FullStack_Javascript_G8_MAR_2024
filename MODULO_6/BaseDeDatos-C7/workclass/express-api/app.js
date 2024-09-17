require('dotenv').config()
const express = require("express");
const router = require('./routes/movieRoutes');
const connection  = require("./db/sequelize");


async function main(){
  const app = express();
  const port = 3000;
  
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


