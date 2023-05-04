/*
    Altera o status de [ausente] para [presente]
    no dia do evento mediante a leitura do QR code
*/
const { pool } = require('./connect_db');


const sql_update = "UPDATE participantes SET presence = 'Presente' WHERE cpf = $1;";

async function Checkin(cpf){
    return new Promise((resolv, reject)=>{
        pool.query(sql_update, [cpf['cpf']], (err, result)=>{
            if(err){
                console.error(err);
                reject(err);
            }else{
                resolv(result);
               
            }
        })
    })
}

module.exports = { Checkin };