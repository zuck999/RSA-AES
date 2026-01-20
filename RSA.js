// rsa.js
// ------------------------------------
// Toy RSA implementation (NOT secure)
// Used only to demonstrate how RSA
// exchanges a secret key
// ------------------------------------

// p, q: small primes (toy example)

// n: public modulus used in encryption

// e: public key (used by sender)

// d: private key (used by receiver)

// rsaEncrypt: encrypts AES key

// rsaDecrypt: decrypts AES key


// ------------------------------------


// Two small prime numbers (for learning)
const p = 61;
const q = 53;

// n is part of the public key
const n = p * q; // 61 * 53 = 3233

// Euler's totient value
const phi = (p - 1) * (q - 1); // 3120

// Public key (e)
const e = 17;

// Private key (d)
// This value satisfies: (e * d) % phi = 1
const d = 2753;

// Encrypt a number using RSA public key
function rsaEncrypt(number) {
  return Math.pow(number, e) % n;
}

// Decrypt a number using RSA private key
function rsaDecrypt(number) {
  return Math.pow(number, d) % n;
}

// Export functions so other files can use them
module.exports = {
  rsaEncrypt,
  rsaDecrypt
};


