import React, { useState } from "react";
import { Container, Grid, styled, Typography, Box } from "@mui/material";
import { tokens } from "../../utils/theme";
import CollectiomCards from "../Elements/CollectiomCards";
import RoundButton from "../RoundButton";

const Wrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

const TopBox = styled(Grid)(({ theme }) => ({
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

const ParaText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  width: "50%",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom:"10px"
}));

const MiddleBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

const LowerBox = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

const CardStack = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5px",
}));

const cardPositions = [
  { rotate: -15, left: -420, z: 1 },
  { rotate: -7, left: -280, z: 2 },
  { rotate: 3, left: -140, z: 3 },
  { rotate: 0, left: 0, z: 2 },
  { rotate: 7, left: 140, z: 1 },
  { rotate: 15, left: 280, z: 1 },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        p: 2,
        mt: 3,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <Wrapper>
        <TopBox>
          <Heading>The Ultimate</Heading>
          <SuperHeading>Collections</SuperHeading>
        </TopBox>
        <MiddleBox>
          <CardStack>
            {cardPositions.map((card, index) => {
              const isActive = activeIndex === index;
              return (
                <CollectiomCards
                  key={index}
                  index={index}
                  isActive={isActive}
                  handleClick={handleClick}
                  card={card}
                />
              );
            })}
          </CardStack>
        </MiddleBox>
        <LowerBox>
          <ParaText>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe hic
            amet, minus aliquam nulla corrupti quaerat aut aspernatur! Sed nisi
            natus molestias, consequuntur impedit dolores a nam incidunt dolorum
            aliquam.
          </ParaText>
          <RoundButton label="Explore Now" bgColor="primary"></RoundButton>
        </LowerBox>
      </Wrapper>
    </Container>
  );
};

export default Gallery;
