import { Sequelize } from 'sequelize';
import { env } from "../config/env.js";

const { database } = env;

export const connection = new Sequelize(database.database, database.username, database.password, {
  host: database.host,
  dialect: database.dialect,
});
