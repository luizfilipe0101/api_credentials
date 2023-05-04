const CryptoJS = require('crypto-js');

function Crypt(num){
    const secret = CryptoJS.SHA256(num).toString();
    console.log(secret);
    return secret;
}

module.exports = {
    Crypt
}