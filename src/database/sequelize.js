import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  },
);

async function testarConexao(params) {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso! =D");
  } catch (erro) {
    console.log("Não foi possivel se conectar ao banco de dados: ", erro);
  }
}

testarConexao();

export default sequelize;
