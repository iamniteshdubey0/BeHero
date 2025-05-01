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
import { tokens } from "../../../utils/theme";

const FooterContainer = styled("footer")(({ theme }) => ({
  background:
    theme.palette.mode === "light"
      ? `linear-gradient(157deg, ${tokens("light").white[800]}, ${
          tokens("light").white[600]
        })`
      : `linear-gradient(to bottom right, ${
          tokens(theme.palette.mode).darkPurple[600]
        }, ${tokens(theme.palette.mode).darkPurple[800]})`,
  paddingTop: theme.spacing(10),
  color: "#000",
}));

const NewsletterSection = styled(Box)(({ theme }) => ({
  width: "75%",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).primary[600]
      : tokens(theme.palette.mode).primary[600],
  color: "#fff",
  borderRadius: "12px",
  padding: theme.spacing(4),
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

const NewsletterImgBox = styled(Box)(() => ({
  maxWidth: 200,
  mt: { xs: 4, md: 0 },
}));

const NewsletterContentBox = styled(Box)(() => ({}));

const NewsletterHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h5.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: "8px",
}));

const NewsletterText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: "15px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[400]
      : tokens(theme.palette.mode).white[800],
}));

const NewsletterSmallText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[400]
      : tokens(theme.palette.mode).white[800],
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
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(3, 0),
  borderTop: "1px solid #eee",
  marginTop: theme.spacing(4),
  fontSize: 12,
}));

const FooterPrimaryBox = styled(Box)(() => ({}));

const FooterPrimaryHeader = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  gap: 1,
  marginBottom: "8px",
}));

const FooterPrimaryHeaderLogo = styled("img")(() => ({
  width: "24px",
  height: "24px",
}));

const HeaderLogoTitle = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: "8px",
}));

const FooterHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: "15px",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[200]
      : tokens(theme.palette.mode).white[900],
}));

const FooterPrimarySocialBox = styled(Box)(() => ({
  marginTop: "16px",
  display: "flex",
  gap: 8,
}));

const FooterLinksBox = styled(Grid)(() => ({}));

const FooterLinksHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.subtitle1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  marginBottom: "4px",
}));

const FooterLinksText = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[200]
      : tokens(theme.palette.mode).white[900],
  cursor: "pointer",
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", flexDirection: "column" }}
      >
        <NewsletterSection
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <NewsletterImgBox component="img" src="/vacuum.png" alt="vacuum" />
          <NewsletterContentBox>
            <NewsletterHeading>
              Subscribe to our newsletter to get updates <br /> to our latest
              collections
            </NewsletterHeading>
            <NewsletterText>
              Get 20% off on your first order just by subscribing to our
              newsletter
            </NewsletterText>
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
                sx={{ ml: 1, borderRadius: 4 }}
              >
                Subscribe
              </Button>
            </InputWrapper>
            <NewsletterSmallText variant="caption" mt={1} display="block">
              You will be able to unsubscribe at any time. Read our privacy
              policy <a href="#">here</a>.
            </NewsletterSmallText>
          </NewsletterContentBox>
        </NewsletterSection>

        <Grid container spacing={2} maxWidth="md">
          <Grid size={{ xs: 12, md: 4 }} pr={2}>
            <FooterPrimaryBox>
              <FooterPrimaryHeader>
                <FooterPrimaryHeaderLogo src="/logo.svg" alt="logo" />
                <HeaderLogoTitle>Stay Clean</HeaderLogoTitle>
              </FooterPrimaryHeader>
              <FooterHeaderText>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit et
                aliquam, purus sit amet luctus venenatis.
              </FooterHeaderText>
              <FooterPrimarySocialBox>
                {[Facebook, Twitter, Instagram, LinkedIn, Google].map(
                  (Icon, i) => (
                    <IconButton key={i} size="small">
                      <Icon fontSize="small" />
                    </IconButton>
                  )
                )}
              </FooterPrimarySocialBox>
            </FooterPrimaryBox>
          </Grid>

          <FooterLinksBox size={{ xs: 12, md: 2 }}>
            <FooterLinksHeading variant="subtitle1" fontWeight="bold" mb={1}>
              Company
            </FooterLinksHeading>
            <Stack spacing={1}>
              <FooterLinksText href="#">About Us</FooterLinksText>
              <FooterLinksText>Services</FooterLinksText>
              <FooterLinksText>Community</FooterLinksText>
              <FooterLinksText>Testimonial</FooterLinksText>
            </Stack>
          </FooterLinksBox>

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

          <Grid size={{ xs: 12, md: 2 }}>
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
          <FooterHeaderText variant="body2">
            © Copyright by CodedUI. All rights reserved.
          </FooterHeaderText>
          <Stack direction="row" justifyContent="center" spacing={2} mt={1}>
            <FooterLinksText variant="body2">Privacy Policy</FooterLinksText>
            <FooterLinksText variant="body2">Terms of Use</FooterLinksText>
            <FooterLinksText variant="body2">Legal</FooterLinksText>
            <FooterLinksText variant="body2">Site Map</FooterLinksText>
          </Stack>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
