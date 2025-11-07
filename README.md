<h1 align="center" > 🧩 Bem-vind[oa] à My API REST</h1>
<p align="center"> Este repositório surgiu da ideia de nós, estudantes e admiradores de APIs, criarmos uma documentação completa, simples e intuitiva, que mostre boas práticas no uso e desenvolvimento de APIs REST (ou RESTful).</p>
<p align="center"> Nosso objetivo é ajudar ao máximo quem está começando agora nesse universo das APIs. Este é um repositório colaborativo e aberto a todos nós — sinta-se à vontade para explorar, aprender e contribuir! 💡</p>

<h2 align="center">Sumário</h2>
<ol>
  <li><a href="#introducao">Introdução a API REST</a></li>
  <li><a href="#criar-api-express">Criando minha primeira API REST com Express.js</a></li>
  <li><a href="./src/database/README.md">Como conectar minha API a um Banco de Dados? </a></li>
  <li><a href="./models/README.md">Exemplos de metodos</a></li>
  <li><a href="./typescript/README.md">Como criar uma API em TypeScript?</a></li>
  <li><a href="#contribuicao">Como contribuir no projeto?</a></li>
  <li><a href="#referencias">Referências</a></li>
</ol>

<h2 align="center" id="introducao">Introdução</h2>
<h3>O que é uma API?</h3>

<p>API é a sigla para Application Programming Interface, ou Interface de Programação de Aplicações.</p>
<p>uma API é um conjunto de definições e protocolos que permite que diferentes softwares se comuniquem entre si. Em outras palavras, ela define a maneira como dois sistemas interagem, trocando dados e comandos de forma padronizada.</p>

<h3>Como uma API funciona?</h3>
<h4>O exemplo do garçom</h4>
<p>Todos que são da área da tecnologia, fazem faculdade ou até mesmo estudam API por conta propria já ouviram falar desse exemplo por um professor, colega de turma ou amigo, é isso mesmo não temos como fugir desse exemplo, querendo ou não é o mais simples e pratico para podermos entender o funcionamento de uma API.</p>

<p>imagine que uma API funcione como um garçom em um restaurante:</p>
<ol>
  <li>O cliente (você) faz um pedido (requisição);</li>
  <li>O garçom (API) leva o pedido à cozinha (servidor);</li>
  <li>A cozinha prepara o prato (processa a solicitação);</li>
  <li>O garçom (API) retorna com a comida (resposta).</li>
</ol>
<p>Assim, a API intermedia a comunicação entre o cliente e o servidor sem que o cliente precise saber como a cozinha funciona internamente.</p>

<h3>O que é uma API REST</h3>

<p>API REST (ou RESTful) é um conjunto de princípios de arquitetura que guiam como as APIs devem ser criadas.</p>

<p>Quando um cliente faz uma requisição a uma API RESTful, o servidor envia uma representação do recurso solicitado, geralmente no formato JSON — que é o mais usado por ser leve, fácil de ler e compatível com várias linguagens.</p>

<p>Além disso, as requisições HTTP usam headers (cabeçalhos) e parâmetros para incluir informações importantes, como autenticação, cache, cookies, URI e códigos de status (200, 201,300,400,404,500), que indicam se a operação foi bem-sucedida ou não.</p>

<p>Ela segue princípios específicos que facilitam a comunicação via HTTP, o mesmo protocolo usado na web.</p>

<h4>Uma API RESTful utiliza métodos padrão como:</h4>

<ul>
  <li>GET – para obter dados;</li>
  <li>POST – para criar novos dados;</li>
  <li>PUT – para atualizar;</li>
  <li>PATCH - para atualizar os dados parcialmente </li>
  <li>DELETE – para remover.</li>
</ul>

<p>Essas APIs geralmente trocam informações em formato JSON ou XML, permitindo que sistemas muito diferentes se entendam com facilidade.</p>

<h2 align="center" id="criar-api-express">Criando minha primeira API REST com Express.js</h2>

<p>Certifique-se que tenha instalado o Node.js e o gerenciado de pacotes npm </p>

<a href="https://nodejs.org/pt/download"> Download do Node.js</a>

<p>Normalmente ao instalar o Node.js o gerenciador de pacotes npm vem instalado junto</p>

<h3>Com o Node.js e o npm instalados é só seguir esses passos:</h3>

