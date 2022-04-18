import { forwardRef } from "react";
import PropTypes from "prop-types";
import { Box } from "@mui/material";

// eslint-disable-next-line react/display-name
const Image = forwardRef((props, ref) => {
  return <Box as="img" ref={ref} {...props}></Box>;
});

Image.propTypes = {
  sx: PropTypes.object
};

export { Image };
