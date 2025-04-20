import React, { useState } from "react";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  Button,
  useTheme,
} from "@mui/material";
import { motion } from "framer-motion";

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

const AnimatedCard = motion(Box);

const TestimonialSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: "50px 20px",
        backgroundColor: theme.palette.background.default,
        textAlign: "center",
        borderRadius: "32px",
        overflow: "hidden",
      }}
    >
      <Typography variant="subtitle2" gutterBottom>
        Testimonials
      </Typography>
      <Typography variant="h4" fontWeight="bold">
        Trusted by leaders
      </Typography>
      <Typography variant="h5" sx={{ color: "gray" }}>
        from various industries
      </Typography>
      <Typography variant="body1" mt={2} mb={4}>
        Learn why professionals trust our solutions to complete their customer
        journeys.
      </Typography>
      <Button variant="contained">Read Success Stories →</Button>

      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="flex-start"
        mt={6}
        sx={{ position: "relative", width: "100%" }}
      >
        {testimonials.map((testimonial, index) => (
          <Grid
            item
            key={index}
            xs={6}
            sm={4}
            md={2}
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              transform:
                index % 5 === 1
                  ? "translateY(40px)"
                  : index % 5 === 2
                  ? "translateY(80px)"
                  : index % 5 === 3
                  ? "translateY(40px)"
                  : "translateY(0)",
              transition: "transform 0.3s ease",
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatedCard
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              sx={{
                position:'relative',
                width: 120,
                height: 150,
                borderRadius: 4,
                overflow: "hidden",
                cursor: "pointer",
                boxShadow: 4,
                backgroundColor: "white",
                zIndex:10,
              }}
            >
              <Avatar
                src={testimonial.avatar}
                alt={testimonial.name}
                sx={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </AnimatedCard>
            {hoveredIndex === index && (
              <Box
                sx={{
                  mt: 1,
                  p: 2,
                  width: 160,
                  bgcolor: "white",
                  borderRadius: 2,
                  boxShadow: 3,
                  position: "absolute",
                  zIndex: 20,
                  bottom:-60,
                }}
              >
                <Typography variant="subtitle2" fontWeight="bold">
                  {testimonial.name}
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {testimonial.quote}
                </Typography>
              </Box>
            )}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default TestimonialSection;
