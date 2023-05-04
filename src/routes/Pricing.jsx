import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import ManSitting from "../assets/images/man-sitting.png";
import "./pricing.css";
import PricingCard from "../components/PricingCard";

const Pricing = () => {
  return (
    <Box mt="12.5rem" p={{ xs: "0 2rem", md: "0 5rem", lg: "0 8.75rem" }}>
      <Stack
        direction={{ xs: "column-reverse", sm: "row" }}
        justifyContent="center"
        gap={{ xl: "17rem" }}
      >
        <img src={ManSitting} alt="man siting" width="470px" height="500px" />
        <Stack>
          <Typography
            mb="1.125rem"
            fontFamily="Space Grotesk"
            fontWeight={700}
            fontSize="1.5rem"
            textAlign={{ xs: "left", sm: "right" }}
          >
            <span className="pricing-id">Pricing</span>
          </Typography>
          <Typography
            fontFamily="Space Grotesk"
            fontWeight={500}
            fontSize={{ xs: "28px", sm: "2rem", lg: "3.75rem" }}
            mb="2.75rem"
            textAlign={{ xs: "left", sm: "right" }}
          >
            Select a membership level; <br /> right price for you.
          </Typography>
          <Typography
            fontFamily="Space Grotesk"
            fontSize="14px"
            textAlign={{ xs: "left", sm: "right" }}
          >
            Prices listed in USD. Taxes may apply.
            <br /> By using program you agree to our terms and policies.
          </Typography>
        </Stack>
      </Stack>

      <Box mb="3rem">
        <PricingCard />
      </Box>
    </Box>
  );
};

export default Pricing;
