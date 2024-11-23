// Importa o framework Express.js para criar a aplicação web
import express from "express";
import { listar_posts, postar_novo_post } from "../controllers/posts_controllers.js";

const routes = (app) => {
    // Habilita o middleware `express.json()` para analisar requisições no formato JSON
    app.use(express.json());
    // Rota GET para o endpoint "/posts" que retorna todos os posts
    app.get("/posts", listar_posts);
    app.post("/posts", postar_novo_post)
}

export default routes;
