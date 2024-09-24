import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js"

export const Document = connection.define(
    'Document',
    {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
        },
        number: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        isCompleted: {
          type: DataTypes.BOOLEAN,
          defaultValue: false,
        },
      },
      {
        timestamps: false,
      }
)

