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
import { motion } from "framer-motion";
import { tokens } from "../../../utils/theme";
import { FooterData } from "../../../constants/UIConstant";

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
    width: "100%",
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
      : tokens(theme.palette.mode).white[700],
}));

const NewsletterSmallText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[400]
      : tokens(theme.palette.mode).white[700],
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
  [theme.breakpoints.down("md")]: {
    flexDirection:'column',
    padding: theme.spacing(1, 0),
  },
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
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[100]
      : tokens(theme.palette.mode).white[600],
}));

const FooterHeaderText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  marginBottom: {xs:'4px', md:'16px'},
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[200]
      : tokens(theme.palette.mode).white[700],
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
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[100]
      : tokens(theme.palette.mode).white[600],
}));

const FooterLinksText = styled("a")(({ theme }) => ({
  textDecoration: "none",
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[200]
      : tokens(theme.palette.mode).white[700],
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
              {FooterData.newsletter.heading}
            </NewsletterHeading>
            <NewsletterText>{FooterData.newsletter.subheading}</NewsletterText>
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
              {FooterData.newsletter.text} <a href="#">here</a>.
            </NewsletterSmallText>
          </NewsletterContentBox>
        </NewsletterSection>

        <Grid container spacing={2} maxWidth="md">
          <Grid size={{ xs: 12, md: 4 }} pr={2}>
            <FooterPrimaryBox>
              <FooterPrimaryHeader>
                <FooterPrimaryHeaderLogo
                  src={FooterData.main.logo}
                  alt={FooterData.main.title}
                />
                <HeaderLogoTitle>{FooterData.main.title}</HeaderLogoTitle>
              </FooterPrimaryHeader>
              <FooterHeaderText>{FooterData.main.text}</FooterHeaderText>
              <FooterPrimarySocialBox>
                {FooterData.main.socials.map((item, i) => (
                  <IconButton key={i} size="small" color="textSecondary">
                    {item.icon}
                  </IconButton>
                ))}
              </FooterPrimarySocialBox>
            </FooterPrimaryBox>
          </Grid>

          {FooterData.main.footerLinks.map((item, index) => (
            <FooterLinksBox key={index} size={{ xs: 6, md: 2 }}>
              <FooterLinksHeading>{item.name}</FooterLinksHeading>
              <Stack spacing={1}>
                {item.links.map((item, index) => (
                  <FooterLinksText key={index} href={item.link}>
                    {item.label}
                  </FooterLinksText>
                ))}
              </Stack>
            </FooterLinksBox>
          ))}

          <Grid size={{ xs: 6, md: 2 }}>
            <FooterLinksHeading>
              {FooterData.main.contact.label}
            </FooterLinksHeading>
            <Stack spacing={1}>
              <FooterLinksText>{FooterData.main.contact.phone}</FooterLinksText>
              <FooterLinksText>{FooterData.main.contact.email}</FooterLinksText>
            </Stack>
          </Grid>
        </Grid>

        <FooterBottom>
          <FooterHeaderText variant="body2">
            {FooterData.footerBottom.copyright}
          </FooterHeaderText>
          <Stack direction="row" justifyContent="center" spacing={2} mt={1}>
            {FooterData.footerBottom.links.map((item, index) => (
              <FooterLinksText href={item.link} key={index}>
                {item.label}
              </FooterLinksText>
            ))}
          </Stack>
        </FooterBottom>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
