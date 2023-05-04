import { React, useContext, useState, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { DisplayContexts } from "../contexts/DisplayContexts";

import DashIcon from "../assets/icons/dash.png";
import PlusIcon from "../assets/icons/plus.png";
import "./faqs.css";
import ManTalkingImage from "../assets/images/man-talking.png";
import "animate.css";

const iconURL = {
  plusIconUrl:
    "https://lh3.googleusercontent.com/ygBEBl-hoArYYZ7PyMZMFqLapFqepp47WMCJ2ftJaadki-q9WHZBo_Uqq5f6kz7_3pE9Ux52hRi0ygg7SYsCqiS_f_BwMF2GNHgemWCiK8e2JJ4iMgwlLyEPwyUTF4zFu3bLUeJefAykVJNi1bw5e0p2xDs9yn7zndE6ReduDrw9CbnMLquqC4pVyNpyxuCSwB_ssSj2k2bncpGkXK3ucJfdS2zG4CYDmI-LlZDaafS16AaJqbUvwoI_tBB4dUEIlN-P5Ieedgf5bKl-_WIx5IAcq5E8J2h0EAie8NYuJgblZoH1-pJsKhp8Hs2O-rEDhq2eKvBH6raja4vNdxr7_nQ38sZ5Bg_a9hL14lbSYCDjXFvRJF94jyns0AKkGoCQKIzhhTBbQJ_PRcCQJJqb3ToIGtg7NJM-Wz0DGuz4PPwGRj9dkvSAleSt-UpBT0zjYkW7S0oHizp3hkMRR-SUhLdyfl_-BRkIJ42zRw0AM3vdRPtqLyLh-UM9K7m4y_1-KTS80NGM3bd-qrGEKrntFhWwugx0tQtLYpGHbjtcr9qFW9NF9fai_ZT8HVV89kDvld9_kGptRN9ZXCIT-iDm9g8NqCLDR6-_wQaLlvHBnAQJ2w5GnpHpO6a3p8HfVw9-Rll98JW7VLTSiuSnzrBKXaUAWvrnD_GNKWrQaQ2NqajC5i24K9PtlvIyaDOQ-fwc0yIWsMO3-UvTtxFjpKF-GYaxGAmSzFH7MXODzdZVIxkXJOF_G07m8Vo-dJhWWyZdmBugIM_UJGj8mhjoQWWcddC2qtYsLECQuWuYykyTKY-7Lxeq9P58-L9cGwurlI3jNMt9uMJRk_kNcIuKeq3YwlSOmupT3YUTzvxe16UmLAVtfbGM39ZivlNUolqOjsIZNNDCB-cz2Ut6kSpmYWn3pibv0LLJ6LWbJAG9gUfjtCQ=w28-h28-s-no?authuser=0",
  dashIconUrl:
    "https://lh3.googleusercontent.com/s17UqJNkYBBo7YN1cZEVXLG9Ng8d_jXDogy5165qyQIu0hlcugI3SGqsVJ49TmlHmb25EGovK_sKvFwozxAAxjUrT5XGSFySpUxKkeZ4_UnwwljrNQbif6qAEcPVOlDAjtO6eGetCKnv1wMUvbsTOrI1cQcsqG2lfC1FDEiNc83F8w2T1umGXeIRGQgp_j1Mfweyg9ScLl-t1SGgVWId2ElC3dQwNVGblvz453g9G7XC5IlfrEUtqSNRzhHuyN2PngOWi53u-qF9MuLUpcMIIHcoJullirrCQxF_2CkDwa73KgzysFEnUKE-9QpYRMua-NrWm87M8rhOSyJbZgVa7Q2c5aU7dvoGOEVAPPmzxtWlULkin6GScQHrbTzsu-9CVc9X9hOoy8l33-mRPJac-8-HvXX7ayhwU3Mf93VGVQWe2p-cG7xbVG3BHdBWnbpamLeJkMFil8AZinb8-ENv4pLNde6YwsSq-fWntoe-mOtVoSOqiE3h3zFUx_7syDUfgB91DcUm8veP274Wtysi9JVxvvk2_ko9SPgA7DcxdmEB19aIsC_eHPHM1c9M-IphOtpPWVqnxoxC06Qo3lmXrBKoN7zS9p61LMv7aORfDw9rgXNd0WvHwqc9SwxdZ43iS9agbJ3gxLJks385VaDBsY8xmZxzeQQfVR9QepKyZYH2sSgLPzgPvwMHaqMSG3aUIGTbDEkp0IsJy7yzJiu-XogEjwawrFrGarRBM5NyvKIE3MHbmT_R3ve9AYzLDyamMaW_lx4YSue7kwyr26q1tnzrlT3NyN99xt3t8nqGexyjTj_WwWCnofLVl8MxWU-2n7-ASo0T09kFD9VpaSE7YVElaR5vxkFcEoiZtgt8Jwvzqg7fwTGgK3i_V-M_HS9uog7oTpyswjFF15DHehWyYZzBUdV6Tk2QNEmjAIGfPOI=w28-h28-s-no?authuser=0",
};

const FAQs = () => {
  const { aside, setAside } = useContext(DisplayContexts);

  //to handle the FAQs paragraph along with the iconChange
  const [aside2, setAside2] = useState("none");
  const [aside3, setAside3] = useState("none");
  const [aside4, setAside4] = useState("none");

  //to handle the iconChanges individually
  const { plusIconUrl, dashIconUrl } = iconURL;
  const [icon, setIcon] = useState(plusIconUrl);
  const [icon2, setIcon2] = useState(plusIconUrl);
  const [icon3, setIcon3] = useState(plusIconUrl);
  const [icon4, setIcon4] = useState(plusIconUrl);

  return (
    <Box mt="6.625rem" p={{ xs: "0 2rem", md: "0 5rem", lg: "0 8.75rem" }}>
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
              fontFamily="Space Grotesk"
              fontSize="1.125rem"
              fontWeight="500"
              display={aside}
            >
              Contributors are members of your team who need access to use
              <br />
              the Mac app to create and edit Sketch documents. These prices
              don’t include sales <br /> tax, which may still apply. Head over
              to our pricing page to get full details.
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
