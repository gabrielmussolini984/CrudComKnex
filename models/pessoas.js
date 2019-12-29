// Listando Pessoas
const findAll = async(db) =>{
  const pessoas = await db('pessoas').select('*')
  return pessoas;
};
// Buscando uma pessoa
const findOne = async(db, id) =>{
  console.log(id)
  return await db('pessoas').where({id: id}).select('*')
};
// Deletando Pessoas
const deletePessoa = async(db, id) =>{
  return await db('pessoas').where({id: id}).del();
};
// Criando Pessoas
const criarPessoa = async(db, data) =>{
  return await db('pessoas').insert({nome: data.nome, nascimento: data.nascimento, cargo: data.cargo});
};
// Editando Pessoas
const editarPessoa = async(db, id, data) =>{
  return await db('pessoas').where({id}).update({nome: data.nome, nascimento: data.nascimento, cargo: data.cargo});
};
// Exportando Funções.
module.exports = {
  findAll,
  findOne,
  deletePessoa,
  criarPessoa,
  editarPessoa
}