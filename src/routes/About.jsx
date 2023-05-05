import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DotIcon from "../assets/icons/dot.png";
import WomanRolling from "../assets/images/womanglobe.png";
import "./about.css";

const About = () => {
  return (
    <Box
      id="about"
      mt="6.625rem"
      p={{ xs: "2rem 2rem", md: "2rem 5rem", lg: "0 8.75rem" }}
    >
      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        justifyContent="center"
        gap={{ xl: "11.75rem" }}
      >
        <img
          src={WomanRolling}
          alt="woman and globe"
          width={{ xs: "370px", sm: "500px" }}
          height="432px"
        />
        <Stack>
          <Typography
            mb="1.125rem"
            fontFamily="Space Grotesk"
            fontWeight={700}
            fontSize="1.5rem"
          >
            <span className="about-us">About Us</span>
          </Typography>
          <Typography
            fontFamily="Space Grotesk"
            fontWeight={500}
            fontSize={{ xs: "28px", sm: "3.75rem" }}
          >
            Faster, friendlier <br />
            feedback loops <br />
            make life easier.
          </Typography>
          <Typography
            fontFamily="Space Grotesk"
            fontSize="1.125rem"
            fontWeight="500"
            m="3.5rem 0 2.188rem 0"
          >
            Add a Viewer to your team so they can see everything you <br />{" "}
            share, or invite people to individual documents. It’s up to you.
            <br /> Stakeholders can check out designs in their web browser, test
            <br />
            prototypes and leave feedback for free.
          </Typography>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={DotIcon} alt="dot" />
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
            >
              Shared Cloud Libraries, for a single source of truth
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={DotIcon} alt="dot" />
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
            >
              Prototype previews for user testing and research
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={DotIcon} alt="dot" />
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
            >
              Easy organization with projects
            </Typography>
          </Stack>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={DotIcon} alt="dot" />
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
            >
              Free developer handoff, right inside the browser
            </Typography>
          </Stack>
          <Stack direction="row" gap="1.813rem" mb="3rem" alignItems="center">
            <img src={DotIcon} alt="dot" />
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
            >
              Two-factor authentication and SSO
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default About;
