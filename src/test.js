import CryptoJS from "crypto-js";

const men = "Este es un mensaje Encriptado";
const key = "ClaveSecreta123";

const menEnc = CryptoJS.AES.encrypt(men, key).toString();

console.log(menEnc)