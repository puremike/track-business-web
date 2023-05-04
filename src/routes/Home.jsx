import React from "react";
import Navbar from "../components/Navbar";
import { Box, Stack, Typography } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import LadderImage from "../assets/images/ladder.png";
import Visa from "../assets/images/visa.png";
import MCard from "../assets/images/mastercard.png";
import PayPalImage from "../assets/images/paypal.png";
import "./home.css";
import About from "./About";
import HowItWorks from "./HowItWorks";
import Pricing from "./Pricing";
import FAQs from "./FAQs";

const Home = () => {
  return (
    <div>
      <Box
        mt={{ xs: "1rem", sm: "5rem" }}
        p={{ xs: "0 2rem", md: "0 5rem", lg: "0 8.75rem" }}
        alignContent="center"
      >
        <Stack
          className="hero-section"
          direction={{ xs: "column", sm: "row" }}
          gap={{ xl: "21.625rem" }}
          justifyContent="center"
        >
          <Stack>
            <Typography
              fontFamily="Space Grotesk"
              fontWeight={500}
              fontSize={{ xs: "3rem", md: "4.7rem", lg: "4.9rem" }}
            >
              Always Track <br /> & Analyze <br /> Your Business <br />{" "}
              Statistics
              <br />
              To Succeed.
            </Typography>
            <Typography
              fontFamily="Space Grotesk"
              fontWeight="500"
              fontSize="1.125rem"
              m="1.25rem 0 2.5rem 0"
            >
              A better way to manage your sales, team, clients & marketing{" "}
              <br /> - on a single platform. Powerful, affordable & easy.
            </Typography>

            <form className="form">
              <input
                type="email"
                placeholder="Enter your email"
                required
              ></input>
              <button type="submit" className="hero-signup-btn">
                Get Started
              </button>
            </form>
            <Stack direction="row" gap="2rem" mt="5rem">
              <img src={Visa} alt="visa" width="86px" height="40px" />
              <img src={MCard} alt="mastercard" width="60px" height="40px" />
              <img src={PayPalImage} alt="paypal" width="120px" height="40px" />
            </Stack>
          </Stack>
          <img
            src={LadderImage}
            alt="man climbing a ladder"
            width={{ xs: "330px", sm: "550px" }}
            height="580px"
          />
        </Stack>
      </Box>
      <About />
      <HowItWorks />
      <Pricing />
      <FAQs />
    </div>
  );
};

export default Home;
