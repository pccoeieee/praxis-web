import React, { useRef,useState,useEffect } from 'react';
import { Box, Button, Chip, Container, IconButton, Skeleton, Stack, Typography, Grid } from '@mui/material';
import Appbar from '../../components/Appbar';
import Footer from '../../components/common/footer';
import Spacer from '../../components/Spacer';
import { Description, Heading } from '../../components/common/typography';
import EmblaCarousel from '../../components/common/carousel';
import GradientBox from '../../components/common/gradientbox';
import { FiArrowRight, FiArrowLeft, FiCalendar, FiClock, FiMapPin, FiUser } from 'react-icons/fi';
import GradientText from '../../components/common/gradienttext';
import { useEventData } from '../../hooks/useEvents';
import CustomizedDialogs from './CustomizedDialogs';
import { AiFillTrophy } from 'react-icons/ai';
import easyMeshGradient from "easy-mesh-gradient";
import Patternbg from '../../components/common/patternbg';
import { CgScrollV } from 'react-icons/cg';
import {  GiTicket } from 'react-icons/gi';
import RegistrationsClosing from './RegistrationsClosing';
import Timer from './timer';





const HeadCarousel = () => {
  const { data, isLoading } = useEventData();
  return (
    isLoading ? <Skeleton height='450px' />  :  <EmblaCarousel flex="0 0 100%" gap="20px">

      {data.map((event, index) => (
        <HeadEvent event={event} key={index} />
      ))}

    </EmblaCarousel>
  );
};

const HeadEvent = ({ subtitle, firstCta, secondCta, description, event}) => {
  const title = event.title;
  const needRegister = event.needRegister;
  const rule = event.rule;
  const poc = event.POC;
  const poc_contact = event.POC_Contact;
  const date = event.Date;
  const venue = event.Venue
  const isCompetition = event.isCompetition
  const prize = event.Prize
  const registrationLink = event.registrationLink

  const [CurrentCardIndex, setCurrentCardIndex] = useState(0);
  const { data, isLoading } = useEventData();

  return (
    <GradientBox size='small' height="100%" color="white">
      <Container maxWidth="lg">
        {/* <Typography fontFamily="Lato" variant="body1" gutterBottom>
          {title}
      </Typography> */}

        <Box sx={{ width: { xs: '100%', md: '85%' } }}>
          <Typography
            variant="h1"
            pt={8}
            sx={{
              fontSize: {
                xs: '48px',
                md: '72px',
              },
            }}
          >
            {title}
          </Typography>
          {/* <Typography fontWeight={700} variant="body1">
            Small Title{" "}
          </Typography> */}
          <Spacer size='xs'/>
          {/*{needRegister ? <Spacer size='xs'/> : <Typography variant='body1' pb={2}>*/}
          {/*  {des}*/}
          {/*</Typography>}*/}
        </Box>
        <Stack direction="row" flexWrap='wrap' alignItems="center" gap={1} mb={1}>
          {needRegister && <a target='_blank' href={registrationLink}><Chip color='primary' label="Registration" sx={{ width: '150px', height: '40px' }} icon={<GiTicket />} /></a>}
          {needRegister && <a target='_blank' href={rule}><Chip color='secondary' label="Rule Book" sx={{ width: '150px', height: '40px' }} icon={<CgScrollV />} /></a> }
        </Stack>
        <Stack direction="row" flexWrap='wrap' alignItems="center" gap={1} mb={1}>
          {isCompetition && <>
            <Chip label={`₹${prize} Pool`} icon={<AiFillTrophy />} />
            <Chip label={`${poc} ${poc_contact}`} icon={<FiUser />}/>
          </>
          }
          <Chip label={date} icon={<FiCalendar />} />
        </Stack>
        <Chip label={venue} icon={<FiMapPin />} />
      </Container>
    </GradientBox>
  );
};


const About = () => {
  const { data, isLoading } = useEventData();
  const rootRef = useRef();

  {/*const closingDate = '2024-02-14T12:00:00'; */}
  const deadline = new Date(2024, 1, 16, 12, 0, 0);

  return (
    <Box ref={rootRef} sx={{ backgroundColor: 'black' }}>
      <Patternbg>
      <Spacer size="lg" />
      {/*<RegistrationsClosing closingDate={closingDate} /> */}
      <Timer deadline={deadline}/>
      <Appbar />
      <Container maxWidth="lg" color="white" sx={{ pt: 15 }}>
        <HeadCarousel />
        

      <Spacer size="lg" />
      </Container>
      </Patternbg>

    </Box>
  );
};



export default About;
