import { useState } from "react";
import {
  AppBar,
  Avatar,
  Toolbar,
  Link,
  Switch,
  Box,
  IconButton,
  Drawer,
  List,
  ListItemText,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import profile from "/assets/images/profile.jpg";

const pages = [
  { name: "About", path: "/about" },
  { name: "Work", path: "/work" },
  { name: "Education", path: "/education" },
  { name: "Downloads", path: "/downloads" },
  { name: "Contact", path: "/contact" },
];

const Header: React.FC<{
  toggleTheme: () => void;
  isDarkMode: boolean;
}> = ({ toggleTheme, isDarkMode }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
    <AppBar
      position="static"
      sx={{
        position: "relative",
        backgroundColor: isDarkMode ? "background.paper" : "primary.main",
        color: isDarkMode ? "text.primary" : "primary.contrastText",
      }}
    >
      {/* Theme Toggler */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          right: 0,
          padding: 1,
          zIndex: 10,
        }}
      >
        <Switch checked={isDarkMode} onChange={toggleTheme} color="default" />
      </Box>

      <Toolbar
        sx={{
          flexDirection: "column",
          padding: 2,
          maxWidth: "1100px",
          width: "100%",
          margin: "auto",
          alignItems: "center",
        }}
      >
        {/* Profile Picture */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <NavLink to="/about" style={{ textDecoration: "none" }}>
            <Avatar
              src={profile}
              alt="Profile Picture"
              sx={{
                width: 120,
                height: 120,
                cursor: "pointer",
                transition: "transform 0.2s ease-in-out",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            />
          </NavLink>
        </Box>

        {/* Hamburger Menu for Small Screens */}
        <Box
          sx={{
            display: { xs: "flex", md: "none" },
            width: "100%",
            justifyContent: "center",
            mb: 1,
          }}
        >
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="top" open={drawerOpen} onClose={toggleDrawer(false)}>
            <Box
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <List
                sx={{
                  backgroundColor: isDarkMode
                    ? "background.paper"
                    : "primary.main",
                }}
              >
                {pages.map((page) => (
                  <ListItemButton
                    key={page.name}
                    component={NavLink}
                    to={page.path}
                    sx={{
                      textAlign: "center",
                      color: isDarkMode ? "text.primary" : "primary.light",
                      "&.active": {
                        color: isDarkMode ? "secondary.main" : "secondary.dark",
                      },
                    }}
                  >
                    <ListItemText
                      primary={page.name}
                      primaryTypographyProps={{
                        variant: "body2",
                        fontSize: "large",
                      }}
                    />
                  </ListItemButton>
                ))}
              </List>
            </Box>
          </Drawer>
        </Box>

        {/* Navigation Links for Larger Screens */}
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "center",
            gap: 3,
            flexWrap: "wrap",
          }}
        >
          {pages.map((page) => (
            <Link
              key={page.name}
              variant="h6"
              component={NavLink}
              to={page.path}
              sx={{
                color: isDarkMode ? "secondary.dark" : "primary.light",
                textDecoration: "none",
                ":hover": {
                  color: isDarkMode ? "primary.light" : "secondary.light",
                },
                "&.active": {
                  color: isDarkMode ? "secondary.main" : "primary.dark",
                },
              }}
            >
              {page.name}
            </Link>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
