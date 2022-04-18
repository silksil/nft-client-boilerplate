function pxToRem(value) {
  return `${value / 16}rem`;
}

function responsiveFontSizes({ xs, sm, md, lg }) {
  return {
    "@media (min-width:0px)": {
      fontSize: pxToRem(xs)
    },
    "@media (min-width:600px)": {
      fontSize: pxToRem(sm)
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md)
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg)
    }
  };
}

const FONT_PRIMARY = "IBMPlexMono, sans-serif";
const FONT_SECONDARY = "IBMPlexSans, sans-serif";

const typography = {
  fontFamily: FONT_PRIMARY,
  fontWeightRegular: 400,
  fontWeightMedium: 600,
  fontWeightBold: 800,
  h1: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 800,
    lineHeight: 0.8,
    letterSpacing: "-.06em",
    fontSize: pxToRem(48),
    ...responsiveFontSizes({ sm: 52, md: 58, lg: 72 })
  },
  h2: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 64 / 48,
    fontSize: pxToRem(32),
    letterSpacing: "-.06em",
    ...responsiveFontSizes({ sm: 40, md: 44, lg: 48 })
  },
  h3: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(24),
    letterSpacing: "-.06em",
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 })
  },
  h4: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 })
  },
  h5: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 })
  },
  h6: {
    fontFamily: FONT_SECONDARY,
    fontWeight: 600,
    lineHeight: 28 / 18,
    fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 })
  },
  subtitle1: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(20)
  },
  subtitle2: {
    fontFamily: FONT_PRIMARY,
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(16)
  },
  body1: {
    lineHeight: 1.5,
    ...responsiveFontSizes({ xs: 15, sm: 15, md: 16, lg: 20 })
  },
  body2: {
    fontFamily: FONT_PRIMARY,
    lineHeight: 22 / 14,
    ...responsiveFontSizes({ xs: 12, sm: 13, md: 16, lg: 17, xl: 18 })
  },
  caption: {
    lineHeight: 1.5,
    ...responsiveFontSizes({ xs: 12, sm: 12, md: 14, lg: 14 }),
    fontFamily: FONT_PRIMARY
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    letterSpacing: 1.1,
    textTransform: "uppercase"
  },
  button: {
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    textTransform: "capitalize"
  }
};

export default typography;
