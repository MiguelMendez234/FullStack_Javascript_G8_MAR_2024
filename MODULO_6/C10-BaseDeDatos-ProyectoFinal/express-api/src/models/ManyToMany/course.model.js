import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js"



export const Course = connection.define(
    'Course',
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
        },
      },
      {
        timestamps: false,
      }
)