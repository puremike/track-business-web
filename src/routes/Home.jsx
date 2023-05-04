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

const Home = () => {
  return (
    <div>
      <Box mt="5rem" p="0 2rem">
        <Stack className="hero-section" direction="row">
          <Stack>
            <Typography
              fontFamily="Space Grotesk"
              fontWeight={500}
              fontSize="4.375rem"
              lineHeight="5rem"
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
            width="550px"
            height="580px"
          />
        </Stack>
      </Box>
      <About />
    </div>
  );
};

export default Home;
