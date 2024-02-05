import React, { useRef } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { FiArrowRightCircle, FiPhoneCall } from "react-icons/fi";
import Morph from "../../assets/svg/morph.svg";
import Appbar from "../Appbar";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import { formatDistanceToNow } from "date-fns";
import Spacer from "../../components/Spacer";
import bgBrouchure from "../../assets/jpg/bg-brochure.jpg";
const wrapWordsWithSpan = (text, className) => {
  const words = text.split(" ");

  return (
    <>
      {words.map((word, index) => (
        <React.Fragment key={index}>
          <span style={{ display: "inline-block" }} className={className}>
            {word}
          </span>
          {index !== words.length - 1 && " "}
        </React.Fragment>
      ))}
    </>
  );
};

const Hero = () => {
  const theme = useTheme();
  const rootRef = useRef();
  useGsap(
    rootRef,
    () => {
      const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

      tl.from(".title", {
        y: 100,
        duration: 0.8,
        stagger: 0.2,
        opacity: 0,
        skewY: 10,
      })
        .from(".description", { y: 30, opacity: 0, duration: 0.6 }, "-=0.2")
        .from(
          ".card",
          { y: 30, opacity: 0, duration: 0.6, stagger: 0.2 },
          "-=0.4"
        )
        .from(
          ".button",
          { y: 20, opacity: 0, duration: 0.6, stagger: 0.1 },
          "-=0.3"
        );
    },
    []
  );

  const formatTimestamp = (timestamp) => {
    const currentDate = new Date();
    const orderDate = new Date(timestamp);
    return formatDistanceToNow(orderDate, {
      addSuffix: true,
      includeSeconds: true,
    });
  };

  const handleBookCall = () => {
    const ctaSection = document.getElementById("cta-root");
    if (ctaSection) {
      const offsetTop = ctaSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleShowMore = () => {
    const ctaSection = document.getElementById("services-root");
    if (ctaSection) {
      const offsetTop = ctaSection.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <Box
      ref={rootRef}
      minHeight="100vh"
      sx={{
        backgroundImage: `url(${Morph})`, // Replace with your actual image path
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "black",
      }}
    >
      <Appbar />
      <Container maxWidth="lg">
        <Grid container spacing={3} alignItems="center">
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: {
                  md: "90%",
                  xs: "100%",
                },
              }}
            >
              <Typography
                className="appbar-trigger"
                paragraph
                mt={20}
                variant="h1"
                color="textPrimary"
                sx={{
                  fontSize: {
                    xs: "64px",
                    md: "72px",
                  },
                  lineHeight: {
                    md: "72px",
                    xs: "64px",
                  },
                }}
                fontWeight={800}
              >
                {wrapWordsWithSpan("Engineer 2k23", "title")}
              </Typography>
              <Typography
                className="description"
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                color="textSecondary"
              >
                {" "}
              </Typography>
              <Spacer size={"xs"} />
              <Typography
                className="description"
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                color="textSecondary"
              >
                {" "}
              </Typography>
              <Spacer size={"xs"} />
              <Typography
                className="description"
                fontFamily={theme.typography.fontFamily}
                variant="body1"
                color="textSecondary"
              >
                {" "}
              </Typography>
              <Spacer size={"xs"} />
            </Box>
          </Grid>
          <Grid item xs={12} md={5}>
            <img src={bgBrouchure} width="100%" />
            <Spacer size="sm" />
            <img src={bgBrouchure} width="100%" />
          </Grid>
          {/* Second Grid Item */}
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