-----

<h4>1º Passo - instale os pacotes necessários</h4>

-----

<p>No terminal coloquei o seguinte código: </p>

```shell
npm init -y
```
> iniciando o npm, será gerado o arquivo
`package.json`

<br>

<strong>Obs: devemos trocar o Common JS pelo o ES Module , pois o module, é uma novo modelo de trabalho com modulos do JavaScript mais moderno e que possui melhor compatibilidade com os navegadores </strong>

<p>Abra o arquivo <code>package.json</code>, nele você verá a seguinte estrutura: </p>

```JSON
{
  "name": "nome-do-projeto",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "type": "commonjs",
  "dependencies": {
  }
}
```
<p>Na parte do código onde o tipo está "commonjs", você ira substituir por "module", como o exemplo abaixo está mostrar: </p>

```shell
"type": "module"
```
> após a substituição é śo salvar o arquivo

<br>

<p>Voltando ao terminal é só colocar:</p>

```shell
npm i express
```
> assim você já consiguira usar o express. Será criado também um arquivo chamado
`package-lock.json`

<p>para verificar se realmente o express foi instalado é só acessar o arquivo <code>package.json</code></p> 
<p>na parte das depencias você verá que estará desse jeito:</p>

```shell
"dependencies": {
    "express": "^numero-da-versao-do-express"
  }
```
<p>se preferir usar o TypeScript,você precisara usar outros comandos no terminal e baixar outros pacotes, veja mais informações abaixo para o uso do TypeScript:</p>
<a href="./typescript/README.md">Como criar uma API em TypeScript?</a>

-----

<h4>2º Passo - criar o arquivo principal </h4>

-----
<p>O nome desse arquivo fica a criteiro seu, e pode ser <code>app.js</code> ,<code>main.js</code>, <code>ìndex.js</code>,<code>server.js</code> se for usar JavaScript, porém se for usar o TypeScript é só mudar o final do arquivo para <code>.ts</code> </p>

<p>o arquivo principal seque essa estrutura a depender de estamors utilixando JavaScript ou TypeScript</p>

```js
import express  from "express";
```
> Importa o pacote express
<br>

```js
const server = express();
```
> Cria o servidor express
<br>

```js
server.use(express.json());
```
> Faz com que o servidor receba e envie JSON
<br>

```js
const port = 3000;
```
> Determina a porta que o servidor ira usar
<br>

``` js
server.get('/', (request, response) => { //a rota chamada é um get
  response.send('Hello, welcome to our API example');// Returna como resposta a string com o texto
});
```
> O server chama as rotas mediante a função
<br>

```js
server.listen(port, () => { // O metodo listen cria a regra de ip e porta
  console.log(`O servidor está online na porta ${port}`);
});
```
> Por fim deixamos o server online no ip:localhost e porta :3000
<br>

Para testarmos excultamos o codigo no terminal

```shell
node nome-do-arquivo.js
```
ou

```shell
node nome-do-arquivo.ts
```
<br>

<p>podemos também criar um atalho dentro do package.json, como no exemplo do codigo:</p>

```package.json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node ./src/server.js"
  },
```

<p>e chamando o atalho no terminal</p> 

```shell
npm start
```

<h2 align="center" id="contribuicao">Como contribuir?</h2>
<p align="center">Siga o metodo abaixo, para contribuir em 4 passos simples:</p>

<p>1 - Faça um fork deste repositório;</p>
<p>2 - Crie uma nova branch para a sua modificação;</p>

```shell
git checkout -b minha-contribuicao
```
<p>3 - Faça suas alterações e envie um pull request (PR);</p>
<p>4 - Aguarde o feedback e integração com o projeto principal.</p>
<p>Caso queira entrar em contato, deixe uma mensagem nos meus canais de comunicação — ficarei feliz em trocar ideias e colaborar!</p>

<p>🚀 Estamos juntos nessa jornada de aprendizado e construção de boas práticas em APIs REST!</p>


<h2 align="center" id="referencias">Referências</h2>

<ul>
  <li><a href="https://www.redhat.com/pt-br/topics/api/what-is-a-rest-api">O que é uma API REST?</a></li>
  <li><a href="https://aws.amazon.com/pt/what-is/api/">O que é uma API (interface de programação de aplicações)?</a></li>
</ul>
