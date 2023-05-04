import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import { HashLink as Link } from "react-router-hash-link";
import DotIcon from "../assets/icons/dot.png";
import WhiteDot from "../assets/icons/dotwhite.png";

const PricingCard = () => {
  return (
    <Box mt="2rem" p={{ xl: "0 8.75rem" }}>
      <Stack
        direction="column"
        p={{ xs: "0 2.2rem", md: "0 5rem", lg: "0 8.75rem" }}
      >
        {/* Small-medium-large-extra large device breakpoints */}
        <Stack
          direction={{ sm: "row" }}
          display={{ xs: "none", sm: "flex" }}
          gap={{ sm: "1rem", md: "1.2rem", lg: "2rem", xl: "6.375rem" }}
          minHeight="644px"
          justifyContent="center"
        >
          <Stack
            direction="column"
            gap="1.6rem"
            className="pricing-card-49"
            width="436px"
          >
            <Typography fontFamily="Space Grotesk" fontWeight="bold" mt="2rem">
              <span className="pricing-card-price-49">$49</span> per month
            </Typography>
            <Typography fontFamily="Space Grotesk">
              A pay-once license, just for you
            </Typography>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                The Mac app - yours to keep
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Beautiful White_level
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                One year of saving to Cloud
              </Typography>
            </Stack>
            <Link to="#signup" smooth className="pricing-card-cta">
              Join
            </Link>
          </Stack>

          <Stack
            direction="column"
            gap="1.6rem"
            className="pricing-card-99"
            width={{ sm: "436px" }}
          >
            <Typography fontFamily="Space Grotesk" fontWeight="bold" mt="2rem">
              <span className="pricing-card-price-99">$99</span> per month
            </Typography>
            <Typography fontFamily="Space Grotesk">
              Pro account, just for you
            </Typography>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                The Mac app - yours to keep
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Beautiful White_level
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                One year of saving to Cloud
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                A personal Cloud workspace
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                All tools, just for you
              </Typography>
            </Stack>
            <Link to="#signup" smooth className="pricing-card-cta-99">
              Join
            </Link>
          </Stack>

          <Stack
            direction="column"
            gap="1.6rem"
            className="pricing-card-299"
            width={{ sm: "436px" }}
          >
            <Typography fontFamily="Space Grotesk" fontWeight="bold" mt="2rem">
              <span className="pricing-card-price-299">$299</span> per month
            </Typography>
            <Typography fontFamily="Space Grotesk">
              A subscription for the whole team
            </Typography>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Access to the Mac app for all
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                A Shared Cloud workspace
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Free Cloud access for unlim
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Easy team management
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                No license key required
              </Typography>
            </Stack>
            <Link to="#signup" smooth className="pricing-card-cta-299">
              Join
            </Link>
          </Stack>
        </Stack>

        {/* Mobile Version Price Card */}
        <Stack
          direction={{ xs: "column" }}
          display={{ xs: "flex", sm: "none" }}
          gap="3rem"
          minHeight="540px"
          justifyContent="center"
        >
          <Stack
            direction="column"
            gap="1.6rem"
            className="pricing-card-49"
            width="320px"
          >
            <Typography fontFamily="Space Grotesk" fontWeight="bold" mt="2rem">
              <span className="pricing-card-price-49">$49</span> /mo
            </Typography>
            <Typography fontFamily="Space Grotesk">
              A pay-once license, just for you
            </Typography>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                The Mac app - yours to keep
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Beautiful White_level
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                One year of saving to Cloud
              </Typography>
            </Stack>
            <Link to="#signup" smooth className="pricing-card-cta">
              Join
            </Link>
          </Stack>

          <Stack
            direction="column"
            gap="1.6rem"
            className="pricing-card-99"
            width="320px"
          >
            <Typography fontFamily="Space Grotesk" fontWeight="bold" mt="2rem">
              <span className="pricing-card-price-99">$99</span> /mo
            </Typography>
            <Typography fontFamily="Space Grotesk">
              Pro account, just for you
            </Typography>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                The Mac app - yours to keep
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Beautiful White_level
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                One year of saving to Cloud
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                A personal Cloud workspace
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={WhiteDot} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                All tools, just for you
              </Typography>
            </Stack>
            <Link to="#signup" smooth className="pricing-card-cta-99">
              Join
            </Link>
          </Stack>

          <Stack
            direction="column"
            gap="1.6rem"
            className="pricing-card-299"
            width="320px"
          >
            <Typography fontFamily="Space Grotesk" fontWeight="bold" mt="2rem">
              <span className="pricing-card-price-299">$299</span> /mo
            </Typography>
            <Typography fontFamily="Space Grotesk">
              A subscription for the whole team
            </Typography>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Access to the Mac app for all
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                A Shared Cloud workspace
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Free Cloud access for unlim
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                Easy team management
              </Typography>
            </Stack>
            <Stack direction="row" gap="1.813rem" alignItems="center">
              <img src={DotIcon} alt="dot" />
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="500"
              >
                No license key required
              </Typography>
            </Stack>
            <Link to="#signup" smooth className="pricing-card-cta-299">
              Join
            </Link>
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default PricingCard;
