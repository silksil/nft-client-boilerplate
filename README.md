# Description

NFT client boilerplate for EVM compatible blockchains. It includes:

- Landing page with basic info + visuals of the collection
- The ability to connect your wallet and mint an nft

A similar setup is used for the creation of the collection [KMB vs Vladimir](https://www.kmb.world/)

# Configure smart contract

1. In your `.env.local` add the contract address.
2. Update the `abi.json` in `src/config`.
3. Update `collectionInfo.js` in `src/config`.
4. In order to mint, it assumed that the function in your smart contract is also called `mint`.

# Configure styling

1. Go the folder `theme`
2. In the file `palette` you can change the colors of the application.
3. In `index` you can change from dark to light modus.
4. There are other files in the `theme` folder that you can configure to change the styling, e.g. shadows and the borderRadius.
5. In the folder `public` you can configure the images that are shown on the website.
