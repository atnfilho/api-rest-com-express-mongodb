import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

// as rotas devem ser ordenadas da mais específica para a menos específica 
router
    .get('/livros', LivroController.listarLivros)
    .get('/livros/busca', LivroController.listarLivroPorEditora)
    .get('/livros/:id', LivroController.listarLivroPorId)
    .post('/livros', LivroController.cadastrarLivro)
    .put('/livros/:id', LivroController.atualizarLivro)
    .delete('/livros/:id', LivroController.excluirLivro);


export default router;
