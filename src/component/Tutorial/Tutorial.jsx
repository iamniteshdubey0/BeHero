import React from "react";
import { Container, Box, Grid, styled } from "@mui/material";
import { tokens } from "../../utils/theme";

const TutorialContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  width: "100%",
  height: "70vh",
  overflow: "hidden",
  marginTop: "40px",
  position:'relative',
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).secondary[500]
      : tokens(theme.palette.mode).secondary[600],
}));

const OverlayWrapper = styled(Grid)(({ theme }) => ({
  top: 0,
  left: 0,
  position: "absolute",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: -1,
}));

const ContentWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  zIndex:10,
}));

const TutorialTabBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const Tutorial = () => {
  return (
    <TutorialContainer maxWidth="xl">
      <OverlayWrapper>overlay</OverlayWrapper>
      <ContentWrapper>
        <TutorialTabBox>How tio</TutorialTabBox>
      </ContentWrapper>
    </TutorialContainer>
  );
};

export default Tutorial;
