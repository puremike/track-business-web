import { React, useContext, useState, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DisplayContexts } from "../contexts/DisplayContexts";

import { iconURL } from "../iconurl";
import "./faqs.css";
import ManTalkingImage from "../assets/images/man-talking.png";
import "animate.css";

const FAQs = () => {
  const { aside, setAside } = useContext(DisplayContexts);

  //to handle the FAQs paragraph along with the iconChange
  const [aside2, setAside2] = useState("none");
  const [aside3, setAside3] = useState("none");
  const [aside4, setAside4] = useState("none");

  const { plusIconUrl, dashIconUrl } = iconURL;
  //to handle the iconChanges individually

  const [icon, setIcon] = useState(plusIconUrl);
  const [icon2, setIcon2] = useState(plusIconUrl);
  const [icon3, setIcon3] = useState(plusIconUrl);
  const [icon4, setIcon4] = useState(plusIconUrl);

  return (
    <Box
      id="faqs"
      mt="6.625rem"
      p={{ xs: "0 2rem", md: "0 5rem", lg: "0 8.75rem" }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="center"
        gap={{ xl: "368px" }}
      >
        <Stack>
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
            <Stack direction="row" justifyContent="space-between">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="bold"
              >
                How much does a teams subscription cost?
              </Typography>
              <img
                onClick={() => {
                  if (aside === "none") {
                    setAside("block");
                    setIcon(dashIconUrl);
                  } else if (aside === "block") {
                    setAside("none");
                    setIcon(plusIconUrl);
                  }
                }}
                src={icon}
                alt="plusIcon"
                width="28px"
                height="28px"
              />
            </Stack>
            <Typography
              className="animate-faq"
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
              display={aside}
            >
              Microsoft Teams is available as part of Microsoft Office 365
              <br />
              subscriptions. Premium plans start at $4.00/user/month <br /> and
              are subject to an annual commitment.
            </Typography>
          </Stack>

          <Stack gap="20px" mt="2rem">
            <Stack direction="row" justifyContent="space-between">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="bold"
              >
                Do I still need to purchase licenses for the Mac app?
              </Typography>
              <img
                onClick={() => {
                  if (aside2 === "none") {
                    setAside2("block");
                    setIcon2(dashIconUrl);
                  } else if (aside2 === "block") {
                    setAside2("none");
                    setIcon2(plusIconUrl);
                  }
                }}
                src={icon2}
                alt="icon"
                width="28px"
                height="28px"
              />
            </Stack>
            <Typography
              className="animate-faq"
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
              display={aside2}
            >
              License Purchase means the process of granting a software license{" "}
              <br />
              by the Licensor to the Licensee through a purchase-type scheme.
            </Typography>
          </Stack>

          <Stack gap="20px" mt="2rem">
            <Stack direction="row" justifyContent="space-between">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="bold"
              >
                What are the differences between Contributors and Viewers?
              </Typography>
              <img
                onClick={() => {
                  if (aside3 === "none") {
                    setAside3("block");
                    setIcon3(dashIconUrl);
                  } else if (aside3 === "block") {
                    setAside3("none");
                    setIcon3(plusIconUrl);
                  }
                }}
                src={icon3}
                alt="icon"
                width="28px"
                height="28px"
              />
            </Stack>
            <Typography
              className="animate-faq"
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
              display={aside3}
            >
              When you assign roles to a user group, the individuals in the
              group <br /> have access to content. If you nest user groups, all
              the contained <br /> users have permission.
            </Typography>
          </Stack>

          <Stack gap="20px" mt="2rem">
            <Stack direction="row" justifyContent="space-between">
              <Typography
                fontFamily="Space Grotesk"
                fontSize="1.125rem"
                fontWeight="bold"
              >
                How long does the free Teams subscription trial last?
              </Typography>
              <img
                onClick={() => {
                  if (aside4 === "none") {
                    setAside4("block");
                    setIcon4(dashIconUrl);
                  } else if (aside4 === "block") {
                    setAside4("none");
                    setIcon4(plusIconUrl);
                  }
                }}
                src={icon4}
                alt="icon"
                width="28px"
                height="28px"
              />
            </Stack>
            <Typography
              className="animate-faq"
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
              display={aside4}
            >
              With Teams free, you get: Unlimited one-on-one meetings <br /> for
              up to 30 hours. Unlimited group meetings for up to 60 minutes.
            </Typography>
          </Stack>
        </Stack>
        <img
          src={ManTalkingImage}
          alt="man"
          width={{ xs: "360px", md: "600px" }}
          height="620px"
        />
      </Stack>
    </Box>
  );
};

export default FAQs;
