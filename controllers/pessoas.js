const pessoas = require('../models/pessoas');

// Listando
const listaPessoas = async(db,req,res)=>{
  const resultado = await pessoas.findAll(db); 
  res.render('pessoas/listaPessoas', {resultado})
}
const deletePessoa = async(db,req,res)=>{
  await pessoas.deletePessoa(db, req.params.id);
  res.redirect('/pessoas');
}

const criarPessoaForm = (req, res)=>{
  res.render('pessoas/criarPessoaForm');
}
const criarPessoa = async(db,req,res) =>{
  await pessoas.criarPessoa(db, req.body);
  res.redirect('/pessoas');
}
/*
const editarPessoaForm = async (connection,req,res) =>{
  const resultado = await pessoas.findOne(connection,req.params.id);
  res.render('pessoas/editarPessoaForm', {resultado: resultado});
}
const editarPessoa = async(connection,req,res) =>{
  await pessoas.editarPessoa(connection, req.params.id, req.body);
  res.redirect('/pessoas');
}
*/

module.exports = {
  listaPessoas,
  deletePessoa,
  criarPessoaForm,
  criarPessoa,
  /*
  editarPessoaForm,
  editarPessoa*/
}