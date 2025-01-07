import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import { GitHub, Instagram, LinkedIn, Mail } from "@mui/icons-material";

const Footer: React.FC = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 5,
        }}
      >
        <Box>
          <Box sx={{ display: "flex", gap: 5 }}>
            <IconButton
              href="https://www.linkedin.com/in/michaelbyrskog/"
              target="_blank"
              color="inherit"
            >
              <LinkedIn />
            </IconButton>
            <IconButton
              href="https://github.com/mbyrskog"
              target="_blank"
              color="inherit"
            >
              <GitHub />
            </IconButton>

            <IconButton
              href="https://www.instagram.com/michaelbyrskog/"
              target="_blank"
              color="inherit"
            >
              <Instagram />
            </IconButton>
            <IconButton href="mailto:mbyrskog@hotmail.com" color="inherit">
              <Mail />
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
