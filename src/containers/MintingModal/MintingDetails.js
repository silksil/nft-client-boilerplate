import React from "react";
import { Typography, Alert } from "@mui/material";

import { useContract } from "src/hooks/useContract";

import { collectionInfo } from "src/config/collectionInfo";

const MintingCount = () => {
  const { totalMinted, totalSupply, isSoldOut } = useContract();
  const text = isSoldOut ? "Sold out" : `${totalMinted} of ${totalSupply} minted`;

  /**
   * Don't show the modal if the count has not been retrieved yet
   */
  if (!totalSupply) return null;

  return (
    <Alert severity="info" sx={{ mb: 2, mt: 1 }}>
      {text}
    </Alert>
  );
};

export function MintingDetails() {
  const etherscanLink = `${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/address/${process.env.NEXT_PUBLIC_CONTRACT_ADDRESS}#code`;
  return (
    <>
      <Typography variant="h3">Mint your NFT</Typography>
      <MintingCount />
      <Typography variant="body2">· {collectionInfo.price} ETH each</Typography>
      <Typography variant="body2">· Use Metamask only</Typography>
      <Typography variant="body2">· Max. {collectionInfo.maxTransactions} NFTs per transaction</Typography>
      <Typography variant="body2">
        ·{" "}
        <a href={etherscanLink} target="_blank" rel="noreferrer">
          Link{" "}
        </a>
        to etherscan contract
      </Typography>
    </>
  );
}
