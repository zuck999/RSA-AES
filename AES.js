// aes.js
// ------------------------------------
// Toy AES-like encryption using XOR
// Same key encrypts and decrypts data
// ------------------------------------

// 🔍 Explanation

// XOR (^) is reversible

// Same key is used for:

// Encryption

// Decryption

// This simulates AES behavior

// 👉 Used for fast message encryption

// ------------------------------------


// Encrypt message using symmetric key
function aesEncrypt(message, key) {
  let encrypted = "";

  for (let i = 0; i < message.length; i++) {
    encrypted += String.fromCharCode(
      message.charCodeAt(i) ^ key
    );
  }

  return encrypted;
}

// Decrypt message using same key
function aesDecrypt(cipherText, key) {
  let decrypted = "";

  for (let i = 0; i < cipherText.length; i++) {
    decrypted += String.fromCharCode(
      cipherText.charCodeAt(i) ^ key
    );
  }

  return decrypted;
}

module.exports = {
  aesEncrypt,
  aesDecrypt
};


