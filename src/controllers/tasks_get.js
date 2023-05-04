const {GetAll_Model, QR_Model} = require('../models/consulta_db');


async function GetAll(req, res){
    try{
        const data = await GetAll_Model();
        res.send(data);
    }catch(err){

    }
    
}

// Retorna os dados do usuário a partir do QRcode
async function QR(req, res){
    try{
        const data = await QR_Model(req.body);
        res.status(200).json(data);
    }catch(err){

    }
}


module.exports = {GetAll, QR};