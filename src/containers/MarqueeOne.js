import { Box, styled } from "@mui/system";
import React from "react";
import NextImage from "next/image";

import Marquee from "react-fast-marquee";

const paths = [
  {
    path: "1"
  },
  {
    path: "2"
  },
  {
    path: "3"
  },
  {
    path: "4"
  },
  {
    path: "5"
  },
  {
    path: "6"
  },
  {
    path: "7"
  },
  {
    path: "8"
  },
  {
    path: "9"
  }
];

const ImageContainer = styled(Box)(({ theme }) => ({
  marginLeft: 16,
  width: 120,
  height: 120,
  borderRadius: theme.shape.borderRadiusMd,
  overflow: "hidden",

  [theme.breakpoints.up("sm")]: {
    width: 140,
    height: 140
  },

  [theme.breakpoints.up("md")]: {
    width: 210,
    height: 210
  }
}));

export function MarqueeOne() {
  return (
    <Marquee gradient={false} speed={25} direction="right">
      {paths.map(({ path }) => (
        <ImageContainer key={path}>
          <NextImage width={210} height={210} src={`/static/avatars/kmb/${path}.png`} alt="A KMB" />
        </ImageContainer>
      ))}
    </Marquee>
  );
}
