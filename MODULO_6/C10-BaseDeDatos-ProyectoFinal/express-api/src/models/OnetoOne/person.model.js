import { DataTypes } from "sequelize";
import { connection } from "../../db/sequelize.js"

import { Document } from "./document.model.js";

export const Person = connection.define(
  "Person",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

Person.hasOne(Document, {
   foreignKey: "personId",
    sourceKey: "id"
})

Document.belongsTo(Person, {
    foreignKey: "personId",
    tarjetKey: "id"
});

