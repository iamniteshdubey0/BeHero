import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  IconButton,
  Stack,
  Container,
} from "@mui/material";
import { styled } from "@mui/system";
import {
  Facebook,
  Twitter,
  Instagram,
  LinkedIn,
  Google,
} from "@mui/icons-material";
import { motion } from "framer-motion";

const FooterContainer = styled("footer")(({ theme }) => ({
  backgroundColor: "#fff",
  paddingTop: theme.spacing(10),
  color: "#000",
}));

const NewsletterSection = styled(Box)(({ theme }) => ({
  width: "75%",
  backgroundColor: "#3366FF",
  color: "#fff",
  borderRadius: "12px",
  padding: theme.spacing(6),
  marginBottom: theme.spacing(8),
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "row",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    textAlign: "center",
  },
}));

const InputWrapper = styled("form")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  border: "1px solid #ccc",
  borderRadius: "24px",
  overflow: "hidden",
  backgroundColor: "#fff",
  padding: theme.spacing(0.5, 2),
  maxWidth: 400,
  marginTop: theme.spacing(2),
}));

const FooterBottom = styled(Box)(({ theme }) => ({
  textAlign: "center",
  padding: theme.spacing(3, 0),
  borderTop: "1px solid #eee",
  marginTop: theme.spacing(4),
  fontSize: 12,
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg" sx={{textAlign:'center'}}>
        <NewsletterSection
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Box>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Subscribe to our newsletter to get updates to our latest
              collections
            </Typography>
            <Typography variant="body2">
              Get 20% off on your first order just by subscribing to our
              newsletter
            </Typography>
            <InputWrapper>
              <TextField
                placeholder="Enter your email"
                variant="standard"
                InputProps={{ disableUnderline: true }}
                fullWidth
              />
              <Button
                type="submit"
                variant="contained"
                sx={{ ml: 2, borderRadius: 4 }}
              >
                Subscribe
              </Button>
            </InputWrapper>
            <Typography variant="caption" mt={1} display="block">
              You will be able to unsubscribe at any time. Read our privacy
              policy <a href="#">here</a>.
            </Typography>
          </Box>
          <Box
            component="img"
            src="/vacuum.png"
            alt="vacuum"
            sx={{ maxWidth: 200, mt: { xs: 4, md: 0 } }}
          />
        </NewsletterSection>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 3 }}>
            <Box>
              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <Box component="img" src="/logo.svg" alt="logo" width={24} />
                <Typography variant="h6">Stay Clean</Typography>
              </Box>
              <Typography variant="body2" color="textSecondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit et
                aliquam, purus sit amet luctus venenatis.
              </Typography>
              <Box mt={2} display="flex" gap={1}>
                {[Facebook, Twitter, Instagram, LinkedIn, Google].map(
                  (Icon, i) => (
                    <IconButton key={i} size="small">
                      <Icon fontSize="small" />
                    </IconButton>
                  )
                )}
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">About Us</Typography>
              <Typography variant="body2">Services</Typography>
              <Typography variant="body2">Community</Typography>
              <Typography variant="body2">Testimonial</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Support
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Help Center</Typography>
              <Typography variant="body2">Tweet @ Us</Typography>
              <Typography variant="body2">Webinars</Typography>
              <Typography variant="body2">Feedback</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Links
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">Courses</Typography>
              <Typography variant="body2">Become Teacher</Typography>
              <Typography variant="body2">Service</Typography>
              <Typography variant="body2">All in One</Typography>
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 3 }}>
            <Typography variant="subtitle1" fontWeight="bold" mb={1}>
              Contact Us
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2">📞 (91) 98765 4321 54</Typography>
              <Typography variant="body2">📧 support@mail.com</Typography>
            </Stack>
          </Grid>
        </Grid>

        <FooterBottom>
          <Typography variant="body2">
            © Copyright by CodedUI. All rights reserved.
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={2} mt={1}>
            <Typography variant="body2">Privacy Policy</Typography>
            <Typography variant="body2">Terms of Use</Typography>
            <Typography variant="body2">Legal</Typography>
            <Typography variant="body2">Site Map</Typography>
          </Stack>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
