import React from "react";
import { Typography, Box } from "@mui/material";

import { useContract } from "src/hooks/useContract";
import { styled } from "@mui/material/styles";

import { getFeedbackStatusIcon, getStatusText, getMarketplacesFeedbackText } from "./helpers";

const StatusCircleStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.neutral,
  minWidth: "40px",
  minHeight: "40px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginRight: theme.spacing(2)
}));

export function MintingStatus() {
  const { status, error, STATUS, transactionHash } = useContract();

  return (
    <Box display="flex" flexDirection="row" alignItems="center" mt={1}>
      {getFeedbackStatusIcon(status, STATUS) && <StatusCircleStyle>{getFeedbackStatusIcon(status, STATUS)}</StatusCircleStyle>}
      <Typography color="text.secondary" variant="caption">
        {getStatusText(status, error)}
        {getMarketplacesFeedbackText(transactionHash)}
      </Typography>
    </Box>
  );
}
