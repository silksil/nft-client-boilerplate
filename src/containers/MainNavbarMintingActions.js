import { Button, Stack, Typography } from "@mui/material";
import { useWallet } from "src/hooks/useWallet";
import { useUI } from "src/hooks/useUI";
import { Icon } from "src/components/Icon";
import { showPartialAccountAddress } from "src/utils/account";

import ethereumIcon from "@iconify/icons-mdi/ethereum";
import { useContract } from "src/hooks/useContract";
import { styled } from "@mui/system";

const Label = styled(Typography)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  borderRadius: "5px",
  marginRight: "8px",
  padding: 2,
  display: "flex",
  alignItems: "center"
}));

export function MainNavbarMintingActions() {
  const { isConnected, connect, account } = useWallet();
  const { isSoldOut } = useContract();
  const isPaused = process.env.NEXT_PUBLIC_IS_PAUSED.toLowerCase() === "true";
  const { setMintingModalIsOpen } = useUI();

  const handleClick = async () => {
    if (!isConnected) return connect();

    setMintingModalIsOpen(true);
  };

  return (
    <>
      {!isPaused && !isSoldOut && (
        <Stack direction="row" alignItems="center">
          {account && (
            <Label variant="caption">
              <Icon icon={ethereumIcon} size="s" />
              {showPartialAccountAddress(account)}
            </Label>
          )}

          <Button variant="outlined" onClick={handleClick} sx={{ fontFamily: "IBMPlexMono" }}>
            {isConnected ? "Mint NFT" : "Connect wallet"}
          </Button>
        </Stack>
      )}

      {isPaused && <Typography variant="body2"> Minting soon ...</Typography>}

      {isSoldOut && <Typography variant="body2">Sold out</Typography>}
    </>
  );
}
