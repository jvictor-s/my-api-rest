<h1 align="center" id="metodos">Exemplos de Metodos</h1>
<h2 align="center">Metodo GET</h2>
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
