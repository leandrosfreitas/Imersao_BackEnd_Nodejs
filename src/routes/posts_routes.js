// Importa o framework Express.js para criar a aplicação web
import express from "express";
import multer from "multer";
import { listar_posts, postar_novo_post, upload_imagem, atualizar_novo_post } from "../controllers/posts_controllers.js";

const upload = multer({dest:"./uploads"})

const routes = (app) => {
    // Habilita o middleware `express.json()` para analisar requisições no formato JSON
    app.use(express.json());
    // Rota GET para o endpoint "/posts" que retorna todos os posts
    app.get("/posts", listar_posts);
    // Rota para criar um post
    app.post("/posts", postar_novo_post);
    app.post("/upload", upload.single("imagem"), upload_imagem)

    app.put("/upload/:id", atualizar_novo_post)
}

export default routes;
