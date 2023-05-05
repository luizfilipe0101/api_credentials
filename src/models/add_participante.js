/*

    RECURSO DISPONÍVEL APENAS PARA O FORM DE INSCRIÇÃO NO SITE

*/
const {site_pool} = require('../models/connect_db');
const {Crypt} = require('../controllers/encrypt');
const {Send_whatsapp} = require('../controllers/whatsapp_bot');


async function Insert(data){

    const sql_insert = "INSERT INTO participantes(name, cpf, email, phone, city,\
        state, gender, age, occupation, code) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);";

    const qr_key = Crypt(data['cpf']);
    
    return new Promise((resolv, reject)=>{
        site_pool.query(sql_insert, [data['name'], data['cpf'], data['email'],
        '55'+data['phone'], data['city'],data['state'], data['gender'], data['age'],
        data['occupation'], qr_key], 

        (err, result)=>{
            if(err){
                reject(err);
            }else{
                resolv([result.rowCount, qr_key]);
            }
        })
    })
}

module.exports = {Insert};