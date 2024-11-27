import express from "express";
import multer from "multer";
import cors from "cors";
import { atualizarNovoPost, listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsController.js";

const corsOption = {
  origin: "http://localhost:8000",
  optionsSucessStatus: 200,
}

const upload = multer({ dest: "./uploads" });

const routes = (app) => {
  app.use(express.json());
  // Habilita o middleware para que o Express possa entender requisições com corpo no formato JSON. 
  // Isso é crucial para receber dados de formulários ou de APIs que enviam dados em JSON.

  app.use(cors(corsOption));

  app.get("/posts", listarPosts);
  // Define uma rota de busca para a URL "/posts".

  app.post("/posts", postarNovoPost)
  // Define uma rota de criação para a URL "/posts".

  app.post("/upload", upload.single("imagem"), uploadImagem);
  
  app.put("/upload/:id", atualizarNovoPost)
}

export default routes;