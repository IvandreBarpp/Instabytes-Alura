import 'dotenv/config';
import { ObjectId } from "mongodb";
import conectarAoBanco from "../config/dbConfig.js";

const conexao = await conectarAoBanco(process.env.STRING_CONNECTION);

export async function getAllPosts() {
  // Função assíncrona para obter todos os posts do banco de dados.
  const db = conexao.db("imersao-instabytes")
  // Conecta ao banco de dados "imersao-instabytes". Assumindo que `conexao` é uma variável global ou importada com a conexão ao banco de dados.
  const colecao = db.collection("posts");
  // Seleciona a coleção "posts" dentro do banco de dados.
  return colecao.find().toArray();
  // Executa a query para encontrar todos os documentos na coleção e retorna os resultados como um array.
}

export async function criarPost(novoPost) {
  const db = conexao.db("imersao-instabytes")
  const colecao = db.collection("posts");
  return colecao.insertOne(novoPost);
}

export async function atualizarPost(id, novoPost) {
  const db = conexao.db("imersao-instabytes")
  const colecao = db.collection("posts");
  const objId = ObjectId.createFromHexString(id);
  return colecao.updateOne({_id: new ObjectId(objId)}, {$set:novoPost});
}