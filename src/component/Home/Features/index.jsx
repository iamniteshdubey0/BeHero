import React from "react";
import { Container, styled, Grid, Typography } from "@mui/material";
import { tokens } from "../../../utils/theme";
import FeatureItemCard from "../../Elements/FeatureItemCard";

const FeatureContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "5px",
  width: "100%",
  maxHeight: "100vh",
  overflow: "hidden",
  marginTop: "40px",
}));

const Wrapper = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
}));

const FeatureHighlight = styled(Grid)(({ theme }) => ({
  width: "85%",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).green[800]
      : tokens(theme.palette.mode).darkPurple[500],
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
  padding: "8px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
}));

const FeatureDetails = styled(Grid)(({ theme }) => ({
  width: "85%",
  padding: "10px 30px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).green[800]
      : tokens(theme.palette.mode).darkPurple[500],
  borderRadius: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "5px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: "10px",
  },
}));

const SectionHeader = styled(Grid)(({theme}) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px 30px",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    padding: "0px 8px",
    gap: "4px",
    marginBottom:"8px",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const Subtext = styled(Typography)(({ theme }) => ({
  width: "90%",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: "10px",
}));

const DividerY = styled("div")(({ theme }) => ({
  width: "2px",
  height: "40%",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).green[400]
      : tokens(theme.palette.mode).darkPurple[600],
  margin: "0 16px",
  borderRadius: "4px",
  [theme.breakpoints.down("md")]: {
    display:'none'
  },
}));

const FeatureTab = styled(Grid)(({ theme }) => ({
  padding: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  borderRadius: "10px",
  cursor: "pointer",
  gap: "10px",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? tokens(theme.palette.mode).green[700]
        : tokens(theme.palette.mode).darkPurple[600],
    color: tokens(theme.palette.mode).white[600],
  },
  [theme.breakpoints.down("md")]: {
    padding: "4px",
  },
}));

const IconBox = styled("img")(({ theme }) => ({
  width: "60px",
  height: "60px",
  [theme.breakpoints.down("md")]: {
    width: "30px",
    height: "30px",
  },
}));

const TabTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.subtitle1.fontSize,
  },
}));

const TabSubtext = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: theme.typography.fontWeightMedium,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Features = () => {
  return (
    <FeatureContainer maxWidth="lg" id="features">
      <Wrapper container>
        <FeatureHighlight container>
          <SectionHeader size={{ xs: 12, sm: 3.5 }}>
            <Heading>Features</Heading>
            <Subtext>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ea cupiditate, a
            </Subtext>
          </SectionHeader>

          <DividerY />

          <FeatureTab size={{ xs: 4, sm: 2.5 }}>
            <IconBox
              src="https://img.icons8.com/color/96/fantasy.png"
              alt="idea"
            />
            <TabTitle>Story Personalization</TabTitle>
            <TabSubtext>Every Hero Deserves a Personal Touch</TabSubtext>
          </FeatureTab>

          <FeatureTab size={{ xs: 4, sm: 2.5 }}>
            <IconBox
              src="https://img.icons8.com/color/96/courses.png"
              alt="book"
            />
            <TabTitle>Pre-Defined Story</TabTitle>
            <TabSubtext>Ready-Made Adventures, Infinitely Magical</TabSubtext>
          </FeatureTab>

          <FeatureTab size={{ xs: 4, sm: 2.5 }}>
            <IconBox
              src="https://img.icons8.com/color/96/keyhole-shield.png"
              alt="product"
            />
            <TabTitle>Data Security & Privacy</TabTitle>
            <TabSubtext>Safe Stories, Happy Parents</TabSubtext>
          </FeatureTab>
        </FeatureHighlight>

        <FeatureDetails container>
          <FeatureItemCard
            icon="https://img.icons8.com/color/96/artificial-intelligence.png"
            title="AI Story Generation"
            p1="A unique, personalized superhero story"
            p2="Always creative, fun, and age-appropriate"
          ></FeatureItemCard>

          <FeatureItemCard
            icon="https://img.icons8.com/color/96/artificial-intelligence.png"
            title="AI Story Generation"
            p1="A unique, personalized superhero story"
            p2="Always creative, fun, and age-appropriate"
          ></FeatureItemCard>

          <FeatureItemCard
            icon="https://img.icons8.com/color/96/artificial-intelligence.png"
            title="AI Story Generation"
            p1="A unique, personalized superhero story"
            p2="Always creative, fun, and age-appropriate"
          ></FeatureItemCard>
        </FeatureDetails>
      </Wrapper>
    </FeatureContainer>
  );
};

export default Features;
