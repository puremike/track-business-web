import { React, useContext } from "react";
import { DisplayContexts } from "../contexts/DisplayContexts";
import { Box, Stack } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

import Logo from "../assets/icons/logo.svg";
import MenuIcon from "../assets/icons/menu.svg";

import "./navbar.css";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const { aside, setAside } = useContext(DisplayContexts);
  return (
    <Box id="home">
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        p={{ xs: "2.25rem 2rem", md: "2rem 5rem", lg: "2rem 8.75rem" }}
      >
        <Stack direction="row" alignItems="center" gap="2.5rem">
          <Link to="/">
            <img src={Logo} alt="logo" />
          </Link>

          <Stack
            direction="row"
            alignItems="center"
            gap="2.5rem"
            display={{ xs: "none", sm: "flex" }}
          >
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
        </Stack>
        <Stack direction="row" alignItems="center" gap="2.18rem">
          <Stack
            direction="row"
            alignItems="center"
            gap="4.18rem"
            display={{ xs: "none", sm: "flex" }}
          >
            <Link to="#login" smooth>
              Login
            </Link>
            <Link to="#auth" smooth className="signup-btn">
              Sign Up
            </Link>
          </Stack>

          <Stack display={{ xs: "block", sm: "none" }}>
            <img
              onClick={() => {
                if (aside === "none") {
                  setAside("block");
                } else if (aside === "block") {
                  setAside("none");
                }
              }}
              src={MenuIcon}
              className="menu-btn"
              alt="menu-icon"
              width="30px"
              height="30px"
            />
          </Stack>
        </Stack>
      </Stack>
      <Sidebar display={aside} />
    </Box>
  );
};

export default Navbar;
