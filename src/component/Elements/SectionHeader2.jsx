import React from "react";
import { Typography, styled, Grid } from "@mui/material";
import { tokens } from "../../utils/theme";
import "@fontsource/indie-flower";

const HeaderContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SuperHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  fontFamily: '"Indie Flower", cursive',
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[800]
      : tokens(theme.palette.mode).darkPurple[600],
  padding: 4,
  borderRadius: "5px",
}));

const Para = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.body1.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
    color:"text.secondary",
  }));

const SectionHeader2 = ({ Sname, title, subtitle }) => {
  return (
    <HeaderContainer>
      <Heading>{Sname}</Heading>
      <SuperHeading>{title}</SuperHeading>
      <Para>{subtitle}</Para>
    </HeaderContainer>
  );
};

export default SectionHeader2;
