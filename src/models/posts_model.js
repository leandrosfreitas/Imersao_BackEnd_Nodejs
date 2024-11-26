import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbconfig.js";

// Estabelece a conexão com o banco de dados usando a string de conexão da variável de ambiente `STRING_CONEXAO` (assumindo que está configurada)
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para recuperar todos os posts do banco de dados
export async function getTodosPosts() {
    // Acessa o banco de dados "imersao-instabytes" e a coleção "posts"
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    // Recupera todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}

export async function criar_post(novo_post) {
    // Acessa o banco de dados "imersao-instabytes" e a coleção "posts"
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    return colecao.insertOne(novo_post);
}

export async function atualizar_post(id, novo_post) {
    // Acessa o banco de dados "imersao-instabytes" e a coleção "posts"
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    const obj_id = ObjectId.createFromHexString(id)
    return colecao.updateOne({_id: new ObjectId(obj_id)}, {$set:novo_post});
}