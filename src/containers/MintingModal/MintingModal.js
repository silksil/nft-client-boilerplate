import React, { useState } from "react";
import { Modal, Box, IconButton, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

import { useContract } from "src/hooks/useContract";
import { useUI } from "src/hooks/useUI";
import { styled } from "@mui/material/styles";

import { Icon } from "../../components/Icon";
import { MintingFeedback } from "./MintingFeedback";

import closeFill from "@iconify/icons-eva/close-fill";
import { getButtonStatusIcon, getButtonText, buttonIsDisabled } from "./helpers";
import { MintingDetails } from "./MintingDetails";
import { MintingStatus } from "./MintingStatus";

const ContainerStyle = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  maxWidth: "570px",
  padding: theme.spacing(6),
  backgroundColor: theme.palette.background.default,
  borderRadius: "5px"
}));

const CloseModalButton = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "0px",
  right: "0px",
  padding: theme.spacing(2)
}));

export function MintingModal() {
  const { status, STATUS, transactionHash, mintNft, isSoldOut } = useContract();
  const { mintingModalIsOpen, setMintingModalIsOpen } = useUI();
  const [mintAmount, setMintAmount] = useState(1);
  const isValidMintAmount = mintAmount >= 1 && mintAmount <= 10;

  return (
    <Modal open={mintingModalIsOpen}>
      <ContainerStyle>
        <CloseModalButton
          color="primary"
          disabled={status === STATUS?.MINTING}
          onClick={() => {
            setMintingModalIsOpen(false);
          }}
        >
          <Icon icon={closeFill} />
        </CloseModalButton>

        <MintingDetails />

        {!isSoldOut && (
          <>
            <TextField
              error={!isValidMintAmount}
              label="Amount"
              type="number"
              variant="filled"
              helperText={!isValidMintAmount && "Value should be between 1 and 5"}
              value={mintAmount}
              onChange={(event) => {
                setMintAmount(event.target.value);
              }}
              sx={{ width: "100%", my: 2 }}
              InputProps={{
                inputMode: "numeric",
                inputProps: {
                  max: 5,
                  min: 1
                }
              }}
            />

            <Button variant="contained" disabled={buttonIsDisabled(status)} sx={{ width: "100%" }} onClick={() => mintNft(mintAmount)} endIcon={getButtonStatusIcon(status, STATUS)}>
              {getButtonText(status)}
            </Button>
          </>
        )}

        <MintingStatus />
        {transactionHash && <MintingFeedback />}
      </ContainerStyle>
    </Modal>
  );
}
