
const tarefasServices = require('../services/tarefaServices');
async function listarTarefas(req,res){
   try{
       const tarefas = await tarefasServices.listarQuery();
       res.status(200).json(tarefas);
   }catch(erro){
       res.status(500).json({erro:'Erro ao buscar tarefas'});
   }
}
module.exports = {listarTarefas}