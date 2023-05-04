import React from "react";
import { Box, Stack } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";

const Sidebar = ({ display }) => {
  return (
    <div>
      <Box className="sidebar-menu" p="2rem 0" display={display}>
        <Stack>
          <Stack direction="column" alignItems="center">
            <Stack
              direction="column"
              alignItems="center"
              gap="1.3rem"
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
              gap="1.3rem"
              mt="1.3rem"
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
    </div>
  );
};

export default Sidebar;
