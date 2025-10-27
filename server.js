//importa o pacote express
import express from "express";

//cria o servidor express
const server = express();
//adapta o servidor a receber e enviar JSON
server.use(express.json());

//define a porta que o servidor vai usar, nesse exemplo será a porta 3000, mas pode ser a da sua escolha
const port = 3000;

// ---------------- rotas ---------------- //

///O servidor chama as rotas mediante a função
server.get("/", (request, response) => {
  //a rota chamada é um get
  response.send("Hello, welcome to our API example"); // Returna como resposta a string com o texto
});

//Por fim deixamos o server online no ip:'127.0.0.1' ou se colocarmos o ip sera o localhost e porta :3000
server.listen(port, "127.0.0.1", () => {
  // O metodo listen cria a regra de ip e porta
  console.log(`O servidor está online na porta ${port}`);
});
