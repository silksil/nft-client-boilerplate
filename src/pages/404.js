import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Button, Typography, Container } from "@mui/material";
import { LogoOnlyTopCornerLayout } from "src/layouts/LogoOnlyTopCornerLayout";

import { Page } from "src/components/Page";

const RootStyle = styled(Page)(() => ({
  display: "flex",
  alignItems: "center",
  margin: "auto",
  textAlign: "center"
}));

export default function PageNotFound() {
  return (
    <LogoOnlyTopCornerLayout>
      <RootStyle title="404 Page Not Found">
        <Container>
          <Typography variant="h3" paragraph>
            Page not found. Go back to the homepage.
          </Typography>

          <NextLink href="/">
            <Button size="large" variant="contained" sx={{ my: { xs: 2, sm: 4 } }}>
              Go to Home
            </Button>
          </NextLink>
        </Container>
      </RootStyle>
    </LogoOnlyTopCornerLayout>
  );
}
