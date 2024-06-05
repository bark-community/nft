# BARKER's Club | NFT Tiered Membership

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
tsc generateKeypair.ts && node generateKeypair.js
```

### Files and Folder Structure

```
dapp/
├── .env
├── wallet.json
├── config.json
└── assets/
    ├── 0.png
    ├── 0.json
    ├── 1.png
    ├── 1.json
    ├── collection.png
    └── collection.json
```

### Usage

1. **Generate Private Key**: Run the following command to generate a private key and save it in the `.env` file:
   ```sh
   echo "PRIVATE_KEY=<your_private_key>" > .env
   ```

2. **Validate Configuration**: Use the following command to validate the configuration:
   ```sh
   sugar validate
   ```

3. **Upload Assets**: Upload assets to the Candy Machine using Sugar:
   ```sh
   sugar upload
   ```

4. **Verify**: Verify the Candy Machine:
   ```sh
   sugar verify
   ```

5. **Test Mint**: Test the minting process:
   ```sh
   sugar mint
   ```

### BARKER's Club NFTs & Members Tiers

- **Pubkey**: 4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i ([Solscan Link](https://solscan.io/account/4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i))

### Improvements

- Enhanced security by implementing dotenv for storing sensitive information such as private keys.
- Added verification step for Candy Machine to ensure the successful upload of assets.

### Example Collection Metadata (`collection.json`)

```json
{
  "name": "BARKER's Club Collection",
  "symbol": "BARK",
  "description": "An exclusive collection of NFTs representing tiered memberships in the BARKER's Club. Each NFT grants access to unique benefits and community features within the BARK Protocol ecosystem.",
  "image": "collection.png",
  "attributes": [
    {
      "trait_type": "Tier",
      "value": "Gold"
    },
    {
      "trait_type": "Membership",
      "value": "Lifetime"
    }
  ],
  "seller_fee_basis_points": 500,
  "external_url": "https://barkerclub.com",
  "creators": [
    {
      "address": "4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i",
      "share": 100
    }
  ]
}
```

### Example Individual NFT Metadata (`0.json`)

```json
{
  "name": "BARKER's Club Gold Membership #0",
  "symbol": "BARK",
  "description": "A gold membership NFT for the BARKER's Club.",
  "image": "0.png",
  "attributes": [
    {
      "trait_type": "Tier",
      "value": "Gold"
    },
    {
      "trait_type": "Membership",
      "value": "Annual"
    }
  ],
  "seller_fee_basis_points": 500,
  "external_url": "https://barkerclub.com/nft/0",
  "creators": [
    {
      "address": "4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i",
      "share": 100
    }
  ]
}
```

### Security

Ensure to keep your `.env` file secure and do not expose your private key. You can add `.env` to your `.gitignore` file to prevent it from being committed to your repository.

### Sample `wallet.json`

```json
{
  "version": 1,
  "account": "4BZ3gQFxCU7hW3X2MqeFU2WBb5Zdsr5xnFLr6HerFA6i",
  "private_key": "<your_private_key>"
}
```

### Notice

**Notice!** The website for this project is not deployed yet.

### Additional Resources

- [Solana Documentation](https://docs.solana.com/)
- [Metaplex Documentation](https://docs.metaplex.com/)
- [Sugar Documentation](https://docs.metaplex.com/candy-machine-v2/sugar)
- [Umi Documentation](https://docs.metaplex.com/umi)

This README provide a comprehensive guide to setting up and deploying your NFT collection on Solana using Sugar and Umi.

## Licence

