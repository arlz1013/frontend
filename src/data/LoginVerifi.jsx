import CryptoJS from "crypto-js";

function  Encry(a){
    var key = "Xdasdasd"
    var payload = a;
    var derived_key = CryptoJS.enc.Base64.parse(key);
    var iv = CryptoJS.enc.Utf8.parse("VectorDeInicializacion");
    var encryptionOptions = {
        iv: iv,
        mode: CryptoJS.mode.CBC
    };
    return  CryptoJS.AES.encrypt(payload, derived_key, encryptionOptions).toString();
}

const Verify = (e) => {
    e.preventDefault();

    var user = document.getElementById('a').value
    var pass = Encry(document.getElementById('b').value)



    const settings = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        "user" : user,
        "pass" : pass
      }    
    };
    let send = JSON.stringify(settings)  
    console.log(send)
/*
    fetch("https://api.example.com/endpoint", settings)
      .then((response) => response.json())
      .then((data) => {
        console.log("Respuesta:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
*/
};

export default Verify;