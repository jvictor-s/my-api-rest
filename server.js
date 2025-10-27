//importa o pacote express
import express from "express";

//cria o servidor express
const server = express();
//adapta o servidor a receber e enviar JSON
server.use(express.json());

//define a porta que o servidor vai usar, nesse exemplo será a porta 3000, mas pode ser a da sua escolha
const port = 3000;

// ---------------- rotas ---------------- //

//O servidor chama as rotas mediante o metodo (get,post,put,patch,delete)
server.get("/", (request, response) => {
  //a rota chamada é um GET
  response.status(200).send("Hello, welcome to our API example"); // Returna como resposta a string com o texto
}); // seguindo o padrão REST sempre temos que informar um status de resposta (200, 201, 400, 404, 500) e outros
// nesse site tem alguns exemplos de status : https://www.devmedia.com.br/http-status-code/41222
// nesse exemplo o get só retorna uma mensagem de boas vindas, mas pode retornar um JSON ou outros

// ----------- metodo GET ------------ //
server.get("/users", (request, response) => {
  response.status(200).send("Retorna uma Lista de Usuários");
});
// metodo GET com um parametro
server.get("/users/:id", (request, response) => {
  const id = request.params.id;
  response.status(200).send(`Retorna um usuário com o id ${id}`);
});
// metodo GET com uma query
server.get("/users", (request, response) => {
  const { name } = request.query;
  response.status(200).send(`Retorna um usuário com o nome ${name}`);
});

// ----------- metodo POST ------------ //
server.post("/users", (request, response) => {
  const { name, email } = request.body;
  response
    .status(201)
    .send(`Cria um usuário com o nome ${name} e email ${email}`);
});

// ----------- metodo PUT ------------ //
server.put("/users/:id", (request, response) => {
  const id = request.params.id;
  const { name, email } = request.body;
  response
    .status(200)
    .send(`Atualiza um usuário com o id ${id} e nome ${name} e email ${email}`);
});

// ----------- metodo DELETE ------------ //
server.delete("/users/:id", (request, response) => {
  const id = request.params.id;
  response.status(200).send(`Deleta um usuário com o id ${id}`);
});

// ----------- metodo PATCH ------------ //
server.patch("/users/:id", (request, response) => {
  const id = request.params.id;
  const { name, email } = request.body;
  response
    .status(200)
    .send(
      `Atualiza parcialmente um usuário com o id ${id} e nome ${name} e email ${email}`,
    );
});

//Por fim deixamos o server online no ip:'127.0.0.1' ou se colocarmos o ip sera o localhost e porta :3000
server.listen(port, "127.0.0.1", () => {
  // O metodo listen cria a regra de ip e porta
  console.log(`O servidor está online na porta ${port}`);
});
