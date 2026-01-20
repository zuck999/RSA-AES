// sender.js
// ------------------------------------
// Simulates sender in chat application
// ------------------------------------

const { rsaEncrypt } = require("./rsa.js");
const { aesEncrypt } = require("./aes.js");

// Step 1: Sender generates AES key
const aesKey = 42;

// Step 2: Encrypt AES key using RSA public key
const encryptedAESKey = rsaEncrypt(aesKey);

// Step 3: Message to send
const message = "HELLO FROM SENDER";

// Step 4: Encrypt message using AES key
const encryptedMessage = aesEncrypt(message, aesKey);

// Data that will be sent through server
console.log("Encrypted AES Key:", encryptedAESKey);
console.log("Encrypted Message:", encryptedMessage);
