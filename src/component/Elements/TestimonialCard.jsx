import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  styled,
} from "@mui/material";
import { motion } from "framer-motion";

// Styled card using MUI and Framer Motion
const MotionCard = motion(Card);

const TestimonialCard = ({ name, role, text, avatar }) => {
  return (
    <MotionCard
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      elevation={3}
      sx={{
        borderRadius: 4,
        p: 2,
        height: "100%", // Let Masonry control height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "background.paper",
      }}
    >
      <CardContent sx={{ paddingBottom: "16px !important" }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar src={avatar} sx={{ width: 48, height: 48, mr: 2 }} />
          <Box>
            <Typography variant="subtitle1" fontWeight="bold">
              {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {role}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="body2"
          color="text.primary"
          sx={{ fontStyle: "italic" }}
        >
          “{text}”
        </Typography>
      </CardContent>
    </MotionCard>
  );
};

export default TestimonialCard;
