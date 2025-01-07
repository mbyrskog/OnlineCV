import { useState } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import PublicLayout from "./Layouts/PublicLayout";
import About from "./Routes/About";
import Education from "./Routes/Education/Education";
import Contact from "./Routes/Contact";
import Work from "./Routes/Work/Work";
import { darkTheme, lightTheme } from "./Layouts/Theme";
import Downloads from "./Routes/Downloads/Downloads";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CssBaseline />
      <Routes>
        <Route
          path="/"
          element={
            <PublicLayout toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
          }
        >
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="work" element={<Work />} />
          <Route path="education" element={<Education />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App;
