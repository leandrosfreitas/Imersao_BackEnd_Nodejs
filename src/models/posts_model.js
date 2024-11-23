import conectarAoBanco from "../config/dbconfig.js";

// Estabelece a conexão com o banco de dados usando a string de conexão da variável de ambiente `STRING_CONEXAO` (assumindo que está configurada)
const conexao = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função assíncrona para recuperar todos os posts do banco de dados
export default async function getTodosPosts() {
    // Acessa o banco de dados "imersao-instabytes" e a coleção "posts"
    const db = conexao.db("imersao-instabytes");
    const colecao = db.collection("posts");
    
    // Recupera todos os documentos da coleção e retorna como um array
    return colecao.find().toArray();
}