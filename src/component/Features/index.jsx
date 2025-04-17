import React from "react";
import { Container, styled, Grid, Typography } from "@mui/material";
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

const Wrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection:'column',
}));

const FeatureBox = styled(Grid)(({ theme }) => ({
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
  marginBottom:'10px'
}));


const FeatureDiscrption = styled(Grid)(({ theme }) => ({
  width: "85%",
  height: "300px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[600]
      : tokens(theme.palette.mode).darkPurple[600],
  borderRadius: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Header = styled(Grid)(({ theme }) => ({
  padding: "0px 30px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  gap: "12px",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const ParaText = styled(Typography)(({ theme }) => ({
  width: "90%",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: "10px",
}));

const FeatureTabs = styled(Grid)(({ theme }) => ({
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
        ? tokens(theme.palette.mode).primary[600]
        : tokens(theme.palette.mode).primary[600],
    color: tokens(theme.palette.mode).white[600],
  },
}));

const TabIcon = styled(Grid)((theme) => ({}));

const TabTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
}));

const TabText = styled(Typography)(({ theme }) => ({
  width: "85%",
  fontSize: "10px",
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

const Features = () => {
  return (
    <FeatureContainer maxWidth="lg">
      <Wrapper container>
        <FeatureBox>
          <Header size={{ xs: 12, sm: 3.5 }}>
            <Heading>Features</Heading>
            <ParaText>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed iure
              ea cupiditate, a
            </ParaText>
          </Header>
          <DividerY></DividerY>
          <FeatureTabs size={{ xs: 12, sm: 2.5 }}>
            <TabIcon>
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/nolan/50/idea.png"
                alt="idea"
              />
            </TabIcon>
            <TabTitle>Creative Idea</TabTitle>
            <TabText>Yeha hai Idea</TabText>
          </FeatureTabs>
          <FeatureTabs size={{ xs: 12, sm: 2.5 }}>
            <TabIcon>
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/nolan/50/book.png"
                alt="book"
              />
            </TabIcon>
            <TabTitle>Creative Idea</TabTitle>
            <TabText>Yeha hai Idea</TabText>
          </FeatureTabs>
          <FeatureTabs size={{ xs: 12, sm: 2.5 }}>
            <TabIcon>
              <img
                width="60"
                height="60"
                src="https://img.icons8.com/nolan/50/product.png"
                alt="product"
              />
            </TabIcon>
            <TabTitle>Creative Idea</TabTitle>
            <TabText>Yeha hai Idea</TabText>
          </FeatureTabs>
        </FeatureBox>
        <FeatureDiscrption>
          {/* Add more details of feature here */}
        </FeatureDiscrption>
      </Wrapper>
    </FeatureContainer>
  );
};

export default Features;
