import React from "react";
import { tokens } from "../../utils/theme";
import { Grid, styled, Typography } from "@mui/material";

const HeaderContainer = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SuperHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
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

const SectionHeader = ({title, subtitle}) => {
  return (
    <HeaderContainer>
      <Heading>{subtitle}</Heading>
      <SuperHeading>{title}</SuperHeading>
    </HeaderContainer>
  );
};

export default SectionHeader;
