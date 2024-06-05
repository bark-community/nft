import * as fs from 'fs';
import * as solanaWeb3 from '@solana/web3.js';
import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config();

// Generate a new keypair
const keypair = solanaWeb3.Keypair.generate();

// Convert the keypair to a JSON object
const keypairJson = JSON.stringify({
    publicKey: keypair.publicKey.toBase58(),
    secretKey: Array.from(keypair.secretKey)
}, null, 2);

// Save the keypair to a wallet.json file
fs.writeFileSync('wallet.json', keypairJson, 'utf-8');

// Save the private key to the .env file
const envPath = path.resolve(__dirname, '.env');
fs.appendFileSync(envPath, `PRIVATE_KEY=${keypair.secretKey.toString()}\n`);

console.log('Keypair generated and saved to wallet.json and .env');
