import React from "react";
import { Container, Box, Grid, styled, Typography } from "@mui/material";
import { tokens } from "../../../utils/theme";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import SectionHeader from "../../Elements/SectionHeader";

const TutorialContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  width: "100%",
  height: "80vh",
  overflow: "hidden",
  marginTop: "30px",
}));

const ContentWrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "20px",
  width: "100%",
  height: "100%",
}));

const TutorialTabBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
}));

const VideoBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  objectFit: "contain",
}));

const DetailsBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const TopBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
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

const SuperHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const Tutorial = () => {
  return (
    <TutorialContainer maxWidth="lg">
       <SectionHeader title="Create Story" subtitle="How to ?"></SectionHeader>
      <ContentWrapper>
        {/* <TutorialTabBox>How tio</TutorialTabBox> */}
        <TutorialTabBox container>
          <VideoBox size={{ xs: 12, sm: 8 }}>
            <img
              width="200px"
              height="200px"
              src="src\assets\kid-1.png"
              alt=""
              srcset=""
            />
            {/* <video src="../assets"></video> */}
          </VideoBox>
          <DetailsBox size={{ xs: 12, sm: 4 }}>
            <Timeline
              sx={{
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }}
            >
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>Account Creation</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Generate Story</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineSeparator>
                  <TimelineDot />
                </TimelineSeparator>
                <TimelineContent>Print or Download</TimelineContent>
              </TimelineItem>
            </Timeline>
          </DetailsBox>
        </TutorialTabBox>
      </ContentWrapper>
    </TutorialContainer>
  );
};

export default Tutorial;
