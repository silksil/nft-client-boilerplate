import NextLink from "next/link";
import { styled } from "@mui/material/styles";
import { Toolbar as BaseToolbar, Container, AppBar } from "@mui/material";
import Logo from "../../components/Logo";
import { MainNavbarMintingActions } from "src/containers/MainNavbarMintingActions";

const Toolbar = styled(BaseToolbar)(({ theme }) => ({
  height: 64,

  [theme.breakpoints.up("md")]: {
    height: 88
  }
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  padding: theme.spacing(1),
  marginTop: "24px",
  border: `1px solid ${theme.palette.background.neutral}`,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderRadius: theme.shape.borderRadiusXs,
  backgroundColor: theme.palette.background.default
}));

export default function MainNavbar() {
  return (
    <AppBar sx={{ backgroundColor: "transparent", boxShadow: 0 }}>
      <Toolbar>
        <ContainerStyle>
          <NextLink href="/">
            <Logo />
          </NextLink>

          <MainNavbarMintingActions />
        </ContainerStyle>
      </Toolbar>
    </AppBar>
  );
}
