"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var solanaWeb3 = require("@solana/web3.js");
var dotenv = require("dotenv");
var path = require("path");
dotenv.config();
// Generate a new keypair
var keypair = solanaWeb3.Keypair.generate();
// Convert the keypair to a JSON object
var keypairJson = JSON.stringify({
    publicKey: keypair.publicKey.toBase58(),
    secretKey: Array.from(keypair.secretKey)
}, null, 2);
// Save the keypair to a wallet.json file
fs.writeFileSync('wallet.json', keypairJson, 'utf-8');
// Save the private key to the .env file
var envPath = path.resolve(__dirname, '.env');
fs.appendFileSync(envPath, "PRIVATE_KEY=".concat(keypair.secretKey.toString(), "\n"));
console.log('Keypair generated and saved to wallet.json and .env');
