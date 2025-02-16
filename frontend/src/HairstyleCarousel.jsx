import React, { useRef } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';

const HairstyleCarousel = () => {
  const scrollRef = useRef(null);

  const handleScroll = (event) => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += event.deltaY * 2; // Face scroll-ul mai fluid
    }
  };

  const hairstyles = [
    { name: 'Frizură 1', price: '100 RON', duration: '45 minute', details: 'Detalii frizură 1' },
    { name: 'Frizură 2', price: '120 RON', duration: '50 minute', details: 'Detalii frizură 2' },
    { name: 'Frizură 3', price: '90 RON', duration: '40 minute', details: 'Detalii frizură 3' },
    { name: 'Frizură 4', price: '130 RON', duration: '60 minute', details: 'Detalii frizură 4' },
  ];

  return (
    <Box
      ref={scrollRef}
      onWheel={handleScroll} // Permite scroll-ul orizontal cu mouse-ul
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 2,
        paddingX: 2,
        width: '100%',
        justifyContent: 'center',
        scrollSnapType: 'x mandatory',
        scrollBehavior: 'smooth',
        '&::-webkit-scrollbar': { display: 'none' }, // Ascunde bara de scroll pe WebKit
        msOverflowStyle: 'none', // Ascunde bara de scroll pe IE/Edge
        scrollbarWidth: 'none', // Ascunde bara de scroll pe Firefox
      }}
    >
      {hairstyles.map((hairstyle, index) => (
        <Box
          key={index}
          sx={{
            flex: '0 0 auto',
            scrollSnapAlign: 'center',
            width: '200px', // Lățime redusă
            height: '350px', // Înălțime mărită
          }}
        >
          <Card
            sx={{
              borderRadius: 2,
              boxShadow: 3,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <CardContent>
              <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
                {hairstyle.name}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                <strong>Preț:</strong> {hairstyle.price}
              </Typography>
              <Typography variant="body1" sx={{ marginTop: 1 }}>
                <strong>Durată:</strong> {hairstyle.duration}
              </Typography>
              <Typography variant="body2" sx={{ marginTop: 2 }}>
                Detalii: {hairstyle.details}
              </Typography>
            </CardContent>

            <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
              <Button variant="contained" color="primary" sx={{ width: '80%' }}>
                Rezervă
              </Button>
            </Box>
          </Card>
        </Box>
      ))}
    </Box>
  );
};

export default HairstyleCarousel;
