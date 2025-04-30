import React from "react";
import {
  Box,
  Grid,
  Typography,
  TextField,
  Button,
  Stack,
  Paper,
  styled,
  Container,
} from "@mui/material";
import { motion } from "framer-motion";
import { tokens } from "../../../utils/theme";
import { ContactData } from "../../../constants/UIConstant";

const ContactContainer = styled(Container)(({ theme }) => ({
  padding: "40px 40px",
  background:
    theme.palette.mode === "light"
      ? `linear-gradient(to bottom right, ${
          tokens(theme.palette.mode).green[900]
        }, ${tokens(theme.palette.mode).white[700]})`
      : `linear-gradient(to bottom right, ${
          tokens(theme.palette.mode).darkPurple[600]
        }, ${tokens(theme.palette.mode).darkPurple[800]})`,
}));

const ContactHeader = styled(Stack)(({}) => ({
  textAlign: "center",
  marginBottom: "24px",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h4.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
}));

const ContactFormContainer = styled(Grid)(({}) => ({
  justifyContent: "center",
}));

const FormBox = styled(Paper)(({theme}) => ({
  padding: "2px",
  borderRadius: "16px",
  overflow: "hidden",
  display: "flex",
  flexDirection: { xs: "column", md: "row" },
  backgroundColor:
  theme.palette.mode === "light"
    ? tokens(theme.palette.mode).white[600]
    : tokens(theme.palette.mode).darkPurple[800],

}));

const ContactInfoBox = styled(Box)(({ theme }) => ({
  backgroundColor: tokens(theme.palette.mode).green[600],
  color: "white",
  padding: "16px",
  flex: 1,
  borderRadius: "16px",
}));

const ContactInfoHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const ContactInfoText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.body2.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
  marginBottom: "12px",
}));

const ContactInfoMainText = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightRegular,
}));

const ContactFromBox = styled(Box)(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[600]
      : tokens(theme.palette.mode).darkPurple[500],
  padding: "16px",
  flex: 2,
}));

const TextFieldLabel = styled(Box)(({ theme }) => ({
  fontSize: theme.typography.caption.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const TextFieldStyled = styled(TextField)(({ theme }) => ({
  marginTop: "4px",
  borderBottom: "1px solid #00bfa5",
  paddingBottom: "8px",
}));

const ContactSection = () => {
  return (
    <ContactContainer maxWidth="xl">
      <ContactHeader spacing={2}>
        <Heading>Get In Touch</Heading>
        <Text color="text.secondary">
          We’ll create high-quality linkable content and build at least 40
          high-authority links to each asset, <br /> paving the way for you to
          grow your rankings, improve brand.
        </Text>
      </ContactHeader>

      <ContactFormContainer container justifyContent="center">
        <Grid
          size={{ xs: 12, md: 10 }}
          component={motion.div}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <FormBox elevation={3}>
            {/* Contact Info */}
            <ContactInfoBox>
              <ContactInfoHeading gutterBottom>
                Contact Information
              </ContactInfoHeading>
              <ContactInfoText>
                We’ll create high-quality linkable content and build at least 40
                high-authority.
              </ContactInfoText>
              <Stack spacing={2}>
                {ContactData &&
                  ContactData.info.mode.map((item, index) => (
                    <Stack
                      direction="row"
                      spacing={1}
                      alignItems="center"
                      key={index}
                    >
                      {item.icon}
                      <ContactInfoMainText>{item.text}</ContactInfoMainText>
                    </Stack>
                  ))}
              </Stack>
            </ContactInfoBox>

            {/* Contact Form */}
            <ContactFromBox>
              <Grid container spacing={2}>
                {ContactData &&
                  ContactData.ui.map((item, index) => (
                    <Grid
                      size={{
                        xs: 12,
                        md: ["message", "subject"].includes(item.id) ? 12 : 6,
                      }}
                      key={index}
                    >
                      <TextFieldLabel>{item.label}</TextFieldLabel>
                      <TextFieldStyled
                        variant="standard"
                        fullWidth
                        multiline={item.id === "message"}
                        rows={item.id === "message" ? 3 : undefined}
                        defaultValue={item.defaultValue}
                        InputProps={{ disableUnderline: true }}
                      />
                    </Grid>
                  ))}
                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    sx={{ backgroundColor: "#00bfa5", borderRadius: 2 }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </ContactFromBox>
          </FormBox>
        </Grid>
      </ContactFormContainer>
    </ContactContainer>
  );
};

export default ContactSection;
