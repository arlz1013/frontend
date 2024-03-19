import CryptoJS from "crypto-js";

var message = "Texto a encriptar";
var secretKey = "miFraseSecreta";

// Encriptar el mensaje
var encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();

console.log("Mensaje encriptado: " + encryptedMessage);