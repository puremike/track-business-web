import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import Logo from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

import "./navbar.css";

const Navbar = () => {
  return (
    <Box>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p="2.25rem 2rem"
      >
        <Stack direction="row" alignItems="center" gap="2.5rem">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <Link to="#about" smooth>
            About us
          </Link>
          <Link to="how" smooth>
            How it works
          </Link>
          <Link to="#pricing" smooth>
            Pricing
          </Link>
          <Link to="faqs" smooth>
            FAQs
          </Link>
        </Stack>
        <Stack direction="row" alignItems="center" gap="4.18rem">
          <Link to="#about" smooth>
            Login
          </Link>
          <Link to="#about" smooth className="signup-btn">
            Sign Up
          </Link>
          <Stack display={{ xl: "none" }}>
            <img
              src={MenuIcon}
              className="menu-btn"
              alt="menu-icon"
              width="30px"
              height="30px"
            />
          </Stack>
        </Stack>
      </Stack>
      {/* SideBar Component */}
      <Box className="sidebar-menu" p="2rem 0" display="none">
        <Stack>
          <Stack direction="column" alignItems="center">
            <Stack
              direction="column"
              alignItems="center"
              gap="2.5rem"
              className="sidebar"
            >
              <Link to="#about" smooth>
                About us
              </Link>
              <Link to="how" smooth>
                How it works
              </Link>
              <Link to="#pricing" smooth>
                Pricing
              </Link>
              <Link to="faqs" smooth>
                FAQs
              </Link>
            </Stack>
            <Stack
              direction="column"
              alignItems="center"
              gap="2.2rem"
              mt="2rem"
            >
              <Link to="#about" smooth className="sidebar">
                Login
              </Link>
              <Link to="#about" smooth className="signup-btn">
                Sign Up
              </Link>
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Navbar;
