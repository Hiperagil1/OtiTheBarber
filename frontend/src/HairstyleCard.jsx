import React from 'react';
import { Card, CardContent, Typography, Button, Box, useMediaQuery, useTheme } from '@mui/material';

const HairstyleCard = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: 4 }}>
      <Card
        sx={{
          width: isMobile ? '90%' : '400px', // Adaptează lățimea pentru mobile și desktop
          borderRadius: 2,
          boxShadow: 3,
          overflow: 'hidden',
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h2" sx={{ fontWeight: 'bold' }}>
            Nume Frizură
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>Preț:</strong> 100 RON
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>Durată:</strong> 45 minute
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Detalii: O frizură modernă care se potrivește stilului tău.
          </Typography>
        </CardContent>

        <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 2 }}>
          <Button variant="contained" color="primary" sx={{ width: '80%' }}>
            Rezervă
          </Button>
        </Box>
      </Card>
    </Box>
  );
};

export default HairstyleCard;
