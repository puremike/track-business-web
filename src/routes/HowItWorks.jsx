import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import WomanSpanner from "../assets/images/womanspanner.png";
import Icon1 from "../assets/icons/icon_1.png";
import Icon2 from "../assets/icons/icon_2.png";
import Icon3 from "../assets/icons/icon_3.png";
import Icon4 from "../assets/icons/icon_4.png";

import "./howitworks.css";

const HowItWorks = () => {
  return (
    <Box
      id="how"
      sx={{
        mt: "6.625rem",
        p: { xs: "2rem 2rem", md: "2rem 5rem", lg: "2rem 8.75rem" },
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="center"
        gap={{ xl: "17rem" }}
      >
        <Stack>
          <Typography
            mb="1.125rem"
            fontFamily="Space Grotesk"
            fontWeight={700}
            fontSize="1.5rem"
          >
            <span className="how-it-works">How it works</span>
          </Typography>
          <Typography
            fontFamily="Space Grotesk"
            fontWeight={500}
            fontSize={{ xs: "28px", sm: "3.75rem" }}
          >
            Building the best <br />
            space for <br />
            collaboration.
          </Typography>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={Icon1} alt="icon" width="100px" height="100px" />
            <Stack gap="1rem" mt="6.5rem">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.75rem"
                fontWeight="500"
              >
                Shared Cloud Libraries, for a single source of truth
              </Typography>
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                textAlign="justify"
              >
                Navigate to the Your work panel in the left sidebar. <br />
                Select the library you want to share.
                <br /> Select the Share icon in the upper right to share the
                library.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={Icon2} alt="icon" width="100px" height="100px" />
            <Stack gap="1rem">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.75rem"
                fontWeight="500"
              >
                Free developer handoff, right inside
              </Typography>
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                textAlign="justify"
              >
                Cloud Inspector makes it easy for developers to get <br /> the
                information they need to turn pixels into code — <br />
                all in the browser and, most importantly, for free.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={Icon3} alt="icon" width="100px" height="100px" />
            <Stack gap="1rem">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.75rem"
                fontWeight="500"
              >
                Real-time collaborative editing
              </Typography>
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                textAlign="justify"
              >
                Room Service helps you build real-time <br /> collaborative
                features. Add real-time data sync! Let <br /> users edit the
                same data at the same time.
              </Typography>
            </Stack>
          </Stack>
          <Stack
            direction="row"
            gap="1.813rem"
            mb="1.625rem"
            alignItems="center"
          >
            <img src={Icon4} alt="icon" width="100px" height="100px" />
            <Stack gap="1rem">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.75rem"
                fontWeight="500"
              >
                Integrations with the Cloud API
              </Typography>
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                textAlign="justify"
              >
                Unlocking that value requires an iPaaS that delivers <br /> the
                transformative power of APIs and integration.
              </Typography>
            </Stack>
          </Stack>
        </Stack>
        <img
          src={WomanSpanner}
          alt="woman and globe"
          width={{ xs: "280px", sm: "490px" }}
          height="700px"
        />
      </Stack>
    </Box>
  );
};

export default HowItWorks;
