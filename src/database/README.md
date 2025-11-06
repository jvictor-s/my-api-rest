<h1 align="center" id="api-conectar-banco">Como Conectar minha API a um Banco de Dados?</h1>

<p>Para criar uma conexão com o banco de dados você precisara de um ORM (Object-Relational Mapping), no nosso exemplo iremos utilizar o Sequelize.</p>
<p>Você irá precisar também de um SGBD (Sistema de Gerencimento de Banco de Dados) ou DBMS (Database Management Sistem),no nosso exemplo iremos utilizar o Postgres SQL </p>

-----

<h4>1º Passo - instale os pacotes necessários</h4>

-----

<p>Para instalar o sequelize, é só acessar o terminal e colocar o comando abaixo:</p>

```shell
npm install sequelize
```
> Com isso será baixado os pacotes necessarios para o uso do
<a href="https://sequelize.org/" >Sequelize</a>
<br>
<p>Como alguns dados de conexão são sensiveis, precisamos oculta-los, por isso iremos usar o pacote <a href="https://www.npmjs.com/package/dotenv">dotenv</a> </p>
<p>Esse pacote nos permite criar um arquivo .env para realizarmos as configurações de senha e host para acesso ao banco de dados</p>

<p>Para instalar o pacote é simples, é só acessar o terminal e colocar o comando abaixo:</p>

```shell
npm i dotenv
```
> esse pacote nos permite fazer configurações e oculta-las em diversas pastas e arquivos do código, como por exemplo, a configuração de IP e porta para aplicações que precisem de um segurança de rede

<p>Agora é só criar o arquivo <code>.env</code></p>
<p>dentro desse arquivo é só seguir essa estrutura</p>

```.env
IP = 127.0.0.1
PORT = 3000
PG_HOST = localhost
PG_DATABASE = exemplo
PG_USERNAME = postgres
PG_PASSWORD = postgres
```
> Nesse exemplo colocamos as configurações de IP e porta, mas não são necessarias a depender do projeto.

<br>
<p> Iremos precisar também do pacote <a href="https://www.npmjs.com/package/pg">pg</a> para podermos usar o postgres client</p>
<p>Para instalar o pacote é simples, é só acessar o terminal e colocar o comando abaixo:</p>

```shell
npm i pg
```
> Com isso finalizamos a parte dos pacotes que precisamos instalar


<h4>2º Passo - Criando o arquivo sequelize.js</h4>

-----

<p> Com o arquivo sequelize.js criado, dentro dele devemos seguir a estrutura</p>

```js
import { Sequelize } from "sequelize";
import dotenv from "dotenv";
```
> Importa os pacotes necessarios

<br>

```js
dotenv.config();
```
> Configura o dotenv

<br>

```js
const sequelize = new Sequelize(
  process.env.PG_DATABASE,
  process.env.PG_USERNAME,
  process.env.PG_PASSWORD,
  {
    host: process.env.PG_HOST,
    dialect: "postgres",
  },
);
```
> Criar a constante sequelize que ira receber as configurações do arquivo .env, com o nome do banco, host, usuario e senha

<br>

```js
async function testarconexao(params) {
  try {
    await sequelize.authenticate();
    console.log("Conexão estabelecida com sucesso! =D");
  } catch (erro) {
    console.log("Não foi possivel se conectar ao banco de dados: ", erro);
  }
}
```
> Criar a função testarconexao, para verificar no momento da execução se o banco está se conectando ao projeto

<br>

```js
testarconexao();
```
> Chamamos a função testarconexao

<br>

```js
export default sequelize;
```
> Por ultimo exportamos o codigo para ser usado em outros arquivos

-----

<h4>3º Passo - usando o sequelize, para criação de entidades</h4>

-----

<p>Para utilizar o sequelize é bem simples, criamos um arquivo <code>Entidade.js</code></p>
<p>e dentro dele fazermos a sequinte estrutura</p>
```js
import sequelize from "../database/sequelize.js";
import { DataTypes } from "sequelize";
```
