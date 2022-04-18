import { CircularProgress } from "@mui/material";
import { Icon } from "../../components/Icon";

import checkmarkFill from "@iconify/icons-eva/checkmark-fill";
import alertTriangleFill from "@iconify/icons-eva/alert-triangle-outline";

export const getStatusText = (status, error) => {
  if (status === "mined") return "Succesfully mined. ";
  if (status === "error") return error;

  return null;
};

export const getFeedbackStatusIcon = (status) => {
  if (status === "mined") return <Icon icon={checkmarkFill} color="success" size="s" />;
  if (status === "error") return <Icon icon={alertTriangleFill} color="error" size="s" />;

  return null;
};

export const getButtonStatusIcon = (status) => {
  if (status === "popWallet") return <CircularProgress size="20px" />;
  if (status === "minting") return <CircularProgress size="20px" />;

  return null;
};

export const getButtonText = (status) => {
  if (status === "popWallet") return "Confirm transaction";
  if (status === "minting") return "Minting";
  if (status === "mined") return "Mint more";

  return "Mint";
};

export const buttonIsDisabled = (status) => {
  if (status === "idle") return false;
  if (status === "mined") return false;
  if (status === "error") return false;
  return true;
};

export const getMarketplacesFeedbackText = (transactionHash) => {
  if (!transactionHash) return null;
  return "Any time soon your transaction should be visible on Etherscan, OpenSea or Rarible.";
};
