import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import { Card, CardContent, Typography, Button, Box } from "@mui/material";

function CustomCard({ name, price, duration, details, imagen }) {
  const [show, setShown] = useState(false);

  // Animatie pentru card
  const props3 = useSpring({
    transform: show ? "scale(1.03)" : "scale(1)",
    boxShadow: show
      ? "0 20px 25px rgb(0 0 0 / 25%)"
      : "0 2px 10px rgb(0 0 0 / 8%)"
  });

  return (
    <animated.div
      style={props3}
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <Card
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          height: "350px",
          width: '250px',
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden", // pentru a preveni imaginea să depășească cardul
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h2" sx={{ fontWeight: "bold" }}>
            {name}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>Preț:</strong> {price}
          </Typography>
          <Typography variant="body1" sx={{ marginTop: 1 }}>
            <strong>Durată:</strong> {duration}
          </Typography>
          <Typography variant="body2" sx={{ marginTop: 2 }}>
            Detalii: {details}
          </Typography>
        </CardContent>

        <Box sx={{ display: "flex", justifyContent: "center", marginBottom: 2 }}>
        <Button
          variant="contained"
          color="default" // Folosește "default" pentru a evita culorile predefinite
          sx={{
            width: "80%",
            backgroundColor: "black", // Setează culoarea de fundal la negru
            color: "white", // Setează culoarea textului la alb pentru contrast
            '&:hover': {
              backgroundColor: "darkgray", // Schimbă culoarea de fundal la hover
            }
          }}
        >
          Rezervă
        </Button>
        </Box>
      </Card>
    </animated.div>
  );
}

export default CustomCard;
