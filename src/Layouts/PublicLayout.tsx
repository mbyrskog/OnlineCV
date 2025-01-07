import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function PublicLayout({
  toggleTheme,
  isDarkMode,
}: {
  toggleTheme: () => void;
  isDarkMode: boolean;
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
      <Box
        sx={{
          flex: 1,
          maxWidth: "1100px",
          width: "100%",
          padding: 5,
          margin: "auto",
        }}
      >
        <Outlet />
      </Box>
      <Footer />
    </Box>
  );
}

export default PublicLayout;
