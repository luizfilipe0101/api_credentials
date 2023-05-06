/*
    Altera o status de [ausente] para [presente]
    no dia do evento mediante a leitura do QR code
*/
const { pool } = require('./connect_db');


const sql_update = "UPDATE participantes SET presence = 'Presente' WHERE code = $1;";

async function Checkin(data){
    return new Promise((resolv, reject)=>{
        pool.query(sql_update, [data['code']], (err, result)=>{
            if(err){
                console.error(err);
                reject(err);
            }else{
                resolv(result.rowCount);
               
            }
        })
    })
}

module.exports = { Checkin };