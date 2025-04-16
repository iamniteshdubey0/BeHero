import React from "react";
import { styled, IconButton, useTheme } from "@mui/material";
import { tokens } from "../utils/theme";
import { motion } from "framer-motion";

// Wrap IconButton with motion
const MotionIconButton = motion.create(IconButton);

// Styled component with dynamic color logic
const StyledIconButton = styled(MotionIconButton, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})(({ theme, bgColor }) => {
  const bg = tokens(theme.palette.mode)[bgColor]?.[900];
  const borderBg = tokens(theme.palette.mode)[bgColor]?.[500];
  const text = tokens(theme.palette.mode)[bgColor]?.[500];

  return {
    padding: "6px",
    backgroundColor: "transparent",
    border: `1px solid ${tokens(theme.palette.mode).white[300]}`,
    color: tokens(theme.palette.mode).white[300],
    width: "35px",
    height: "35px",
    borderRadius: "50%",
    transition: "all 0.3s ease",
    "&:hover": {
      border: `1px solid ${borderBg}`,
      backgroundColor: bg,
      color: text, // on hover, text becomes bgColor
    },
  };
});

const DynamicIconButton = ({ children, bgColor, onclick, ...rest }) => {
  const theme = useTheme();

  return (
    <StyledIconButton
      onClick={onclick}
      disableTouchRipple
      size="small"
      bgColor={bgColor}
      whileTap={{ scale: 0.95 }}
      {...rest}
    >
      {children}
    </StyledIconButton>
  );
};

export default DynamicIconButton;
