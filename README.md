<h1 align="center" > 🧩 Bem-vind[oa] à My API REST</h1>
<p align="center"> Este repositório surgiu da ideia de nós, estudantes e admiradores de APIs, criarmos uma documentação completa, simples e intuitiva, que mostre boas práticas no uso e desenvolvimento de APIs REST (ou RESTful).</p>
<p align="center"> Nosso objetivo é ajudar ao máximo quem está começando agora nesse universo das APIs. Este é um repositório colaborativo e aberto a todos nós — sinta-se à vontade para explorar, aprender e contribuir! 💡</p>

<h2 align="center">Sumário</h2>
<ol>
  <li><a href="#introducao">Introdução a API REST</a></li>
  <li><a href="#criar-api-express">Criando minha primeira API REST com Express.js</a></li>
  <li><a href="#conectar-banco">Como conectar minha API a um Banco de Dados? </a></li>
  <li><a href="#metodos">Exemplo de metodos</a></li>
  <li><a href="#api-com-typescript"></a>Como cria uma API em TypeScript?</li>
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

<h2 align="center" id="metodos">Exemplos de Metodos</h2>
<h3>Metodo GET</h3>
<p>O GET é um dos principais métodos HTTP usados em APIs RESTful.</p>
<p>Ele serve para buscar (ou ler) informações de um servidor sem alterar nada nele.</p>

<p>Quando o cliente (como um navegador ou aplicativo) faz uma requisição GET, ele está pedindo ao servidor dados de um recurso específico.
O servidor então localiza e envia esses dados de volta na resposta, geralmente em formato JSON.</p>

<p>No exemplo abaixo vemos um servido que cadastra usuarios, e o get retorna a lista desses usuarios</p>

```js
server.get("/users", (request, response) => {
  response.status(200).send("Retorna uma Lista de Usuários");
});
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


