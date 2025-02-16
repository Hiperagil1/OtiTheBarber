import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Box,
  Container,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Switch,
  styled
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { FiSearch, FiMenu } from "react-icons/fi";
import { BsSunFill, BsMoonFill } from "react-icons/bs";

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  background: "transparent",
  boxShadow: "none",
  position: "relative"
}));

const HeaderContainer = styled(Box)(({ theme }) => ({
  backgroundImage: "url(https://t3.ftcdn.net/jpg/03/12/39/56/360_F_312395691_JwZk1L4P2dPbuqS32IApNipW95v20NnA.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)", // Gradient de la transparent la opac
  }
}));

const Logo = styled("img")({
  width: "120px",
  height: "60px",
  objectFit: "contain",
  cursor: "pointer"
});

const NavLink = styled(Typography)(({ theme, active }) => ({
  margin: "0 20px",
  cursor: "pointer",
  color: "#fff",
  position: "relative",
  "&:after": {
    content: '""',
    position: "absolute",
    width: active ? "100%" : "0",
    height: "2px",
    bottom: "-5px",
    left: 0,
    backgroundColor: "#fff",
    transition: "width 0.3s ease"
  },
  "&:hover:after": {
    width: "100%"
  }
}));

const SearchBox = styled(InputBase)(({ theme }) => ({
  color: "#fff",
  marginLeft: "20px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: "40px",
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      "&:focus": {
        width: "250px"
      }
    }
  }
}));

const FitnessHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("Home");
  const [darkMode, setDarkMode] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const navItems = ["Home", "About", "Services", "Contact"];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavClick = (item) => {
    setActiveLink(item);
    if (isMobile) {
      handleDrawerToggle();
    }
  };

  const drawer = (
    <List>
      {navItems.map((item) => (
        <ListItem button key={item} onClick={() => handleNavClick(item)}>
          <ListItemText
            primary={item}
            sx={{ color: activeLink === item ? "primary.main" : "text.primary" }}
          />
        </ListItem>
      ))}
    </List>
  );

  return (
    <HeaderContainer>
      <StyledAppBar>
        <Container maxWidth="xl">
          <Toolbar sx={{ justifyContent: "space-between", alignItems: "center" }}>
            {/* Înlocuim logo-ul cu textul "OtiTheBarber" */}
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold" }}>
              OtiTheBarber
            </Typography>
  
            {!isMobile && (
                <Box
  sx={{
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center"
  }}
>
  {navItems.map((item) => (
    <NavLink
      key={item}
      variant="h6"
      active={activeLink === item}
      onClick={() => handleNavClick(item)}
    >
      {item}
    </NavLink>
  ))}
</Box>

              
            )}
  
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {isMobile && (
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  sx={{ ml: 2 }}
                >
                  <FiMenu />
                </IconButton>
              )}
            </Box>
          </Toolbar>
  
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              position: "relative",
              zIndex: 1
            }}
          >
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: "#fff",
                fontWeight: "bold",
                textShadow: "2px 2px 4px rgba(0,0,0,0.5)",
                mb: 4
              }}
            >
              Transform Your Look, Elevate Your Style with Us
            </Typography>
          </Box>
        </Container>
      </StyledAppBar>
  
      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
      >
        {drawer}
      </Drawer>
    </HeaderContainer>
  );
  
};

export default FitnessHeader;