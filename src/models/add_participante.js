/*

    RECURSO DISPONÍVEL APENAS PARA O FORM DE INSCRIÇÃO NO SITE

*/
const {site_pool} = require('../models/connect_db');
const {Crypt} = require('../controllers/encrypt');
const {Send_whatsapp} = require('../controllers/whatsapp_bot');


const sql_insert = "INSERT INTO participantes(name, cpf, email, phone, gender, city,\
    state, payment, code, presence) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";


async function Insert(data, qr_key){
    
    return new Promise((resolv, reject)=>{
        site_pool.query(sql_insert, [data['name'], data['cpf'], data['email'],
        '55'+data['phone'], data['gender'],data['city'], data['state'], 'Pendente', 
        qr_key, 'Ausente'], 

        (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolv(result.rowCount);
            }
        })
    })
}

module.exports = {Insert};