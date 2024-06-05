## Compressed NFT 404 Implementation

### Overview

Compressed NFT 404 is a Solana-based program designed to implement the 404 dynamic NFT mechanism for Compressed NFTs (CNFTs). This program allows users to interact with CNFTs and tokens through various functionalities, including:

- **Initializing Pools**: Set up pools that can hold CNFTs and tokens.
- **Depositing Tokens and CNFTs**: Add tokens and CNFTs to the pools.
- **Swapping Tokens for CNFTs**: Exchange tokens for CNFTs within the pool.
- **Swapping CNFTs for Tokens**: Get tokens for your CNFTs.

### Example Use Cases

As the BARK Protocol is the main issuer of CNFTs for charitable aid, disaster relief, and membership programs on Solana, here are some use cases based on its mechanism:

#### Single Creator Pool
A BARK Protocol Creator can set up a 404 pool with CNFTs from their collection, allowing direct interaction and transactions with their audience.

#### Collaborative Pool
Multiple BARK Protocol Creators can partner to create a single pool with CNFTs and a token at a set price. The token could be a memecoin or a new T22 token, facilitating a diverse and robust ecosystem.

#### Legendary CNFT
A BARK Protocol Creator could seed the pool with legendary CNFTs and let the users decide who gets it through a re-roll mechanism, adding a layer of gamification and excitement to the distribution process.

### Technical Overview

The Anchor program contains the following instructions:

- **`init_pool`**: Initializes the Pool Account for a given authority, setting up the environment for subsequent operations.
- **`deposit_cnft`**: Deposits the initial CNFT liquidity in the pool, ensuring there are NFTs available for swapping.
- **`deposit_token`**: Deposits the SPL token liquidity in the pool, including BARKER's Club Tiered tokens, to support token-to-NFT transactions.
- **`swap_cnft_to_token`**: Allows users to deposit a CNFT in the pool in exchange for tokens, including BARKER's Club Tiered tokens.
- **`swap_token_to_cnft`**: Enables users to deposit tokens in the pool, which generates a random number and creates a coupon PDA to claim a CNFT.
- **`claim_cnft`**: The user gets the CNFT via this instruction, completing the process initiated by `swap_token_to_cnft`.

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/bark-community/nft
   cd cnft-404
   ```

2. Install Dependencies:
   ```sh
   yarn install
   ```

3. Build the Anchor Program:
   ```sh
   anchor build
   ```

### Disclaimer

This code is provided for experimental purposes only. Use it at your own risk. The authors and contributors are not responsible for any damages or losses that may arise from using this code. It is recommended to thoroughly review and test the code in a safe environment before deploying it in any production system. This code is not tested.