import React from "react";
import { styled, Grid, List, ListItem, Typography } from "@mui/material";

const FeatureCard = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 0,
}));

const CardHeader = styled(Grid)(() => ({
  display: "flex",
  alignItems: "center",
  gap: "6px",
}));

const TabTitle = styled(Typography)(({ theme }) => ({
    fontSize: theme.typography.h5.fontSize,
    fontWeight: theme.typography.fontWeightMedium,
  }));

const CardImage = styled("img")(() => ({
  width: "35px",
  height: "35px",
}));

const StyledList = styled(List)(() => ({
  padding: "15px",
}));

const StyledListItem = styled(ListItem)(() => ({
  display: "list-item",
  listStyleType: "disc",
  padding: "2px 0",
  fontSize: "12px",
}));

const FeatureItemCard = ({ icon, title, p1, p2 }) => {
  return (
    <FeatureCard size={{ xs: 5.9, sm: 3.9 }}>
      <CardHeader>
        <CardImage src={icon} />
        <TabTitle>{title}</TabTitle>
      </CardHeader>
      <StyledList>
        <StyledListItem>{p1}</StyledListItem>
        <StyledListItem>{p2}</StyledListItem>
      </StyledList>
    </FeatureCard>
  );
};

export default FeatureItemCard;
