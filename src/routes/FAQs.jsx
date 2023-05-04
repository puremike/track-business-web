import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import DashIcon from "../assets/icons/dash.png";
import PlusIcon from "../assets/icons/plus.png";
import "./faqs.css";

const FAQs = () => {
  return (
    <Box mt="6.625rem" p={{ xs: "0 2rem", md: "0 5rem", lg: "0 8.75rem" }}>
      <Stack justifyContent="center">
        <Typography
          mb="1.125rem"
          fontFamily="Space Grotesk"
          fontWeight={700}
          fontSize="1.5rem"
        >
          <span className="faqs">Faqs</span>
        </Typography>
        <Typography
          fontFamily="Space Grotesk"
          fontWeight={500}
          fontSize={{ xs: "28px", sm: "3.75rem" }}
        >
          Common Questions.
        </Typography>
        <Typography
          fontFamily="Space Grotesk"
          fontSize="1.125rem"
          fontWeight="500"
          m="3rem 0 2.188rem 0"
        >
          The online form also provides links to a set of frequently <br />
          asked questions, other information materials related to
          <br />
          the financial disclosure programme.
        </Typography>

        <Stack gap="20px">
          <Stack direction="row" gap={{ xs: "28px", sm: "328px", xl: "335px" }}>
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="bold"
            >
              How much does a teams subscription cost?
            </Typography>
            <img src={PlusIcon} alt="plusIcon" width="28px" height="28px" />
          </Stack>
          <Typography
            fontFamily="Space Grotesk"
            fontSize="1.125rem"
            fontWeight="500"
          >
            Contributors are members of your team who need access to use <br />
            the Mac app to create and edit Sketch documents. These prices don’t
            include sales <br /> tax, which may still apply. Head over to our
            pricing page to get full details.
          </Typography>
        </Stack>

        <Stack gap="20px" mt="2rem">
          <Stack direction="row" gap={{ xs: "28px", sm: "328px", xl: "335px" }}>
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="bold"
            >
              How much does a teams subscription cost?
            </Typography>
            <img src={PlusIcon} alt="plusIcon" width="28px" height="28px" />
          </Stack>
          <Typography
            fontFamily="Space Grotesk"
            fontSize="1.125rem"
            fontWeight="500"
          >
            Contributors are members of your team who need access to use <br />
            the Mac app to create and edit Sketch documents. These prices don’t
            include sales <br /> tax, which may still apply. Head over to our
            pricing page to get full details.
          </Typography>
        </Stack>

        <Stack gap="20px" mt="2rem">
          <Stack direction="row" gap={{ xs: "28px", sm: "328px", xl: "335px" }}>
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="bold"
            >
              How much does a teams subscription cost?
            </Typography>
            <img src={PlusIcon} alt="plusIcon" width="28px" height="28px" />
          </Stack>
          <Typography
            fontFamily="Space Grotesk"
            fontSize="1.125rem"
            fontWeight="500"
          >
            Contributors are members of your team who need access to use <br />
            the Mac app to create and edit Sketch documents. These prices don’t
            include sales <br /> tax, which may still apply. Head over to our
            pricing page to get full details.
          </Typography>
        </Stack>

        <Stack gap="20px" mt="2rem">
          <Stack direction="row" gap={{ xs: "28px", sm: "328px", xl: "335px" }}>
            <Typography
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="bold"
            >
              How much does a teams subscription cost?
            </Typography>
            <img src={PlusIcon} alt="plusIcon" width="28px" height="28px" />
          </Stack>
          <Typography
            fontFamily="Space Grotesk"
            fontSize="1.125rem"
            fontWeight="500"
          >
            Contributors are members of your team who need access to use <br />
            the Mac app to create and edit Sketch documents. These prices don’t
            include sales <br /> tax, which may still apply. Head over to our
            pricing page to get full details.
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default FAQs;
