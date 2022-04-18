import { useTheme, styled } from "@mui/material/styles";
import { Grid, Container, Typography, useMediaQuery, alpha, IconButton } from "@mui/material";
import { varFadeInUp, MotionInView } from "../../components/animate";
import twitterIcon from "@iconify/icons-eva/twitter-fill";
import linkedinIcon from "@iconify/icons-eva/linkedin-fill";

import { Icon } from "src/components/Icon";

const DescriptionSil = () => (
  <>
    Member Developers Dao. IBM and PayPal alumni.
    <br />
    Boyfriend of Sophie.
  </>
);

const DescriptionSophie = () => (
  <>
    Graphic & UX designer.
    <br />
    Girlfriend of Sil.
  </>
);

const Persons = [
  {
    icon: "/static/avatars/team/Sophie.png",
    title: "Sophie",
    subtitle: "Design",
    description: <DescriptionSophie />,
    linkedin: "https://www.linkedin.com/in/sophie-vosse-131bb7198/",
    twitter: "https://twitter.com/SophieVosse"
  },
  {
    icon: "/static/avatars/team/Sil.png",
    title: "Sil",
    subtitle: "Engineering",
    description: <DescriptionSil />,
    linkedin: "https://www.linkedin.com/in/sil-kreulen-41912392/",
    twitter: "https://twitter.com/sil_kreulen"
  }
];

const RootStyle = styled("div")(({ theme }) => ({
  marginTop: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    marginBottom: theme.spacing(15)
  }
}));

const CardStyle = styled("div")(({ theme }) => {
  return {
    zIndex: 1,
    borderRadius: 200,
    maxWidth: 400,
    minWidth: 300,
    margin: "auto",
    textAlign: "center",
    padding: theme.spacing(1),

    [theme.breakpoints.up("sm")]: {
      maxWidth: 420,
      padding: theme.spacing(2)
    }
  };
});

const CardContainer = styled("div")(({ theme }) => ({
  width: "100%",
  height: "100%",
  position: "relative",
  borderRadius: theme.shape.borderRadiusMd,
  background: alpha(theme.palette.background.paper, 0.5),

  "&:hover": {
    background: alpha(theme.palette.background.neutral, 0.5)
  },

  "&:hover .icon-container": {
    visibility: "visible"
  },

  "&:hover .blob-image": {
    filter: "blur(3px)"
  }
}));

const CardIconStyle = styled("img")(({ theme }) => ({
  width: 100,
  margin: "auto",
  padding: theme.spacing(1),

  [theme.breakpoints.up("sm")]: {
    width: 120,
    padding: theme.spacing(2)
  },

  [theme.breakpoints.up("md")]: {
    width: 240,
    height: 240
  }
}));

const IconsContainer = styled("div")(({ theme }) => ({
  position: "absolute",
  right: 0,
  zIndex: 2,

  [theme.breakpoints.up("sm")]: {
    right: "20%"
  },
  [theme.breakpoints.up("md")]: {
    right: 0
  }
}));

const PersonDescription = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  zIndex: 1,
  display: "block"
}));

export function LandingTeam() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Container maxWidth="sm" sx={{ mb: { xs: 3 }, textAlign: "center" }}>
          <Typography variant="h2">The Team</Typography>
          <Typography>Made by two people in love.</Typography>
        </Container>
        <Grid container spacing={isDesktop ? 10 : 2} justifyContent="center" sx={{ position: "relative" }}>
          {Persons.map((person) => (
            <Grid item xs={12} md={5} key={person.title} justifyContent="center" alignItems="center">
              <CardContainer>
                <IconsContainer className="icon-container">
                  {person.linkedin && (
                    <IconButton target="_blank" rel="noreferrer" color="primary" href={person.linkedin}>
                      <Icon icon={linkedinIcon} size="m" />
                    </IconButton>
                  )}
                  {person.twitter && (
                    <IconButton target="_blank" rel="noreferrer" color="primary" href={person.twitter}>
                      <Icon icon={twitterIcon} size="m" />
                    </IconButton>
                  )}
                </IconsContainer>
                <MotionInView variants={varFadeInUp}>
                  <CardStyle>
                    <CardIconStyle src={person.icon} alt={person.title} />
                    <Typography paragraph sx={{ m: 0 }}>
                      {person.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.disabled" }} mb={2}>
                      {person.subtitle}
                    </Typography>
                    <PersonDescription className="person-description" variant="caption">
                      {person.description}
                    </PersonDescription>
                  </CardStyle>
                </MotionInView>
              </CardContainer>
            </Grid>
          ))}
        </Grid>
      </Container>
    </RootStyle>
  );
}
