// receiver.js
// ------------------------------------
// Simulates receiver in chat application
// ------------------------------------


// 🔍 Explanation

// Receiver uses RSA private key

// AES key is recovered securely

// Message is decrypted using AES key

// Original message is restored

// ------------------------------------


const { rsaDecrypt } = require("./rsa");
const { aesDecrypt } = require("./aes");

// Data received from sender (paste manually)
const encryptedAESKey = 2557;
const encryptedMessage = "VV";

// Step 1: Decrypt AES key using RSA private key
const aesKey = rsaDecrypt(encryptedAESKey);

// Step 2: Decrypt message using AES key
const decryptedMessage = aesDecrypt(encryptedMessage, aesKey);

// Output
console.log("Decrypted Message:", decryptedMessage);
