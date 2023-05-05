const CryptoJS = require('crypto-js');

function Crypt(num){
    
    const salt = Math.random().toString(36).substring(2); 
    const code = num + salt
    const secret = CryptoJS.SHA256(code).toString();
    console.log(secret);
    return secret;
}

module.exports = {
    Crypt
}