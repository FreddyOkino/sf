const bcrypt = require('bcrypt')
const perfilModel = require('../models/Perfil')

module.exports={
  
  buscarPorId: async(id) => {
    try {
    return await perfilModel.findOne({_id: id})
    }catch (error){
     throw {message: error.message, status:500}
    }
   },

  editar: async(id, perfil) => {
    try{
     return await perfilModel.updateOne({_id : id}, perfil)
    }catch(error){
     throw{message:error.message,status:500}
    }
  },
  
  cadastrar: async (perfil) => {
    try{
      perfil.usuario.senha = await bcrypt.hash(perfil.usuario.senha, 10)
      let novoPerfil= await perfilModel.create(perfil)
      novoPerfil.usuario.senha = undefined
      return novoPerfil

    }catch(error){
      throw {message: error.message, status: 500}
    }   

  }
  
}