// Importa o framework Express.js para criar a aplicação web
import express from "express";
import routes from "./src/routes/posts_routes.js";

// Cria uma instância da aplicação Express
const app = express();
app.use(express.static("uploads"))
routes(app)

// Inicia o servidor na porta 3000 e exibe uma mensagem de sucesso no console
app.listen(3000, () => {
    console.log("Servidor escutando na porta 3000...");
});