const {pool} = require('./connect_db');


async function GetAll_Model(){
    const sql_select = 'SELECT * FROM participantes;';
    return new Promise((resolv, reject)=>{
        pool.query(sql_select, null, (err, result)=>{
            if(err){
                console.log(err);
                reject(err);
            }else{
                resolv(result.rows);
    
            }
        }) 
    })
    
}


async function QR_Model(code){

    const sql_select_qr = 'SELECT * FROM participantes WHERE code = $1;';

    return new Promise((resolv, reject)=>{
        pool.query(sql_select_qr, [code['code']],(err, result)=>{
            if(err){
                reject(err);
            }else{
                resolv(result.rows);
            }
        });
    })
}

module.exports = {GetAll_Model, QR_Model};