import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import GradientText from "../common/gradienttext";
import { Card } from "../common/containers";
import { Description, Heading } from "../common/typography";
import Home from "../../assets/svg/Dayflow Work from Home.svg";
import Party from "../../assets/svg/Dayflow Park Life.svg";
import Time from "../../assets/svg/Dayflow Party Time.svg";
import Engineer from "../../assets/png/MacBook Pro.png";
import Spacer from "../Spacer";
import useGsap from "../../hooks/useGsap";
import gsap from "gsap";
import easyMeshGradient from 'easy-mesh-gradient';
import GradientBox from '../common/gradientbox';
import Patternbg from '../common/patternbg';


const servicesData = [
  {
    title: "The Blue Bit",
    description:
      "A dynamic 36-hour hackathon! Engage in two exhilarating rounds – a 36-hour online challenge and an intense 8-hour offline round.",
    imageUrl: Home, // Replace with the actual image URL or import the image,
    longDescription: "Introducing Blue Bit, a dynamic 36-hour hackathon! Engage in two exhilarating rounds – a 36-hour online challenge and an intense 8-hour offline round. With problem statements spanning web development, app development, machine learning, artificial intelligence, blockchain, web3, and DevOps, Blue Bit is the ultimate platform for innovation. Join us in shaping the future of tech, where last year witnessed over 500 registrations!"
  },
  {
    title: "Enigma Wars",
    description:
      "Enigma Wars is a 2-round coding competition designed to challenge and showcase the prowess of coding enthusiasts.",
    imageUrl: Party, // Replace with the actual image URL or import the image
    longDescription: "A thrilling journey into the world of competitive programming! Enigma Wars is a 2-round coding competition designed to challenge and showcase the prowess of coding enthusiasts. Prepare yourselves for a battle of algorithms, logic, and speed as you navigate through intriguing problem statements."
  },
  {
    title: "IdeaRx",
    description:
      "A Healthcare-focused Ideathon, features tracks such as Telemedicine, Healthcare Data Analytics, HealthTech for Mental Health.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "A Healthcare-focused Ideathon, features tracks such as Telemedicine, Healthcare Data Analytics, HealthTech for Mental Health, Patient Records Management, Wearable Technology, and Healthcare Cybersecurity. Participants explore innovative solutions in these domains, aiming to revolutionise healthcare through technology-driven approaches."
  },
  {
    title: "Virtual Treasure Hunt 2.0",
    description:
    "An online interactive game where participants solve clues and follow a series of challenges or puzzles to discover a hidden treasure.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "An online interactive game where participants solve clues and follow a series of challenges or puzzles to discover a hidden treasure or reach a final destination. It often combines elements of problem-solving, teamwork, and creativity in a digital environment, providing an engaging and immersive experience for participants."
  },
  {
    title: "The Design Challenge",
    description:
      "A competition or activity where participants conceptualize and create comprehensive plans for software or engineering systems.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "A competition or activity where participants conceptualize and create comprehensive plans for software or engineering systems. It typically involves designing the architecture, components, and interactions of a system to address specific challenges or requirements, showcasing participants' problem-solving and design skills."
  },
  {
    title: "BGMI Showdown",
    description:
    "Step onto the virtual battlefield where we can compete and prove your mettle in this action-packed competition.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "Gear up as we present the BGMI Showdown - Battlegrounds Mobile India Tournament!Show some skills and Step onto the virtual battlefield where we can compete and prove your mettle in this action-packed competition."
  },
  {
    title: "Valorant Realm",
    description:
    "A Valorant tournament where teams clash in a realm of radiant competition.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "Embark on a celestial journey in the Valorant tournament where teams clash in a realm of radiant competition. Engage in tactical triumphs, unravel strategic mysteries, and ascend to the pinnacle of Valorant."
  },
  {
    title: "CrickBlitz",
    description:
    "Participants simulate the Indian Premier League (IPL) auction format, acting as team owners and bidding for fictional cricket players.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "Enter the world of cricket as participants simulate the Indian Premier League (IPL) auction format, acting as team owners and bidding for fictional cricket players. This engaging activity fosters strategic thinking, teamwork, and sports management skills among students in a fun and competitive setting."
  },
  {
    title: "Zombie Havoc",
    description:
    "A zombie themed event in which teams must compete to survive an intense battle against a dangerous zombie virus which is taking over the world.",
    imageUrl: Time, // Replace with the actual image URL or import the image
    longDescription: "A zombie themed event in which teams must compete to survive an intense battle against a dangerous zombie virus which is taking over the world.  They must conquer all 3 rounds to emerge victorious - 1. Elimination Round 2. Treasure Hunt Round 3. The Grand Finale - Escape Room."
  },
  // Add more service objects as needed
];
const Tagline = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(isMobile);
  const hoverTimeoutRef = useRef(null);
  const isHoveringRef = useRef(false);
  const handleHover = (index) => {
    clearTimeout(hoverTimeoutRef.current);
    isHoveringRef.current = true;
    hoverTimeoutRef.current = setTimeout(() => {
      if (isHoveringRef.current) {
        gsap.to(`.card-${index}`, {
          y: "-100%",
          duration: 1,
          ease: "expo.out",
          opacity: 0,
        });
        gsap.to(`.card-container-${index}`, {
          duration: 1,
          ease: "expo.out",
          delay: 0.3,
        });
        gsap.to(`.card-description-${index}`, {
          y: "-100%",
          duration: 1,
          ease: "expo.out",
          delay: 0.2,
          opacity: 1,
        });
        setHoveredIndex(index);
      }
    }, 300);
  };

  const handleMouseLeave = (index) => {
    isHoveringRef.current = false;
    clearTimeout(hoverTimeoutRef.current);
    setHoveredIndex(null);
    gsap.to(`.card-container-${index}`, {
      scale: 1,
      duration: 1,
      ease: "expo.out",
    });
    gsap.to(`.card-${index}`, {
      y: 0,
      duration: 1,
      ease: "expo.out",
      opacity: 1,
    });
    gsap.to(`.card-description-${index}`, {
      y: 0,
      duration: 1,
      ease: "expo.out",
      opacity: 0,
    });
  };

  return (
    <Patternbg>
    <Container id="tagline-root" maxWidth="lg">
      <Box className="title" pb={5}>
        <GradientText primary="Key Events" secondary="And Highlights" />
      </Box>

      <Grid alignItems='center' container spacing={2} >
        {servicesData.map((service, index) => (
          <Grid item xs={12} sm={6} md={4} key={index} >
            <Box
              key={index}
              zIndex={index === hoveredIndex ? 100 : 1}
              className={`card-container-${index}`}
              position="relative"
              overflow="hidden"
            >
              <TaglineCard {...service} index={index} />
              <TaglineDescriptionCard {...service} index={index} />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
      <Spacer size="lg" />

    </Patternbg>
  );
};

const TaglineDescriptionCard = ({ index,longDescription }) => {
  return (
    <Box
      bgcolor="black"
      position="absolute"
      className={`card-description-${index}`}
    >
      <Card backgroundImage={Engineer}>
        <Typography varinat={"body2"} fontSize="14px">
          {longDescription}
        </Typography>
      </Card>
    </Box>
  );
};

const TaglineCard = ({ title, description, icon, imageUrl, index }) => {
  const gradientString = easyMeshGradient({
    seed: title
  })
  return (
    <Box className={`card-${index}`}
    >
      <GradientBox backgroundImage={imageUrl} height='300px'>
        <Box width="80%">
          <Heading variant="h2">
            {title.split(" ")[0]} {title.split(" ").slice(1).join(" ")}
          </Heading>
          <Spacer size="xs" />
          <Description variant="body1" color="textSecondary">
            {description}
          </Description>
        </Box>
      </GradientBox>
    </Box>
  );
};

export default Tagline;
