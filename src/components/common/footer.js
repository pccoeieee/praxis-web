import React, { useRef, useState } from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  IconButton,
  Typography,
  useTheme,
} from '@mui/material';
import {
  FiBell,
  FiFacebook,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';
import Logo from '../../assets/png/logo.png';
import gsap from 'gsap';
import { Flip } from 'gsap/all';
import useGsap from '../../hooks/useGsap';

const linksData = [
  { to: '/', text: 'Home' },
  { to: '/ambassador', text: 'Ambassadors' },
  { to: '/events', text: 'Events' },
  { to: '/team', text: 'Team' },
];

const Footer = () => {
  const theme = useTheme();
  const ref = useRef();
  const q = gsap.utils.selector(ref);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
    const containers = q('.content');
    const state = Flip.getState(containers);
    // Use the state as needed
  };

  return (
    <Box
      bgcolor='#1a1a1a'
      py={3}
      px={theme.spacing(2)}
      color='#ffffff'
      className='footer'
      ref={ref}
    >
      <Container maxWidth='lg'>
        <Grid container spacing={3} justifyContent='space-between'>
          {/* ... (your existing code) */}
        </Grid>
        <Box mt={3} textAlign='center'>
          <Typography variant='body2' style={{ color: '#ffffff' }}>
            &copy; PCCoE IEEE Webmasters 2023-24
          </Typography>
          <IconButton
            color='inherit'
            onClick={handleClick}
            style={{ marginTop: '10px' }}
          >
            <FiTwitter />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
