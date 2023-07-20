# NFT Minting and Listing App

This repository contains a simple JavaScript application for minting and listing NFTs. The application allows users to create NFT objects with metadata and store them in an array. Users can also view the metadata of all minted NFTs and check the total supply.

## Getting Started

To run the NFT minting and listing application, follow these steps:

1. Clone the repository:

   ```
   git clone https://github.com/your-username/your-repo.git
   cd your-repo
   ```

2. Open the `mynft.js` file in your preferred text editor.

3. Copy and paste the code from `mynft.js` into your JavaScript environment (e.g., a Node.js environment or a browser console).

4. Run the code to create NFT objects, list their metadata, and check the total supply.
   (IF USING VS CODE THEN PASTE THIS COMMAND TO RUN THIS FILE)
   ```
   node mynft.js
   ``` 

## Usage

### Minting NFTs

To mint new NFTs, you can use the `mintNFT` function by calling it and providing the necessary parameters: `_name`, `_eyeColor`, `_Background`, and `_Eyeball`. For example:

```javascript
mintNFT("EYES", "YELLOW", "BLACK", "RED");
mintNFT("EYES", "BLUE", "BLACK", "BLACK");
mintNFT("EYES", "CYAN", "BLACK", "RED");
mintNFT("EYES", "GREEN", "BLACK", "LIGHT BLUE");
mintNFT("EYES", "PURPLE", "BLACK", "GOLDEN");
```

### Listing NFTs

You can list all minted NFTs and their metadata using the `listNFTs` function. This function will print the details of each NFT in the console, including their name, eye color, background, and eyeball information.

```javascript
listNFTs();
```

### Checking Total Supply

To view the total number of minted NFTs, you can use the `getTotalSupply` function. This function will print the total count of NFTs that have been minted.

```javascript
getTotalSupply();
```

## Authors

https://www.linkedin.com/in/ridam-sinha-188133210/

RIDAM ADITYA SINHA

ridamsinha20@gmail.com

## Note

This is a basic implementation of an NFT minting and listing application for demonstration purposes. In a real-world scenario, NFTs would typically be minted on a blockchain platform, and the metadata would be stored on-chain.

Feel free to modify and expand this code as needed to suit your specific use case.

**Happy minting!**
