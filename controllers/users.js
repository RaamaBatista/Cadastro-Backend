const express = require('express')
const router = express.Router();
const db = require('./../db/models')
router.post("/users", async (req, res) => {
    var dados = req.body;
    console.log(dados)
    await db.Users.create(dados).then((dadosUser)=>{

        return res.json({
            mensagem: 'cada',
            dadosUser
        })
    }).catch((error)=>{
        
        return res.json({
            mensagem: 'erro',error,
          
        })
    })
    })



module.exports = router