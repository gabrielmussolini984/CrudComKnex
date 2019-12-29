// Listando Pessoas
const findAll = async(db) =>{
  const pessoas = await db('pessoas').select('*')
  return pessoas;
};/*
  const findOne = (connection, id) =>{
    return new Promise((resolve, reject) =>{
      connection.query(`select * from pessoas where id = ${id}`, (err ,results)=>{
        if (err){
          reject(err);
        }else {
          if (results.length > 0){
            resolve(results[0]);
          }else{
            resolve({});  
          }
        }
      });
    });
  };
  */
  // Deletando Pessoas
  const deletePessoa = async(db, id) =>{
    return await db('pessoas').where({id: id}).del();
  };
  // Criando Pessoas
  const criarPessoa = async(db, data) =>{
    return await db('pessoas').insert({nome: data.nome, nascimento: data.nascimento, cargo: data.cargo});
  };
  /*
  // Editando Pessoas
  const editarPessoa = (connection, id, data) =>{
    return new Promise((resolve,reject)=>{
      connection.query(`update pessoas set nome = '${data.nome}',nascimento = '${data.nascimento}', cargo = '${data.cargo}' where id = ${id}`, (err,results)=>{
        if (err){
          console.log(err)
          reject(err);
        }else{
          resolve();
        }
      });
    });
  };*/
  // Exportando Funções.
  module.exports = {
    findAll,
    /*findOne,*/
    deletePessoa,
    criarPessoa,/*
    editarPessoa*/
  }