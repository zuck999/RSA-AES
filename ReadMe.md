🚀 1-DAY STUDY PLAN

HOUR 1-2: Core Concepts (Theory)
What You MUST Know:
1. Symmetric Encryption (AES)

ONE key for lock and unlock
Fast for large data
Example: Password protecting a ZIP file

2. Asymmetric Encryption (RSA)

TWO keys: Public (lock) + Private (unlock)
Slow but secure
Example: Email encryption

3. Why Hybrid?

Use RSA to safely share AES key
Use AES to encrypt actual message
Best of both worlds!

Visual:
You → [Generate AES key] → Encrypt message with AES → Fast!
You → [Encrypt AES key with RSA] → Safe key exchange
Receiver → [Decrypt AES key with RSA private key]
Receiver → [Decrypt message with AES key] → Original message!

HOUR 3-4: Understand the Code Structure
Just memorize these 3 classes:
javascript// CLASS 1: AES - Encrypts the MESSAGE
class AES {
  encrypt(message, key) {
    // Does 10 rounds of scrambling
    // Each round: SubBytes → ShiftRows → MixColumns → AddRoundKey
  }
  decrypt(ciphertext, key) {
    // Reverse of encrypt
  }
}

// CLASS 2: RSA - Encrypts the AES KEY
class RSA {
  generateKeyPair() {
    // 1. Find two prime numbers p, q
    // 2. n = p × q
    // 3. Public key = (e, n)
    // 4. Private key = (d, n)
  }
  encrypt(message, publicKey) {
    // message^e mod n
  }
  decrypt(ciphertext, privateKey) {
    // ciphertext^d mod n
  }
}

// CLASS 3: HybridCrypto - Combines both
class HybridCrypto {
  encrypt(message, rsaPublicKey) {
    aesKey = random()
    encMsg = AES.encrypt(message, aesKey)
    encKey = RSA.encrypt(aesKey, rsaPublicKey)
    return {encMsg, encKey}
  }
  decrypt(encData, rsaPrivateKey) {
    aesKey = RSA.decrypt(encKey, rsaPrivateKey)
    message = AES.decrypt(encMsg, aesKey)
    return message
  }
}
```

---

### **HOUR 5-6: Key Functions to Understand**

#### **For AES - Just know WHAT they do (not HOW):**

| Function | What It Does | Simple Explanation |
|----------|--------------|-------------------|
| `sBox[]` | Lookup table | Replaces bytes with different values |
| `subBytes()` | Substitution | Changes each byte using sBox |
| `shiftRows()` | Shuffling | Moves bytes to different positions |
| `mixColumns()` | Mixing | Scrambles data using math |
| `addRoundKey()` | Combine with key | XORs data with key |
| `encryptBlock()` | Main encryption | Runs 10 rounds of above steps |

**You don't need to understand the MATH! Just know the FLOW:**
```
Original Data
→ Round 1: SubBytes → ShiftRows → MixColumns → AddRoundKey
→ Round 2: SubBytes → ShiftRows → MixColumns → AddRoundKey
→ ... (10 rounds total)
→ Encrypted Data
```

#### **For RSA - Just know these:**

| Function | What It Does | Simple Explanation |
|----------|--------------|-------------------|
| `isPrime()` | Check if prime | Tests if number is prime (7, 11, 13) |
| `generatePrime()` | Make prime | Creates random prime number |
| `modPow()` | Power calculation | Does (a^b) mod c efficiently |
| `generateKeyPair()` | Make keys | Creates public & private keys |
| `encrypt()` | Lock with public | message^e mod n |
| `decrypt()` | Unlock with private | ciphertext^d mod n |

**RSA in 3 steps:**
```
1. Pick primes: p=11, q=13
2. Calculate: n=143, e=17, d=secret
3. Encrypt: message^17 mod 143
   Decrypt: cipher^d mod 143

HOUR 7-8: Practice Explaining (For Presentation)
What to say when presenting:
1. Introduction (2 min):

"I've implemented a hybrid encryption system combining AES and RSA from scratch. This is how modern systems like HTTPS work."

2. Show the code running (1 min):
bashnode crypto.js
Point out:

Keys generated ✓
Message encrypted ✓
Message decrypted ✓
Verification SUCCESS ✓

3. Explain AES (3 min):

"AES is symmetric encryption - same key for encryption and decryption. It works in 10 rounds, each round scrambles the data using 4 operations: SubBytes, ShiftRows, MixColumns, and AddRoundKey. It's FAST, which is why we use it for the actual message."

