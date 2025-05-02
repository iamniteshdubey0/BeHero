import React from "react";
import { Grid, Typography, styled } from "@mui/material";
import { tokens } from "../../utils/theme";
import { motion } from "framer-motion";

const MotionCard = motion(Grid);

const CardContainer = styled(MotionCard)(({ theme }) => ({
  width: "150px",
  height: "220px",
  minWidth: "150px",
  borderRadius: "8px",
  backgroundColor: tokens(theme.palette.mode).secondary[500],
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  overflow: "hidden",
  position: "absolute",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    width: "120px",
    height: "170px",
  },
}));

const CardWrapper = styled(Grid)(({ theme }) => ({
  borderRadius: "4px",
  position: "relative",
  width: "100%",
  height: "100%",
  overflow: "hidden",
}));

const CardImg = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: theme.typography.fontWeightMedium,
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[800]
      : tokens(theme.palette.mode).darkPurple[600],
  padding: "3px 6px",
  borderRadius: "5px",
  position: "absolute",
  top: "10px",
  right: "10px",
  zIndex: 2,
}));

const CollectiomCards = ({ isActive, handleClick, index, card, isMobile }) => {
  return (
    <CardContainer
      layout
      initial={{
        rotate: isMobile ? 0 : parseFloat(card.rotate),
        left: isMobile ? 0 : card.left,
      }}
      animate={{
        rotate: isMobile ? 0 : isActive ? 0 : parseFloat(card.rotate),
        left: isMobile ? 0 : card.left,
        scale: isActive ? 1.5 : 1,
        zIndex: isMobile ? 1 : isActive ? 20 : card.z,
      }}
      whileHover={{ scale: isActive ? 1.5 : 1.1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      onClick={() => handleClick(index)}
      style={{
        position: isMobile ? "relative" : "absolute",
        marginRight: isMobile ? "16px" : 0,
      }}
    >
      <CardWrapper>
        <CardImg src="src/assets/kid-1.png" />
        <CardTitle>card{index + 1}</CardTitle>
      </CardWrapper>
    </CardContainer>
  );
};

export default CollectiomCards;
