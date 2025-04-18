import React from "react";
import { Container, Box, Grid, styled } from "@mui/material";
import { tokens } from "../../utils/theme";
import VerticalTabs from "../Elements/VerticalTabs";

const TutorialContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  padding: "5px",
  width: "100%",
  height: "70vh",
  overflow: "hidden",
  marginTop: "40px",
}));

const ContentWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
}));

const TutorialTabBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const Tutorial = () => {
  return (
    <TutorialContainer maxWidth="lg">
      <ContentWrapper>
        {/* <TutorialTabBox>How tio</TutorialTabBox> */}
        <VerticalTabs></VerticalTabs>
      </ContentWrapper>
    </TutorialContainer>
  );
};

export default Tutorial;
