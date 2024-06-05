# BARKER´s Club | NFT Tiered Membership

## NFT Minting DApp & Collection on Solana Using Sugar and Umi (Candy Machine)

This guide provides step-by-step instructions to deploy an NFT collection on Solana using Sugar (Candy Machine) and Umi (a Metaplex JS protocol for Solana).

### Prerequisites

Ensure you have the following tools installed before proceeding:

- **Solana's Install Tool**: Use the following command to install Solana's command-line tools:
  ```sh
  sh -c "$(curl -sSfL https://release.solana.com/v1.18.15/install)"
  ```

- **Rust**: Install Rust using the following command:
  ```sh
  curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
  ```

### Generate New Keypair

Run the following command to generate a new keypair:
```sh
npm run generate-keypair
```

### Files and Folder Structure

```
dapp/
├── .env
├── wallet.json
├── config.json
└── assets/
    ├── [0-9].png
    ├── [0-9].json
    ├── collection.png
    └── collection.json
```

### Usage

1. **Install Dependencies**: Ensure all dependencies are installed. Run the following command in your project directory:
   ```sh
   npm install
   ```

2. **Generate Private Key**: Run the script to generate a new keypair and save it to the `.env` file:
   ```sh
   npm run generate-keypair
   ```

3. **Validate Configuration**: Use the following command to validate the configuration:
   ```sh
   npm run validate
   ```

4. **Upload Assets**: Upload assets to the Candy Machine using Sugar:
   ```sh
   npm run mint
   ```

5. **Test Mint**: Test the minting process:
   ```sh
   sugar mint
   ```

### BARKER's Club NFTs & Members Tiers

- **Pubkey**: 4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i ([Solscan Link](https://solscan.io/account/4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i))

### Improvements

- **Enhanced Security**: Implemented dotenv for storing sensitive information such as private keys.
- **Automated Keypair Generation**: Added a script for automated keypair generation.
- **Modular Scripts**: Modularized scripts for better organization and maintainability.
- **Convenience Scripts**: Added convenience scripts for common tasks such as minting and validation.

### Environment Variables

Ensure you have a `.env` file to store sensitive information like private keys. You can generate it as follows:

```sh
echo "PRIVATE_KEY=<your_private_key>" > .env
```

### Disclaimer

This code is provided for experimental purposes only. Use it at your own risk. The authors and contributors are not responsible for any damages or losses that may arise from using this code. It is recommended to thoroughly review and test the code in a safe environment before deploying it in any production system.

By following these steps, you should be able to generate a keypair, validate configurations, and mint NFTs using the Sugar and Umi protocols on Solana. If you encounter any issues or need further assistance, feel free to ask!