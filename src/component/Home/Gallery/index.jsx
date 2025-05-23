import React, { useState } from "react";
import { Container, Grid, styled, Typography, Box } from "@mui/material";
import SectionHeader from "../../Elements/SectionHeader";
import CollectiomCards from "../../Elements/CollectiomCards";
import RoundButton from "../../Elements/RoundButton";
import { useTheme, useMediaQuery } from "@mui/material";

const Wrapper = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "5px",
}));

const ParaText = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  width: "50%",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
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
  minWidth: "100%",
  height: "300px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5px",
  [theme.breakpoints.down("md")]: {
    minWidth: "150px",
  },
}));

const desktopCardPositions = [
  { rotate: -15, left: -420, z: 1 },
  { rotate: -7, left: -280, z: 2 },
  { rotate: 3, left: -140, z: 3 },
  { rotate: 0, left: 0, z: 2 },
  { rotate: 7, left: 140, z: 1 },
  { rotate: 15, left: 280, z: 1 },
];

const mobileCardPositions = [
  { rotate: -15, left: -90, z: 1 },
  { rotate: 0, left: 0, z: 3 },
  { rotate: 15, left: 90, z: 2 },
];

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const visibleCards = isMobile ? mobileCardPositions : desktopCardPositions;

  const handleClick = (index) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <Container
      id="gallery"
      maxWidth="lg"
      sx={{
        p: 2,
        mt: 3,
        width: "100%",
        height: { xs: "70vh", md: "fit-content" },
        overflow: "hidden",
      }}
    >
      <Wrapper>
        <SectionHeader title="Collections" subtitle="Our Best"></SectionHeader>
        <MiddleBox>
          <CardStack>
            {visibleCards.map((card, index) => {
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
