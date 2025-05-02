import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  useTheme,
  Container,
  styled,
} from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader2 from "../../Elements/SectionHeader2";
import { tokens } from "../../../utils/theme";
import "@fontsource/indie-flower";

const testimonials = [
  {
    name: "Jane Doe",
    role: "Product Designer",
    quote:
      "This platform transformed the way I build stories. It’s simple, intuitive, and powerful!",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "John Smith",
    role: "Developer",
    quote: "An absolute game changer for productivity.",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Emily Johnson",
    role: "Marketing Specialist",
    quote: "Everything just works seamlessly.",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    name: "Chris Lee",
    role: "UX Consultant",
    quote: "One of the best tools I’ve ever used!",
    avatar: "https://randomuser.me/api/portraits/men/41.jpg",
  },
  {
    name: "Alex Rivera",
    role: "Business Analyst",
    quote: "It made our workflow so much more efficient.",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
  },
  {
    name: "Samantha Ray",
    role: "Project Manager",
    quote: "Collaboration has never been easier.",
    avatar: "https://randomuser.me/api/portraits/women/51.jpg",
  },
  {
    name: "Carlos Gomez",
    role: "Engineer",
    quote: "Great value and solid customer service.",
    avatar: "https://randomuser.me/api/portraits/men/35.jpg",
  },
  {
    name: "Megan White",
    role: "HR Specialist",
    quote: "Helped us hire better, faster.",
    avatar: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "David Kim",
    role: "Team Lead",
    quote: "Absolutely love the performance improvements.",
    avatar: "https://randomuser.me/api/portraits/men/20.jpg",
  },
];

const TestimonialsContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  width: "100%",
  minHeight: "100vh",
  overflow: "hidden",
  marginTop: "30px",
  textAlign: "center",
}));

const Wrapper = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
  alignItems: "flex-start",
  marginTop: "60px",
  position: "relative",
  width: "100%",
  padding: "40px 20px",
  [theme.breakpoints.down("md")]: {
    padding: "20px",
  },
}));

const CardsWrapper = styled(Grid)(({ theme, idx }) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",
  margin: "2px",
  zIndex: 1,
  opacity: 0.9,
  transform:
    idx % 5 === 0
      ? "translateY(0px)"
      : idx % 5 === 1
      ? "translateY(-40px)"
      : idx % 5 === 2
      ? "translateY(-25px)"
      : idx % 5 === 3
      ? "translateY(5px)"
      : "translateY(-50px)",
  "&:hover": {
    zIndex: 1000,
  },
  transition: "transform 0.3s ease",
  [theme.breakpoints.down("md")]: {
    flexDirection: "row",
  },
}));

const TestimonialCard = styled(Box)(() => ({
  position: "relative",
  width: "140px",
  height: "160px",
  borderRadius: "16px",
  overflow: "visible",
  cursor: "pointer",
  backgroundColor: "white",
  zIndex: 1,
}));

const CardImg = styled(Avatar)(({}) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "8px",
  zIndex: 10,
}));

const DropBox = styled(Box)(({ theme }) => ({
  marginTop: "4px",
  padding: "12px",
  width: "160px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[800]
      : tokens(theme.palette.mode).darkPurple[600],
  borderRadius: "8px",
  position: "absolute",
  bottom: "-80px",
  zIndex: 1000,
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
}));

const DropBoxTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.subtitle2.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const DropBoxText = styled(Typography)(({ theme }) => ({
  marginTop: "8px",
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  fontFamily: '"Indie Flower", cursive',
}));

const AnimatedCard = motion(TestimonialCard);

const TestimonialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();

  return (
    <TestimonialsContainer maxWidth="lg">
      <SectionHeader2
        Sname="Testimonial"
        title="Trusted by parents"
        subtitle="from various industries"
      ></SectionHeader2>
      <Wrapper container spacing={{xs:4, md:6}}>
        {testimonials.map((testimonial, index) => (
          <CardsWrapper
            idx={index}
            key={index}
            size={{ xs: 5.5, sm: 4, md: 2 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatedCard
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              sx={{ boxShadow: 4 }}
            >
              <CardImg src={testimonial.avatar} alt={testimonial.name} />
            </AnimatedCard>

            <AnimatePresence>
              {hoveredIndex === index && (
                <motion.div
                  initial={{ opacity: 0, x: 0 }}
                  animate={{ opacity: 1, x: 30 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  style={{ position: "absolute", zIndex: 100 }}
                >
                  <DropBox
                    sx={{
                      boxShadow: 3,
                      zIndex: hoveredIndex === index ? 100 : 10,
                    }}
                  >
                    <DropBoxTitle>{testimonial.name}</DropBoxTitle>
                    <DropBoxText>{testimonial.quote}</DropBoxText>
                  </DropBox>
                </motion.div>
              )}
            </AnimatePresence>
          </CardsWrapper>
        ))}
      </Wrapper>
    </TestimonialsContainer>
  );
};

export default TestimonialSection;
