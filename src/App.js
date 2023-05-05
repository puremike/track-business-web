import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material";
import Home from "./routes/Home";
import About from "./routes/About";
import HowItWorks from "./routes/HowItWorks";
import Pricing from "./routes/Pricing";
import FAQs from "./routes/FAQs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 1024,
      md: 1100,
      lg: 1400,
      xl: 2000,
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="#about" element={<About />} />
            <Route path="#how" element={<HowItWorks />} />
            <Route path="#pricing" element={<Pricing />} />
            <Route path="#faqs" element={<FAQs />} />
          </Route>
        </Routes>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default App;
