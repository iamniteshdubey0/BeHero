import React, { useState } from "react";
import { useContext } from "react";
import { Container, Grid, styled, useMediaQuery } from "@mui/material";
import { tokens, ColorModeContext } from "../../../utils/theme";
import RoundButton from "../../Elements/RoundButton";
import { useTheme } from "@mui/material";
import DynamicIconButton from "../../Elements/styledIconButon";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/indie-flower";
import { NavbarData } from "../../../constants/UIConstant";

const NavContainer = styled(Container)(({ theme, togglemenu }) => ({
  position: "sticky",
  top: 20,
  marginTop: "16px",
  borderRadius: "48px",
  backgroundColor:
    theme.palette.mode === "light"
      ? tokens(theme.palette.mode).white[600]
      : tokens(theme.palette.mode).darkPurple[600],
  padding: "7px 20px",
  boxShadow: theme.shadows[1],
  height: "55px",
  zIndex: 100,
  transition: "all 0.1s",
  [theme.breakpoints.down("md")]: {
    top: 0,
    marginTop: "0px",
    borderRadius: "0px",
    height: togglemenu ? "50vh" : "",
    position: "absolute",
  },
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
  [theme.breakpoints.down("md")]: {
    justifyContent: "flex-start",
  },
}));

const Logo = styled("img")(({ theme }) => ({
  width: "40px",
  height: "40px",
  marginRight: theme.spacing(1),
  [theme.breakpoints.down("md")]: {
    width: "24px",
    height: "24px",
  },
}));

const LogoText = styled("span")(({ theme }) => ({
  fontSize: theme.typography.h3.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  fontFamily: '"Indie Flower", cursive',
}));

const NavItems = styled(Grid)(({ theme, togglemenu }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  transition: "all 0.1s",
  [theme.breakpoints.down("md")]: {
    display: togglemenu ? "flex" : "none",
    position: "absolute",
    top: "80px",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
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
  [theme.breakpoints.down("md")]: {
    fontSize: "22px",
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
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavContainer maxWidth="lg" togglemenu={toggleMenu}>
      <NavWrapper container>
        <NavLogo size={{ xs: 4, md: 2 }}>
          <Logo src={NavbarData.logo} alt="Logo" />
          <LogoText>{NavbarData.name}</LogoText>
        </NavLogo>
        <NavItems size={{ xs: 11, md: 8 }} togglemenu={toggleMenu}>
          {NavbarData.navlist.map((item, index) => (
            <NavItem key={index} href={item.link}>
              {item.title}
            </NavItem>
          ))}
        </NavItems>
        <NavActions size={{ xs: 2, md: 2 }}>
          {isMobile && (
            <DynamicIconButton
              bgColor="secondary"
              onClick={() => {
                setToggleMenu((prevSelected) => !prevSelected);
              }}
            >
              {!toggleMenu ? (
                <MenuIcon fontSize="small" />
              ) : (
                <CloseIcon fontSize="small" />
              )}
            </DynamicIconButton>
          )}
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
