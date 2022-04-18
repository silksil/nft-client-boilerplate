import { styled } from "@mui/material/styles";
import { Box, Container, Typography } from "@mui/material";

import { MotionInView, varFadeInUp } from "../../components/animate";
import { MarqueeTwo } from "../MarqueeTwo";
import { MarqueeOne } from "../MarqueeOne";
import { collectionInfo } from "src/config/collectionInfo";

const RootStyle = styled("div")({
  textAlign: "center"
});

const MarqueeContainer = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(4),
  maxWidth: 900,

  [theme.breakpoints.up("md")]: {
    maxWidth: 1200
  },

  [theme.breakpoints.up("lg")]: {
    maxWidth: 1600
  }
}));

const subtitle = `${collectionInfo.size} characters. All unique.`;

export function LandingCollection() {
  return (
    <RootStyle>
      <Container maxWidth="md" sx={{ position: "relative" }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2">The Collection</Typography>
          <Typography sx={{ mb: 1 }}>{subtitle}</Typography>
        </MotionInView>
      </Container>
      <MarqueeContainer>
        <Box mb={3}>
          <MarqueeOne />
        </Box>
        <MarqueeTwo />
      </MarqueeContainer>
    </RootStyle>
  );
}
