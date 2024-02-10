import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import back from '../../assets/back.png'


const RegistrationsClosing = ({ closingDate }) => {
  const [countdown, setCountdown] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const closingDateTime = new Date(closingDate);

      const timeRemaining = closingDateTime - now;

      if (timeRemaining <= 0) {
        setCountdown('Registrations closed');
        clearInterval(intervalId);
      } else {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setCountdown(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [closingDate]);

  return (
    <Box
      sx={{
        backgroundImage: `url(${back})`, // Set the path to your PNG image
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        padding: '125px',
        borderRadius: '8px',
        textAlign: 'center',
        marginBottom: '16px',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: '#F681E6', // Set your desired text color
          fontWeight: 700,
          fontSize: '22px',
          marginBottom: '8px',
        }}
      >
        Registrations Closing Soon!
      </Typography>
      <Typography
        variant="h6"
        sx={{
          color: '#C8F802', // Set your desired countdown color
          fontSize: '21px',
          fontWeight: 700,
        }}
        className="hero glitch layers"
      >
        <span>{countdown}</span>
      </Typography>
    </Box>
  );
};

export default RegistrationsClosing;
