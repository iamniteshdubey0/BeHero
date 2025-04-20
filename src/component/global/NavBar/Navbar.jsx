import React from "react";
import { useContext } from "react";
import { Container, Grid, styled } from "@mui/material";
import { tokens, ColorModeContext } from "../../../utils/theme";
import RoundButton from "../../Elements/RoundButton";
import { useTheme } from "@mui/material";
import DynamicIconButton from "../../Elements/styledIconButon";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "@fontsource/indie-flower";
import { NavbarData } from "../../../constants/UIConstant";

const NavContainer = styled(Container)(({ theme }) => ({
  position: "sticky",
  top: 20,
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).yellow[800]
      : tokens(theme.palette.mode).darkPurple[600],
  padding: "7px 20px",
  boxShadow: theme.shadows[1],
  height: "55px",
  zIndex: 100,
}));

const NavWrapper = styled(Grid)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

const NavLogo = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
}));

const Logo = styled("img")(({ theme }) => ({
  width: "40px",
  height: "40px",
  marginRight: theme.spacing(1),
}));

const LogoText = styled("span")(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  fontFamily: '"Indie Flower", cursive',
}));

const NavItems = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
}));

const NavItem = styled("a")(({ theme }) => ({
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 400,
  cursor: "pointer",
  textDecoration: "none",
  color:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[200]
      : tokens(theme.palette.mode).white[700],
  "&:hover": {
    color: theme.palette.secondary.main,
  },
}));

const NavActions = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(2),
}));

const Navbar = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <NavContainer maxWidth="lg" sx={{ my: 2, borderRadius: 12 }}>
      <NavWrapper container>
        <NavLogo size={{ xs: 4, md: 2 }}>
          <Logo src={NavbarData.logo} alt="Logo" />
          <LogoText>{NavbarData.name}</LogoText>
        </NavLogo>
        <NavItems size={{ xs: 0, md: 8 }}>
          {NavbarData.navlist.map((item, index) => (
            <NavItem key={index} href={item.link}>
              {item.title}
            </NavItem>
          ))}
        </NavItems>
        <NavActions size={{ xs: 0, md: 2 }}>
          <DynamicIconButton
            bgColor="secondary"
            onClick={() => {
              colorMode.toggleColorMode();
              setSelected((prevSelected) => !prevSelected);
            }}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeIcon fontSize="small" />
            ) : (
              <LightModeIcon fontSize="small" />
            )}
          </DynamicIconButton>
          <RoundButton
            label="signup"
            bgColor="secondary"
            icon={<LoginIcon />}
          />
        </NavActions>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
