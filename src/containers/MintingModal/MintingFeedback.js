import React from "react";
import { Stack, Box, IconButton } from "@mui/material";
import { useContract } from "src/hooks/useContract";

function MintingFeedback() {
  const { transactionHash } = useContract();

  return (
    <Box mt={2}>
      <Stack spacing={1} direction="row">
        <IconButton href={`${process.env.NEXT_PUBLIC_EITHERSCAN_PREFIX}/tx/${transactionHash}`} target="_blank">
          <Box component="img" width="24px" src="/static/marketplaces/eitherscan-logo.png" />
        </IconButton>
        <IconButton href={`${process.env.NEXT_PUBLIC_OPENSEA_COLLECTION_URL}`} target="_blank">
          <Box component="img" width="24px" src="/static/marketplaces/opensea-logo.png" />
        </IconButton>
        <IconButton href={`${process.env.NEXT_PUBLIC_RARIBLE_COLLECTION_URL}`} target="_blank">
          <Box component="img" width="24px" src="/static/marketplaces/rarible-logo.png" />
        </IconButton>
        <Box />
      </Stack>
    </Box>
  );
}

export { MintingFeedback };
