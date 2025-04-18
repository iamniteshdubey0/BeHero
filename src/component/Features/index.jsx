import React from "react";
import {
  Container,
  styled,
  Grid,
  Typography,
  List,
  ListItem,
} from "@mui/material";
import { tokens } from "../../utils/theme";

const FeatureContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "5px",
  width: "100%",
  height: "100vh",
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
  height: "200px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[600]
      : tokens(theme.palette.mode).darkPurple[600],
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: "10px",
}));

const FeatureDetails = styled(Grid)(({ theme }) => ({
  width: "85%",
  padding: "10px 30px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[600]
      : tokens(theme.palette.mode).darkPurple[600],
  borderRadius: "20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  gap: "5px",
}));

const SectionHeader = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "0px 30px",
  gap: "12px",
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
      ? tokens(theme.palette.mode).yellow[400]
      : tokens(theme.palette.mode).darkPurple[800],
  margin: "0 16px",
  borderRadius: "4px",
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
    backgroundColor: tokens(theme.palette.mode).primary[600],
    color: tokens(theme.palette.mode).white[600],
  },
}));

const IconBox = styled("img")(() => ({
  width: "60px",
  height: "60px",
}));

const TabTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
}));

const TabSubtext = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  fontWeight: theme.typography.fontWeightMedium,
}));

const FeatureCard = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 0,
}));

const CardHeader = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

const CardImage = styled("img")(() => ({
  width: "35px",
  height: "35px",
}));

const StyledList = styled(List)(() => ({
  padding: "15px",
}));

const StyledListItem = styled(ListItem)(() => ({
  display: "list-item",
  listStyleType: "disc",
  padding: "2px 0",
  fontSize: "12px",
}));

const Features = () => {
  return (
    <FeatureContainer maxWidth="lg">
      <Wrapper container>
        <FeatureHighlight>
          <SectionHeader size={{ xs: 12, sm: 3.5 }}>
            <Heading>Features</Heading>
            <Subtext>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ea cupiditate, a
            </Subtext>
          </SectionHeader>

          <DividerY />

          <FeatureTab size={{ xs: 12, sm: 2.5 }}>
            <IconBox
              src="https://img.icons8.com/color/96/fantasy.png"
              alt="idea"
            />
            <TabTitle>Story Personalization</TabTitle>
            <TabSubtext>Every Hero Deserves a Personal Touch</TabSubtext>
          </FeatureTab>

          <FeatureTab size={{ xs: 12, sm: 2.5 }}>
            <IconBox
              src="https://img.icons8.com/color/96/courses.png"
              alt="book"
            />
            <TabTitle>Pre-Defined Story</TabTitle>
            <TabSubtext>Ready-Made Adventures, Infinitely Magical</TabSubtext>
          </FeatureTab>

          <FeatureTab size={{ xs: 12, sm: 2.5 }}>
            <IconBox
              src="https://img.icons8.com/color/96/keyhole-shield.png"
              alt="product"
            />
            <TabTitle>Data Security & Privacy</TabTitle>
            <TabSubtext>Safe Stories, Happy Parents</TabSubtext>
          </FeatureTab>
        </FeatureHighlight>

        <FeatureDetails container>
          <FeatureCard size={{ xs: 12, sm: 3.9 }}>
            <CardHeader>
              <CardImage src="https://img.icons8.com/color/96/artificial-intelligence.png" />
              <TabTitle>AI Story Generation</TabTitle>
            </CardHeader>
            <StyledList>
              <StyledListItem>
                A unique, personalized superhero story
              </StyledListItem>
              <StyledListItem>
                Always creative, fun, and age-appropriate
              </StyledListItem>
            </StyledList>
          </FeatureCard>

          <FeatureCard size={{ xs: 12, sm: 3.9 }}>
            <CardHeader>
              <CardImage src="https://img.icons8.com/color/96/artificial-intelligence.png" />
              <TabTitle>Download as PDF</TabTitle>
            </CardHeader>
            <StyledList>
              <StyledListItem>
                nstantly download as a print-ready PDF
              </StyledListItem>
              <StyledListItem>
                Easy to read, share, or save as keepsake
              </StyledListItem>
            </StyledList>
          </FeatureCard>

          <FeatureCard size={{ xs: 12, sm: 3.9 }}>
            <CardHeader>
              <CardImage src="https://img.icons8.com/color/96/artificial-intelligence.png" />
              <TabTitle>Illustrated Scenes</TabTitle>
            </CardHeader>
            <StyledList>
              <StyledListItem>
                Generates superhero stories with AI.
              </StyledListItem>
              <StyledListItem>
                Personalizes content based on input.
              </StyledListItem>
            </StyledList>
          </FeatureCard>

          <FeatureCard size={{ xs: 12, sm: 3.9 }}>
            <CardHeader>
              <CardImage src="https://img.icons8.com/color/96/artificial-intelligence.png" />
              <TabTitle>Print-on-Demand Book</TabTitle>
            </CardHeader>
            <StyledList>
              <StyledListItem>
                Order a printed, high-quality book.
              </StyledListItem>
              <StyledListItem>Delivered right to your home.</StyledListItem>
            </StyledList>
          </FeatureCard>

          <FeatureCard size={{ xs: 12, sm: 3.9 }}>
            <CardHeader>
              <CardImage src="https://img.icons8.com/color/96/artificial-intelligence.png" />
              <TabTitle>Family & Friends Integration</TabTitle>
            </CardHeader>
            <StyledList>
              <StyledListItem>
                Add parents, siblings, and friends to the story.
              </StyledListItem>
              <StyledListItem>
                Makes every tale feel warm and personal
              </StyledListItem>
            </StyledList>
          </FeatureCard>

          <FeatureCard size={{ xs: 12, sm: 3.9 }}>
            <CardHeader>
              <CardImage src="https://img.icons8.com/color/96/artificial-intelligence.png" />
              <TabTitle>Illustrated Scenes</TabTitle>
            </CardHeader>
            <StyledList>
              <StyledListItem>
                Generates superhero stories with AI.
              </StyledListItem>
              <StyledListItem>
                Personalizes content based on input.
              </StyledListItem>
            </StyledList>
          </FeatureCard>
        </FeatureDetails>
      </Wrapper>
    </FeatureContainer>
  );
};

export default Features;
