import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import "./footer.css";
import LogoIcon from "../assets/icons/logo.svg";
import FB from "../assets/icons/fb.png";
import TI from "../assets/icons/tw.png";
import YT from "../assets/icons/yt.png";
import GooglePlus from "../assets/icons/g+.png";
import LI from "../assets/icons/li.png";

const Footer = () => {
  return (
    <Box>
      <Stack className="footer-section">
        <Stack>
          <img src={LogoIcon} alt="logo" width="50px" />
          <Stack></Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Footer;
