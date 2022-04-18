import { Icon as BaseIcon } from "@iconify/react";
import { useTheme } from "@mui/material";

import React from "react";

const getColor = (color, theme) => {
  if (color === "info") return theme.palette.info.main;
  if (color === "success") return theme.palette.success.main;
  if (color === "warning") return theme.palette.warning.main;
  if (color === "error") return theme.palette.error.main;

  return color;
};

const getWidth = ({ size, width, theme }) => {
  if (size) return theme.icons[size].width;
  if (width) return width;

  return theme.icons.m.height;
};

const getHeight = ({ size, height, theme }) => {
  if (size) return theme.icons[size].height;
  if (height) return height;

  return theme.icons.m.height;
};

export function Icon({ size = "m", color = "primary", icon, width, height, ...props }) {
  const theme = useTheme();

  return <BaseIcon color={getColor(color, theme)} icon={icon} height={getHeight({ size, height, theme })} width={getWidth({ size, width, theme })} {...props} />;
}
