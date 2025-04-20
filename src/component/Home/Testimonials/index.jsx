import React from "react";
import { Container, styled, Typography, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
import { tokens } from "../../../utils/theme";
import TestimonialCard from "../../Elements/TestimonialCard";
import SectionHeader from "../../Elements/SectionHeader";

const heights = [160, 200, 180 , 160, 240, 180, 200, 180];

const Item = styled(Grid)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: (theme.vars || theme).palette.text.secondary,
  ...theme.applyStyles("dark", {
  }),
}));

const TestimonialsContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  padding: "5px",
  width: "100%",
  height: "100vh",
  overflow: "hidden",
  marginTop: "30px",
}));


const Testimonials = () => {
  return (
    <TestimonialsContainer maxWidth="lg">
       <SectionHeader title="Testimonials" subtitle="Our Clients"></SectionHeader>
      <Masonry sx={{ mt: 4 }} columns={{ xs: 3, sm: 4 }} spacing={2}>
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            <TestimonialCard
              name="Jane Doe"
              role="Product Designer"
              text="This platform transformed the way I build stories. It’s simple, intuitive, and powerful!"
              avatar="https://randomuser.me/api/portraits/women/44.jpg"
            />
          </Item>
        ))}
      </Masonry>
    </TestimonialsContainer>
  );
};

export default Testimonials;
