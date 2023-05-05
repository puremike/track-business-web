import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import "./footer.css";
import LogoIcon from "../assets/icons/logo.svg";
import FB from "../assets/icons/fb.png";
import TW from "../assets/icons/tw.png";
import YT from "../assets/icons/yt.png";
import GooglePlus from "../assets/icons/g+.png";
import LI from "../assets/icons/li.png";

const Footer = () => {
  return (
    <Box>
      <Stack
        className="footer-section"
        mt="5rem"
        p={{ xs: "1.3rem 1.3rem", xl: "2rem 8.75rem" }}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        gap={{ xs: "30px", sm: "35px" }}
      >
        <Stack gap="30px">
          <Link>
            <img src={LogoIcon} alt="logo" width="50px" />
          </Link>

          <Stack direction="row" gap="10px" className="style-icon">
            <Link to="https://www.instagram/scophee">
              <img src={FB} alt="facebook" width="50px" />
            </Link>
            <Link to="https://www.twitter.com/egbinolamichael">
              <img src={TW} alt="twitter" width="50px" />
            </Link>

            <Link to="#googleplus">
              <img src={GooglePlus} alt="google plus" width="50px" />
            </Link>

            <Link to="https://www.linkedin.com/in/michaelegbinola/">
              <img src={LI} alt="linkedin" width="50px" />
            </Link>

            <Link to="#youtube">
              <img src={YT} alt="youtube" width="50px" />
            </Link>
          </Stack>
          <Typography fontFamily="Space Grotesk">
            Want to receive our awesome stories?
          </Typography>

          <form className="form">
            <input type="email" placeholder="Enter your email" required></input>
            <button type="submit" className="footer-signup-btn">
              Subscribe
            </button>
          </form>
        </Stack>
        <Stack>
          <Typography fontFamily="Space Grotesk" fontWeight="bold">
            Email
          </Typography>
          <Typography fontFamily="Space Grotesk">
            michaelmarketing25@gmail.com
          </Typography>
        </Stack>
        <Stack gap="1.3rem">
          <Link to="#about" smooth>
            About us
          </Link>
          <Link to="#how" smooth>
            How it works
          </Link>
          <Link to="#pricing" smooth>
            Pricing
          </Link>
          <Link to="#faqs" smooth>
            FAQs
          </Link>
        </Stack>
        <Stack>
          <Typography fontFamily="Space Grotesk">Lead Generation</Typography>
          <Typography fontFamily="Space Grotesk">
            Customer Engagement
          </Typography>
          <Typography fontFamily="Space Grotesk">Customer Support</Typography>
          <Typography fontFamily="Space Grotesk">
            Help Center Articles
          </Typography>
          <Typography fontFamily="Space Grotesk">Outbound Messages</Typography>
        </Stack>
      </Stack>

      <Stack
        p={{ xs: "1.3rem 1.3rem", xl: "2rem 8.75rem" }}
        className="last-footer"
      >
        <Typography
          fontFamily="Space Grotesk"
          textAlign={{ xs: "left", md: "center" }}
        >
          © Puremike Design, all rights reserved.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
