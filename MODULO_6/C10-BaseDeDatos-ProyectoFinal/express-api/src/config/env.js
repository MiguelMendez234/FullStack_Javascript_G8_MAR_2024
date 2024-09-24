import 'dotenv/config';

export const env = {
    "database": {
      "username": process.env.DB_USERNAME,
      "password": process.env.DB_PASSWORD,
      "database": process.env.DB_NAME,
      "host":     process.env.DB_HOST,
      "dialect": "postgres"
    },
    mongoDB: {
      user: process.env.DB_MONGO_USER,
      database: process.env.DB_MONGO_DATABASE,
      password: process.env.DB_MONGO_PASSWORD,
      host: process.env.DB_MONGO_HOST,
    }
}