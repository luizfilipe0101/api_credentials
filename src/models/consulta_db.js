const {pool} = require('./connect_db');


async function GetAll_Model(){

    const sql_select = 'SELECT * FROM participantes;';
    const result = await pool.query(sql_select, null);

    return result;
    
    
}


async function QR_Model(data){

    const sql_select_qr = 'SELECT name, cpf, email, phone, payment\
    FROM participantes WHERE code = $1;';
    
    const result = await pool.query(sql_select_qr, [data]);

    return result.rows;
   
}

module.exports = {GetAll_Model, QR_Model};