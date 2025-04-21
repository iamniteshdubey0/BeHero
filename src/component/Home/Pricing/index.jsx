import React from "react";
import { motion } from "framer-motion";
import { tokens } from "../../../utils/theme";
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  Card,
  CardContent,
  Button,
  Divider,
  styled,
} from "@mui/material";

const plans = [
  {
    title: "Individuals",
    price: "$0",
    per: "per month/user",
    description:
      "Good for individuals who are just starting out and simply want the essentials.",
    button: "Get started",
    features: [
      "1 user",
      "Unlimited calendars",
      "Unlimited event types",
      "Workflows",
      "Integrate with your favorite apps",
      "Accept payments via Stripe",
    ],
    note: "Free, forever",
    bg: "green",
  },
  {
    title: "Teams",
    price: "$12",
    per: "per month/user",
    description:
      "Highly recommended for small teams who seek to upgrade their time & perform.",
    button: "Get started",
    features: [
      "1 team",
      "Schedule meetings as a team",
      "Round-Robin, Fixed and Round-Robin",
      "Collective Events",
      "Advanced Routing Forms",
      "Team Workflows",
    ],
    note: "Free plan features, plus:",
    badge: "30 days free trial",
    bg: "secondary",
  },
  {
    title: "Enterprise",
    price: "$15k",
    per: "per year",
    description:
      "Robust scheduling for larger teams looking to have more control, privacy & security.",
    button: "Contact us",
    features: [
      "1 parent team and unlimited sub-teams",
      "Organization workflows",
      "Insights - analyze your booking data",
      "Active directory sync",
      "24/7 Email, Chat and Phone support",
      "Sync your HRIS tools",
    ],
    note: "Organization plan features, plus:",
    bg: "primary",
  },
];

// const PricingHeader = styled(Stack)(({theme})=>({

// }))

const PricingContainer = styled(Container)(({ theme }) => ({
  marginTop: "40px",
  padding: "40px 16px",
  backgroundColor: "linear-gradient(to bottom right, #f0f4ff, #ffffff)",
}));

const PricingHeader = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-end",
}));

const MainHeading = styled(Stack)(({ theme }) => ({
  fontSize: theme.typography.h1.fontSize,
  fontWeight: theme.typography.fontWeightBold,
}));

const SubHeading = styled(Stack)(({ theme }) => ({
  fontSize: theme.typography.body1.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color: "gray",
}));

const CardContainer = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
}));

const CardCol = styled(Grid)(({ theme }) => ({
  justifyContent: "center",
}));

const PriceCard = styled(Card)(({ theme, bg }) => ({
  borderRadius: "8px",
  boxShadow: theme.shadows[4],
  background:
    theme.palette.mode === "light"
      ? `linear-gradient(157deg, ${tokens("light")[bg][900]} 0%, ${
          tokens("light").white[800]
        } 44%)`
      : `linear-gradient(157deg, ${tokens("dark")[bg][600]} 0%, ${
          tokens("dark").darkPurple[500]
        } 80%)`,

  padding: "2px",
  position: "relative",
  overflow: "visible",
}));

const OfferBadge = styled(Typography)(({ theme }) => ({
  fontSize: "10px",
  background: "#000",
  color: "#fff",
  padding: "6px 12px",
  borderRadius: "8px",
  position: "absolute",
  top: "-10px",
  left: "32%",
}));

const CardUpper = styled(Stack)(() => ({}));

const CardLower = styled(Stack)(() => ({}));

const CardTitle = styled(Typography)(({ theme }) => ({}));
const CardPrice = styled(Typography)(({ theme }) => ({}));
const CardPerson = styled(Typography)(({ theme }) => ({}));
const CardSubtitle = styled(Typography)(({ theme }) => ({}));
const CardDescription = styled(Typography)(({ theme }) => ({}));

const MotionPriceCard = motion.create(PriceCard);

const PricingPlans = () => {
  return (
    <PricingContainer>
      <PricingHeader spacing={2} mb={6}>
        <MainHeading>
          Simple pricing based <br /> on your needs
        </MainHeading>
        <SubHeading>
          Discover a variety of our advanced <br /> features. Unlimited and free
          for individuals.
        </SubHeading>
      </PricingHeader>

      <CardContainer container spacing={4}>
        {plans.map((plan, index) => (
          <CardCol size={{ xs: 12, md: 4 }} key={plan.title}>
            <MotionPriceCard
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              bg={plan.bg}
            >
              <CardContent>
                <Stack spacing={2} alignItems="start">
                  {plan.badge && <OfferBadge>{plan.badge}</OfferBadge>}
                  <Typography variant="h5" fontWeight="medium">
                    {plan.title}
                  </Typography>
                  <Typography variant="body1" fontWeight="medium">
                    Starts at
                  </Typography>
                  <Typography variant="h2" fontWeight="bold">
                    {plan.price}
                    <Typography variant="body2" component="span" ml={1}>
                      {plan.per}
                    </Typography>
                  </Typography>
                  <Typography variant="body2" align="start">
                    {plan.description}
                  </Typography>
                  <Button
                    fullWidth
                    variant="outlined"
                    sx={{ borderRadius: 2, mt: 1, boxShadow: 3 }}
                  >
                    {plan.button}
                  </Button>

                  <Divider sx={{ width: "100%" }} />
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    align="center"
                    fontWeight="medium"
                  >
                    {plan.note}
                  </Typography>
                  <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        style={{ marginBottom: 8, fontSize: "0.8rem" }}
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                </Stack>
              </CardContent>
            </MotionPriceCard>
          </CardCol>
        ))}
      </CardContainer>
    </PricingContainer>
  );
};

export default PricingPlans;