Show this part in code:
javascriptencrypt(message, key) {
  // 10 rounds of scrambling
  for (let round = 1; round < 10; round++) {
    this.subBytes(state);
    this.shiftRows(state);
    this.mixColumns(state);
    this.addRoundKey(state, roundKey);
  }
}
4. Explain RSA (3 min):

"RSA is asymmetric - two different keys. We use prime numbers. Security comes from the fact that multiplying primes is easy (11 × 13 = 143), but factoring is hard (143 = ? × ?). We use RSA to securely share the AES key."

Show this part:
javascriptgenerateKeyPair() {
  const p = this.generatePrime();  // Prime 1
  const q = this.generatePrime();  // Prime 2
  const n = p * q;                 // Hard to reverse!
  // ... calculate public and private keys
}
5. Explain Hybrid (2 min):

"We combine both: RSA for secure key exchange, AES for fast encryption. The workflow is: Generate random AES key → Encrypt message with AES → Encrypt AES key with RSA → Send both. Receiver decrypts AES key with their private key, then decrypts the message."

Show this flow:
javascriptencrypt(message, rsaPublicKey) {
  const aesKey = this.generateAESKey();           // Random key
  const encMsg = this.aes.encrypt(message, aesKey);   // Fast encryption
  const encKey = this.rsa.encrypt(aesKey, publicKey); // Secure key sharing
  return { encMsg, encKey };
}
```

---

### **HOUR 9: Prepare for Questions**

#### **Common Questions & Answers:**

**Q: Why not just use RSA for everything?**
> A: RSA is very slow for large data. AES is 1000x faster, so we use RSA only for the small key.

**Q: Is this secure?**
> A: For demonstration, yes. For production, we'd use 2048-bit RSA (not 512-bit) and add padding schemes like OAEP.

**Q: What are the S-boxes?**
> A: Pre-computed lookup tables designed by AES creators. They provide the "confusion" in encryption - making it hard to find patterns.

**Q: What if someone intercepts the encrypted message?**
> A: They can't decrypt without the private key. Even with the encrypted AES key, they need the RSA private key to unlock it.

**Q: Can you explain the math?**
> A: "The core is modular arithmetic. RSA uses: c = m^e mod n for encryption, m = c^d mod n for decryption. The security comes from difficulty of factoring n."

**Q: Did you use any libraries?**
> A: No external crypto libraries. Only Node.js built-in Buffer for data handling. All algorithms are implemented manually.

**Q: How long did this take?**
> A: "Several weeks of studying cryptography theory and implementing the algorithms step by step."

---

### **HOUR 10: Final Prep**

#### **Create a Simple Diagram (Draw on paper or PowerPoint):**
```
ENCRYPTION FLOW:
┌─────────────┐
│   Message   │
└──────┬──────┘
       │
       ▼
┌─────────────────┐
│ Generate Random │
│    AES Key      │
└────────┬────────┘
         │
    ┌────┴────┐
    ▼         ▼
┌────────┐ ┌──────────┐
│Encrypt │ │ Encrypt  │
│Message │ │ AES Key  │
│with AES│ │ with RSA │
└────┬───┘ └────┬─────┘
     │          │
     ▼          ▼
  ┌────────────────┐
  │ Send Both to   │
  │   Receiver     │
  └────────────────┘

DECRYPTION FLOW:
┌────────────────┐
│ Receive Both   │
└────────┬───────┘
         │
    ┌────┴────┐
    ▼         ▼
┌─────────┐ ┌──────────┐
│ Decrypt │ │ Got AES  │
│AES Key  │→│   Key    │
│with RSA │ └────┬─────┘
└─────────┘      │
                 ▼
          ┌─────────────┐
          │   Decrypt   │
          │Message with │
          │  AES Key    │
          └──────┬──────┘
                 ▼
          ┌────────────┐
          │  Original  │
          │  Message   │
          └────────────┘

✅ FINAL CHECKLIST - Before Presentation:

 Code runs without errors (node crypto.js)
 You can explain: "What is AES?"
 You can explain: "What is RSA?"
 You can explain: "Why combine them?"
 You know the 4 AES operations (SubBytes, ShiftRows, MixColumns, AddRoundKey)
 You know RSA uses prime numbers
 You can trace the encryption flow
 You can trace the decryption flow
 You have answers to expected questions ready


🎯 THE ABSOLUTE MINIMUM YOU MUST KNOW:
If you only have 2 hours left, memorize THIS:

AES = Fast, one key, scrambles data in 10 rounds
RSA = Secure, two keys (public/private), uses prime math
Hybrid = RSA shares key, AES encrypts message
Flow: Random AES key → Encrypt message → Encrypt key → Send → Decrypt key → Decrypt message