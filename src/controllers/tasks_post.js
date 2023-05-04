const {Checkin} = require('../models/checkin');
const {Insert} = require('../models/add_participante');
const {Crypt} = require('./encrypt');
const {Send_whatsapp} = require('./whatsapp_bot');


// Confirmar a presença do participante na hora do checkin
async function Presence(req, res){
    try{
        const data = await Checkin(req.body);
        if(data.rowCount < 1){
            res.status(204).send('Fail');
        }else{
            res.status(201).send('Done');
        }

    }catch(err){
        return res.status(500).send('Falha ao confirmar presença do participante.');
    }
}


async function Novo_participante(req, res){

    try{
        
        const qr_key = Crypt(req.body['cpf']);
        const data = await Insert(req.body, qr_key);

        if(data.rowCount < 1){
            res.status(204).send({'Error':'Não foi possivel cadastrar'});
        }else{
            res.status(201).send({'Sucesso':'Cadastrado com sucesso'});
            Send_whatsapp(req.body['phone'], qr_key);
        }
    }catch(err){
        console.log(err)
        res.status(500);
    }
}


module.exports = {Presence, Novo_participante}