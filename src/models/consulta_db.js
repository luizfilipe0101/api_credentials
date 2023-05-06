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


async function QR_Model(data){

    const sql_select_qr = 'SELECT name, cpf, email, phone, payment\
    FROM participantes WHERE code = $1;';
    
    const result = await pool.query(sql_select_qr, [data]);

    return result.rows;
   
}

module.exports = {GetAll_Model, QR_Model};