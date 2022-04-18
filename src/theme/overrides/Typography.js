export default function Typography(theme) {
  return {
    MuiTypography: {
      styleOverrides: {
        body1: {
          color: theme.palette.text.secondary,
        },
        body2: {
          color: theme.palette.text.secondary,
        },
        paragraph: {
          marginBottom: theme.spacing(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing(1),
        },
      },
    },
  };
}
