import { Container, IconButton, Stack } from "@mui/material";
import { Icon } from "src/components/Icon";
import { SOCIALS } from "src/utils/socials";

export function MainFooter() {
  return (
    <Container maxWidth="lg" sx={{ p: 4 }}>
      <Stack spacing={1.5} direction="row" justifyContent={{ xs: "center" }} sx={{ mt: 5, mb: 5 }}>
        {SOCIALS.map((social) => (
          <IconButton key={social.name} color="primary" sx={{ p: 1 }} href={social.url}>
            <Icon icon={social.icon} size="m" />
          </IconButton>
        ))}
      </Stack>
    </Container>
  );
}
