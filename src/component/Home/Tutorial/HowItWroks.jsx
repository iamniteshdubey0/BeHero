import React, { useState } from "react";
import { Box, Typography, Grid, styled, Container } from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../../../utils/theme";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import SectionHeader from "../../Elements/SectionHeader";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const steps = [
  {
    title: "Create Your Account",
    description:
      "Sign up in seconds and unlock access to a world of personalized storytelling. It's fast, secure, and completely free to start.",
    icon: <VerifiedUserIcon sx={{ fontSize: 30, color: "white" }} />,
    bgColor: "secondary",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Generate a Magical Story",
    description:
      "Provide a few details, and let our smart AI weave a custom tale that sparks imagination and brings joy to young readers.",
    icon: <AutoAwesomeIcon sx={{ fontSize: 30, color: "white" }} />,
    bgColor: "primary",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    title: "Order Your Personalized Book",
    description:
      "Get your beautifully printed storybook delivered to your doorstep. Perfect for gifts, bedtime, or keepsake collections.",
    icon: <LocalShippingIcon sx={{ fontSize: 30, color: "white" }} />,
    bgColor: "green",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const TutorialContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  width: "100%",
  // minHeight: "80vh",
  overflow: "hidden",
  marginTop: "4rem",
}));

const Wrapper = styled(Grid)(({ theme }) => ({
  position: "relative",
  marginTop: "4rem",
  justifyContent: "center",
  alignItems: "flex-start",
}));

const YtvideoPlayer = styled("iframe")(({ theme }) => ({
  width: "100%",
  height: "100%",
  borderRadius: "8px",
}));

const VideoBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "400px",
  height: "250px",
  marginTop: "8px",
  padding: "2px",
  borderRadius: "8px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[600]
      : tokens(theme.palette.mode).darkPurple[600],
  boxShadow: 3,
}));

const IconBox = styled(Box)(({ theme, bgcolor }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "64px",
  height: "64px",
  borderRadius: "4px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode)[bgcolor][600]
      : tokens(theme.palette.mode)[bgcolor][400],
  marginBottom: "16px",
  cursor: "pointer",
  "&:hover": {
    backgroundColor:
      theme.palette.mode === "light"
        ? tokens(theme.palette.mode)[bgcolor][400]
        : tokens(theme.palette.mode)[bgcolor][600],
  },
}));

const Card = styled(Box)(({ theme }) => ({
  padding: "0px 8px",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const Divider = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const MotionCard = motion(Card);

const HowItWorks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <TutorialContainer maxWidth="lg">
      <SectionHeader title="Create Story" subtitle="How to ?"></SectionHeader>

      <Wrapper container spacing={6}>
        {steps.map((step, index) => (
          <React.Fragment key={index}>
            <Grid size={{ xs: 12, md: 3 }}>
              <MotionCard
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
              >
                <IconBox
                  bgcolor={step.bgColor} 
                  onClick={() => handleToggle(index)}
                >
                  {step.icon}
                </IconBox>
                <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                  {step.title}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: "text.secondary", maxWidth: 260, mx: "auto" }}
                >
                  {step.description}
                </Typography>
                {openIndex === index && (
                  <VideoBox>
                    <YtvideoPlayer
                      src={step.videoUrl}
                      title="YouTube video"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </VideoBox>
                )}
              </MotionCard>
            </Grid>
            {index < steps.length - 1 && (
              <Divider size={{ xs: 12, md: 1 }}>
                <ArrowForwardIcon
                  sx={{
                    fontSize: 48,
                    color: "#c1c1c1",
                    transform: { xs: "rotate(90deg)", md: "rotate(0deg)" },
                  }}
                ></ArrowForwardIcon>
              </Divider>
            )}
          </React.Fragment>
        ))}
      </Wrapper>
    </TutorialContainer>
  );
};

export default HowItWorks;
