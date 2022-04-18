import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { varFadeIn, varSlideInDown, varSlideInUp } from "src/components/animate";
import { collectionInfo } from "src/config/collectionInfo";

const RootStyle = styled(motion.div)(() => ({
  height: "80vh"
}));

const HeadingsContainer = styled((props) => <Box {...props} />)(({ theme }) => ({
  maxWidth: 600,
  margin: "auto",
  textAlign: "center",
  marginTop: theme.spacing(12)
}));

const HeroImgStyle = styled(motion.img)(({ theme }) => ({
  margin: "auto",
  height: "auto",
  width: "80%",

  [theme.breakpoints.up("sm")]: {
    width: 320,
    marginTop: `-${theme.spacing(4)}`
  },

  [theme.breakpoints.up("lg")]: {
    width: 440,
    marginTop: `-${theme.spacing(10)}`
  }
}));

export function LandingHero() {
  return (
    <RootStyle initial="initial" animate="animate">
      <HeadingsContainer>
        <motion.div variants={varSlideInUp}>
          <Typography variant="h2">{collectionInfo.name}</Typography>
        </motion.div>
        <motion.div variants={varSlideInDown}>
          <Container maxWidth="sm">
            <Typography>{collectionInfo.subtitle}</Typography>
          </Container>
        </motion.div>
      </HeadingsContainer>
      <motion.div variants={varFadeIn}>
        <Box>
          <HeroImgStyle alt="hero" src="/static/avatars/hero-characters.png" />
        </Box>
      </motion.div>
    </RootStyle>
  );
}
