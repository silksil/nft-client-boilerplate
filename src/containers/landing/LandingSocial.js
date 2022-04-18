import { styled } from "@mui/material/styles";
import { Typography, Button, Grid, alpha } from "@mui/material";
import { Icon } from "src/components/Icon";
import discordIcon from "@iconify/icons-ic/baseline-discord";
import twitterIcon from "@iconify/icons-eva/twitter-fill";

import { DISCORD, TWITTER } from "src/utils/socials";

const RootStyle = styled("div")(({ theme }) => ({
  margin: theme.spacing(30, 0)
}));

const ContentStyle = styled("div")(({ theme }) => ({
  textAlign: "center",
  background: alpha(theme.palette.background.paper, 0.5),
  padding: theme.spacing(12, 1),
  position: "relative",

  [theme.breakpoints.up("md")]: {
    padding: theme.spacing(18, 1)
  }
}));

export function LandingSocial() {
  return (
    <RootStyle>
      <ContentStyle>
        <Typography variant="h2" sx={{ mb: 3 }}>
          Join the community
        </Typography>

        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Button variant="outlined" sx={{ minWidth: "220px" }} size="large" color="secondary" target="_blank" rel="noreferrer" href={DISCORD.url} endIcon={<Icon icon={discordIcon} />}>
              Join Discord
            </Button>
          </Grid>
          <Grid item>
            <Button variant="outlined" sx={{ minWidth: "220px" }} size="large" color="primary" href={TWITTER.url} target="_blank" rel="noreferrer" endIcon={<Icon icon={twitterIcon} />}>
              Follow Twitter
            </Button>
          </Grid>
        </Grid>
      </ContentStyle>
    </RootStyle>
  );
}
