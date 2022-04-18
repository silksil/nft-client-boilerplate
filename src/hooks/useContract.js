import { useContext } from "react";
import { ContractContext } from "../contexts/ContractContext";

export const useContract = () => {
  const { mintNft, mintingStatus, mintingError, transactionHash, tokenId, totalSupply, totalMinted, isSoldOut } = useContext(ContractContext);

  return { mintNft, status: mintingStatus, error: mintingError, transactionHash, tokenId, totalSupply, totalMinted, isSoldOut };
};
