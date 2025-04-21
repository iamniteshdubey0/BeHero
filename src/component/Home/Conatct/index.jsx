import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  Divider,
} from "@mui/material";
import { motion } from "framer-motion";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const ContactSection = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom right, #eafaf8, #ffffff)",
        py: 10,
        px: 2,
      }}
    >
      <Stack spacing={2} textAlign="center" mb={6}>
        <Typography variant="h4" fontWeight="bold">
          Get In Touch
        </Typography>
        <Typography variant="body1" color="text.secondary">
          We’ll create high-quality linkable content and build at least 40
          high-authority links to each asset, paving the way for you to grow
          your rankings, improve brand.
        </Typography>
      </Stack>

      <Grid container justifyContent="center">
        <Grid
          size={{ xs: 12, md: 10 }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              borderRadius: 4,
              overflow: "hidden",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            {/* Contact Info */}
            <Box
              sx={{ backgroundColor: "#00bfa5", color: "white", p: 4, flex: 1 }}
            >
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body2" mb={3}>
                We’ll create high-quality linkable content and build at least 40
                high-authority.
              </Typography>
              <Stack spacing={2}>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon />
                  <Typography>+8801779717686</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <PhoneIcon />
                  <Typography>+988678363686</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <EmailIcon />
                  <Typography>Support@uprankly.com</Typography>
                </Stack>
                <Stack direction="row" spacing={1} alignItems="center">
                  <LocationOnIcon />
                  <Typography>New York, USA</Typography>
                </Stack>
              </Stack>
            </Box>

            {/* Contact Form */}
            <Box sx={{ flex: 2, p: 4, backgroundColor: "white" }}>
              <Grid container spacing={2}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="caption" fontWeight="bold">
                    Your Name
                  </Typography>
                  <TextField
                    variant="standard"
                    fullWidth
                    defaultValue="John Trangely"
                    InputProps={{ disableUnderline: true }}
                  />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <Typography variant="caption" fontWeight="bold">
                    Your Email
                  </Typography>
                  <TextField
                    variant="standard"
                    fullWidth
                    defaultValue="hello@nurency.com"
                    InputProps={{ disableUnderline: true }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography variant="caption" fontWeight="bold">
                    Your Subject
                  </Typography>
                  <TextField
                    variant="standard"
                    fullWidth
                    defaultValue="I want to hire you quickly"
                    InputProps={{ disableUnderline: true }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Typography
                    variant="caption"
                    fontWeight="bold"
                    color="#00bfa5"
                  >
                    Message
                  </Typography>
                  <TextField
                    variant="standard"
                    fullWidth
                    placeholder="Write here your message"
                    multiline
                    rows={3}
                    InputProps={{ disableUnderline: true }}
                    sx={{ mt: 1, borderBottom: "2px solid #00bfa5", pb: 1 }}
                  />
                </Grid>
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#00bfa5", borderRadius: 2 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactSection;
