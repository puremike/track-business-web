import { React, useContext, useState } from "react";
import { Box, Stack, Typography, styled } from "@mui/material";
import { motion } from "framer-motion";
import { DisplayContexts } from "../contexts/DisplayContexts";
import { iconURL } from "../iconURLs";
import "./faqs.css";
import ManTalkingImage from "../assets/images/man-talking.png";

const FAQs = () => {
  const { aside, setAside } = useContext(DisplayContexts);

  //to handle the FAQs paragraph along with the iconChange
  const [aside2, setAside2] = useState("none");
  const [aside3, setAside3] = useState("none");
  const [aside4, setAside4] = useState("none");

  const { open, close } = iconURL;
  //to handle the iconChanges individually

  const [icon, setIcon] = useState(open);
  const [icon2, setIcon2] = useState(open);
  const [icon3, setIcon3] = useState(open);
  const [icon4, setIcon4] = useState(open);

  const EachFAQ = styled(Typography)({
    fontFamily: "Space Grotesk",
    fontSize: "1.125rem",
    fontWeight: "500",
  });

  return (
    <Box
      id="faqs"
      sx={{
        mt: "6.625rem",
        p: { xs: "2rem 2rem", md: "2rem 5rem", lg: "0 8.75rem" },
      }}
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
          <EachFAQ sx={{ m: "3rem 0 2.188rem 0" }}>
            The online form also provides links to a set of frequently <br />
            asked questions, other information materials related to
            <br />
            the financial disclosure programme.
          </EachFAQ>

          <Stack gap="20px">
            <Stack direction="row" justifyContent="space-between">
              <EachFAQ sx={{ fontWeight: "bold" }}>
                How much does a teams subscription cost?
              </EachFAQ>

              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                onClick={() => {
                  if (aside === "none") {
                    setAside("block");
                    setIcon(close);
                  } else if (aside === "block") {
                    setAside("none");
                    setIcon(open);
                  }
                }}
                src={icon}
                alt="plusIcon"
                width="28px"
                height="28px"
              />
            </Stack>
            <motion.span whileHover={{ scale: 1.03 }}>
              <EachFAQ className="animate-faq" display={aside}>
                Microsoft Teams is available as part of Microsoft Office 365
                <br />
                subscriptions. Premium plans start at $4.00/user/month <br />{" "}
                and are subject to an annual commitment.
              </EachFAQ>
            </motion.span>
          </Stack>

          <Stack gap="20px" mt="2rem">
            <Stack direction="row" justifyContent="space-between">
              <EachFAQ sx={{ fontWeight: "bold" }}>
                Do I still need to purchase licenses for the Mac app?
              </EachFAQ>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                onClick={() => {
                  if (aside2 === "none") {
                    setAside2("block");
                    setIcon2(close);
                  } else if (aside2 === "block") {
                    setAside2("none");
                    setIcon2(open);
                  }
                }}
                src={icon2}
                alt="icon"
                width="28px"
                height="28px"
              />
            </Stack>
            <motion.span whileHover={{ scale: 1.03 }}>
              <EachFAQ className="animate-faq" display={aside2}>
                License Purchase means the process of granting a software
                license <br />
                by the Licensor to the Licensee through a purchase-type scheme.
              </EachFAQ>
            </motion.span>
          </Stack>

          <Stack gap="20px" mt="2rem">
            <Stack direction="row" justifyContent="space-between">
              <EachFAQ sx={{ fontWeight: "bold" }}>
                What are the differences between Contributors and Viewers?
              </EachFAQ>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                onClick={() => {
                  if (aside3 === "none") {
                    setAside3("block");
                    setIcon3(close);
                  } else if (aside3 === "block") {
                    setAside3("none");
                    setIcon3(open);
                  }
                }}
                src={icon3}
                alt="icon"
                width="28px"
                height="28px"
              />
            </Stack>
            <motion.span whileHover={{ scale: 1.03 }}>
              <EachFAQ className="animate-faq" display={aside3}>
                When you assign roles to a user group, the individuals in the
                group <br /> have access to content. If you nest user groups,
                all the contained <br /> users have permission.
              </EachFAQ>
            </motion.span>
          </Stack>

          <Stack gap="20px" mt="2rem">
            <Stack direction="row" justifyContent="space-between">
              <EachFAQ sx={{ fontWeight: "bold" }}>
                How long does the free Teams subscription trial last?
              </EachFAQ>
              <motion.img
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.2 }}
                onClick={() => {
                  if (aside4 === "none") {
                    setAside4("block");
                    setIcon4(close);
                  } else if (aside4 === "block") {
                    setAside4("none");
                    setIcon4(open);
                  }
                }}
                src={icon4}
                alt="icon"
                width="28px"
                height="28px"
              />
            </Stack>
            <motion.span whileHover={{ scale: 1.03 }}>
              <EachFAQ className="animate-faq" display={aside4}>
                With Teams free, you get: Unlimited one-on-one meetings <br />{" "}
                for up to 30 hours. Unlimited group meetings for up to 60
                minutes.
              </EachFAQ>
            </motion.span>
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
