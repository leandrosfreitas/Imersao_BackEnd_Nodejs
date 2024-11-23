import fs from "fs"
import { getTodosPosts, criar_post } from "../models/posts_model.js";

export async function listar_posts(req, res) {
    // Chama a função `getTodosPosts()` para buscar os posts do banco
    const posts = await getTodosPosts(); 
    // Envia uma resposta com status 200 (OK) e os posts no formato JSON
    res.status(200).json(posts);
}

export async function postar_novo_post(req, res) {
    const novo_post = req.body;
    try {
        const post_criado = await criar_post(novo_post);
        res.status(200).json(post_criado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}

export async function upload_imagem(req, res) {
    const novo_post = {
        descricao: "",
        imgUrl: req.file.originalname,
        alt: ""
    }
    try {
        const post_criado = await criar_post(novo_post);
        const imagem_atualizada = `uploads/${post_criado.insertedId}.png`;
        fs.renameSync(req.file.path, imagem_atualizada)
        res.status(200).json(post_criado);
    } catch(erro) {
        console.error(erro.message);
        res.status(500).json({"Erro":"Falha na requisição"})
    }
}