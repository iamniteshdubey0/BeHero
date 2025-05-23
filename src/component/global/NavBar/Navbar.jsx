import React, { useState, useContext } from "react";
import {
  Container,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../../utils/theme";
import RoundButton from "../../Elements/RoundButton";
import DynamicIconButton from "../../Elements/styledIconButon";
import LoginIcon from "@mui/icons-material/Login";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import "@fontsource/indie-flower";
import { NavbarData } from "../../../constants/UIConstant";

// Styled Components
const NavContainer = styled(Container, {
  shouldForwardProp: (prop) => prop !== "togglemenu",
})(({ theme, togglemenu }) => ({
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
  zIndex: 100,
  transition: "all 0.2s ease-in-out",
  [theme.breakpoints.down("md")]: {
    top: 0,
    marginTop: 0,
    borderRadius: 0,
    height: togglemenu ? "50vh" : "55px",
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
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const NavItems = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "togglemenu",
})(({ theme, togglemenu }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: theme.spacing(3),
  transition: "all 0.2s ease-in-out",
  [theme.breakpoints.down("md")]: {
    display: togglemenu ? "flex" : "none",
    position: "absolute",
    top: "80px",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const NavItem = styled("a")(({ theme }) => ({
  textTransform: "capitalize",
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
  [theme.breakpoints.up("md")]: {
    fontSize: "14px",
  },
}));

const NavActions = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: theme.spacing(2),
}));

// Component
const Navbar = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <NavContainer maxWidth="lg" togglemenu={toggleMenu}>
      <NavWrapper container>
        <NavLogo size={{ xs: 2, sm: 4, md: 2 }}>
          <Logo src={NavbarData.logo} alt="Logo" />
          <LogoText>{NavbarData.name}</LogoText>
        </NavLogo>

        <NavItems size={{ xs: 12, md: 7 }} togglemenu={toggleMenu}>
          {NavbarData.navlist.map((item, index) => (
            <NavItem key={index} href={item.link}>
              {item.title}
            </NavItem>
          ))}
          {isMobile && (
            <RoundButton
              label="signup"
              bgColor="secondary"
              icon={<LoginIcon />}
            />
          )}
        </NavItems>

        <NavActions size={{ xs: 3, sm: 4, md: 3 }}>
          {isMobile && (
            <DynamicIconButton
              bgColor="secondary"
              onClick={() => setToggleMenu((prev) => !prev)}
            >
              {toggleMenu ? (
                <CloseIcon fontSize="small" />
              ) : (
                <MenuIcon fontSize="small" />
              )}
            </DynamicIconButton>
          )}
          <DynamicIconButton
            bgColor="secondary"
            onClick={colorMode.toggleColorMode}
          >
            {theme.palette.mode === "light" ? (
              <DarkModeIcon fontSize="small" />
            ) : (
              <LightModeIcon fontSize="small" />
            )}
          </DynamicIconButton>
          {!isMobile && (
            <RoundButton
              label="signup"
              bgColor="secondary"
              icon={<LoginIcon />}
            />
          )}
        </NavActions>
      </NavWrapper>
    </NavContainer>
  );
};

export default Navbar;
