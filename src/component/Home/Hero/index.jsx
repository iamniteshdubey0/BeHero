import React from "react";
import { Box, Container, Grid, styled, Typography } from "@mui/material";
import { tokens } from "../../../utils/theme";
import "@fontsource/indie-flower";
import RoundButton from "../../Elements/RoundButton";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { HeroData } from "../../../constants/UIConstant";

const LayersWrapper = styled(Grid)(({ theme }) => ({
  top: 0,
  left: 0,
  position: "absolute",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
  zIndex: -1,
  [theme.breakpoints.down("md")]: {},
}));

const Layer1 = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  border:
    theme.palette.mode === "light"
      ? `1px solid ${tokens(theme.palette.mode).white[400]}`
      : `1px solid ${tokens(theme.palette.mode).white[700]}`,
  width: "1100px",
  height: "700px",
  borderRadius: "50%",
  zIndex: -1,
  transform: "rotate(30deg)",
  [theme.breakpoints.down("md")]: {
    width: "800px",
    height: "500px",
    transform: "rotate(40deg)",
  },
}));

const Layer2 = styled(Grid)(({ theme }) => ({
  position: "relative",
  border:
    theme.palette.mode === "light"
      ? `1px solid ${tokens(theme.palette.mode).white[400]}`
      : `1px solid ${tokens(theme.palette.mode).white[700]}`,
  width: "700px",
  height: "400px",
  borderRadius: "50%",
  zIndex: -1,
  transform: "rotate(15deg)",
  [theme.breakpoints.down("md")]: {
    width: "500px",
    height: "300px",
    transform: "rotate(106deg)",
  },
}));

const StickerBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "60px",
  height: "60px",
  transform: "rotate(-30deg)",
  opacity: 0.6,
  backgroundColor: "transparent",
  [theme.breakpoints.down("md")]: {
    width: "40px",
    height: "40px",
  },
}));

const ContentWrapper = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginTop: "15px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  zIndex: 10,
  [theme.breakpoints.down("md")]: {
    height: "70vh",
  },
}));

const HeroHeader = styled(Grid)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  gap: "10px",
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const HeroHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  fontFamily: '"Indie Flower", cursive',
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.h2.fontSize,
  },
}));

const HeroSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[800]
      : tokens(theme.palette.mode).darkPurple[600],
  padding: 4,
  borderRadius: "5px",
  marginBottom: "15px",
  [theme.breakpoints.down("md")]: {
    fontSize: theme.typography.caption.fontSize,
  },
}));

const HeroContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
}));

const LeftImage = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "5px",
  [theme.breakpoints.down("md")]: {
    transform: "translateY(40px)",
  },
}));

const RightImage = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "start",
  padding: "5px",
  transform: "translateY(-60px)",
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Image = styled("img")(({ theme }) => ({
  height: "300px",
  width: "300px",
  objectFit: "contain",
  [theme.breakpoints.down("md")]: {
    height: "200px",
    width: "200px",
  },
}));

const BgBox = styled(Box)(({ theme, bgcolor }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "220px",
  height: "220px",
  borderRadius: "50%",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode)[bgcolor][700]
      : tokens(theme.palette.mode)[bgcolor][300],
  [theme.breakpoints.down("md")]: {
    height: "160px",
    width: "160px",
  },
}));

const MiddleContent = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: "5px",
}));

const HeroPara = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Hero = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: "100%",
        height: { xs: "70vh", md: "100vh" },
        overflow: "hidden",
        position: "relative",
      }}
    >
      <LayersWrapper>
        <Layer1>
          {HeroData.overlayIcons.layer1.map((item, index) => (
            <StickerBox
              key={index}
              sx={{ top: item.position.top, left: item.position.left }}
            >
              <img src={item.img} alt={item.name} style={{ width: "100%" }} />
            </StickerBox>
          ))}

          <Layer2>
            {HeroData.overlayIcons.layer2.map((item, index) => (
              <StickerBox
                key={index}
                sx={{ top: item.position.top, left: item.position.left }}
              >
                <img src={item.img} alt={item.name} style={{ width: "100%" }} />
              </StickerBox>
            ))}
          </Layer2>
        </Layer1>
      </LayersWrapper>
      <ContentWrapper>
        <HeroHeader>
          <HeroHeading>{HeroData.mainheading}</HeroHeading>
          <HeroSubHeading>{HeroData.subheading}</HeroSubHeading>
          {/* add diffeent Button variant*/}
          <RoundButton
            size="large"
            label="get started"
            bgColor="green"
            icon={<ArrowForwardIcon />}
          ></RoundButton>
        </HeroHeader>
        <HeroContent container>
          <LeftImage size={{ xs: 12, sm: 4 }}>
            <BgBox bgcolor="yellow">
              <Image src="src\assets\kid2.png"></Image>
            </BgBox>
          </LeftImage>
          <MiddleContent size={{ xs: 12, sm: 4 }}>
            <HeroPara>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto
              explicabo harum vitae nostrum qui omnis aut magni eligendi nobis
              labore blanditiis eum consequuntur ipsa, ad autem maiores neque
              voluptatibus quo.
            </HeroPara>
          </MiddleContent>
          <RightImage size={{ xs: 12, sm: 4 }}>
            <BgBox bgcolor="primary">
              <Image src="src\assets\kid-1.png"></Image>
            </BgBox>
          </RightImage>
        </HeroContent>
      </ContentWrapper>
    </Container>
  );
};

export default Hero;
