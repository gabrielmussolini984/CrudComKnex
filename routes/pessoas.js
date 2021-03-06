// Imports  
const express = require('express'); 
const path = require('path');
const pessoasController = require('../controllers/pessoas');


//Injetando dependencias
const pessoasRouter = ({db}) =>{
  const router = express.Router();
  router.get('/', pessoasController.listaPessoas.bind(null, db));
  router.get('/delete/:id', pessoasController.deletePessoa.bind(null, db));
  router.get('/criarPessoaForm', pessoasController.criarPessoaForm);
  router.post('/criarPessoa', pessoasController.criarPessoa.bind(null, db));
  router.get('/editarPessoaForm/:id', pessoasController.editarPessoaForm.bind(null, db));
  router.post('/editarPessoa/:id', pessoasController.editarPessoa.bind(null, db));
  return router;
};


module.exports = pessoasRouter;