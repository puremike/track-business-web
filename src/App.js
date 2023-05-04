import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./routes/Home";
import About from "./routes/About";
import HowItWorks from "./routes/HowItWorks";
import Pricing from "./routes/Pricing";
import FAQs from "./routes/FAQs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
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
  );
};

export default App;
