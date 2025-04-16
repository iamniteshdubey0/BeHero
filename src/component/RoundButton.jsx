import React from "react";
import { Button, styled, useTheme } from "@mui/material";
import { tokens } from "../utils/theme";
import { motion } from "framer-motion";

const SlideButtonWrapper = styled(motion.div)(() => ({
  position: "relative",
  display: "inline-block",
  borderRadius: "30px",
  overflow: "hidden",
}));

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "bgColor",
})(({ theme, bgColor }) => ({
  position: "relative",
  zIndex: 2,
  backgroundColor: "transparent",
  border: `1px solid ${tokens(theme.palette.mode)[bgColor]?.[600] || "#ccc"}`,
  color: tokens(theme.palette.mode)[bgColor]?.[600] || "#000",
  borderRadius: "30px",
  padding: "0.4rem 1.2rem",
  transition: "color 0.3s ease, border 0.3s ease",
}));

const BackgroundMotion = styled(motion.div)(({ theme, bgColor }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  height: "100%",
  width: "100%",
  backgroundColor: tokens(theme.palette.mode)[bgColor]?.[600] || "#eee",
  zIndex: 1,
  transformOrigin: "left",
}));

const RoundButton = ({ label, bgColor, icon, size }) => {
  const theme = useTheme();

  return (
    <SlideButtonWrapper whileHover="hover" initial="rest" animate="rest">
      <BackgroundMotion
        bgColor={bgColor}
        variants={{
          rest: { scaleX: 0 },
          hover: { scaleX: 1, transition: { duration: 0.4, ease: "easeOut" } },
        }}
      />
      <StyledButton
        size={size}
        variant="contained"
        disableElevation
        endIcon={icon}
        bgColor={bgColor}
        sx={{
          color: tokens(theme.palette.mode)[bgColor]?.[600],
          border: `1px solid ${tokens(theme.palette.mode)[bgColor]?.[600]}`,
          "&:hover": {
            color:
              theme.palette.mode === "light"
                ? tokens(theme.palette.mode).white[600]
                : tokens(theme.palette.mode).white[400],
            border:
              theme.palette.mode === "light"
                ? `1px solid ${tokens(theme.palette.mode).white[600]}`
                : `1px solid ${tokens(theme.palette.mode).white[400]}`,
            backgroundColor: "transparent",
          },
        }}
      >
        {label}
      </StyledButton>
    </SlideButtonWrapper>
  );
};

export default RoundButton;
