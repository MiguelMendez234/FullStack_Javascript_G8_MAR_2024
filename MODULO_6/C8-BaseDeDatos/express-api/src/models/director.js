import { DataTypes } from "sequelize";
import { connection } from "../db/sequelize.js";

import { Movie } from "./movie.js";


const Director = connection.define('Director', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    }
});

Director.hasMany(Movie, {
    foreignKey: 'directorId',
    sourceKey: 'id'
});

Movie.belongsTo(Director, {
    foreignKey: 'directorId',
    tarjetId: 'id'
});