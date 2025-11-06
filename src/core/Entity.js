import sequelize from "../database/sequelize.js";
import { DataTypes } from "sequelize";

const Entity = sequelize.define(
  "Entidade",
  {
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    cpf: {
      type: DataTypes.CHAR(11),
      allowNull: true,
    },
    dataNascimento: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "entidade",
    timestamps: true,
  },
);

Entity.sync();

export default Entity;
