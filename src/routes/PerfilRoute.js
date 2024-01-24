const express = require("express");
const router = express.Router()
const {verificar} = require('./../middleware/AutenticacaoMiddleware')
const perfilService = require('./../services/perfilService')

router.post('',async(req,res)=> {
    try {
        
        const resposta = await perfilService.cadastrar(req.body)
        res.json(resposta)
    } catch (error) {
        res.status(error.status).json({
            message: error.message
        })
    }
}
)

module.exports = router 
