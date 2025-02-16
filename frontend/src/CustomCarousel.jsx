import React, { useState, useCallback, useEffect } from "react";
import { Box, Card, CardContent, Typography, useTheme, styled } from "@mui/material";
import CustomCard from './CustomCard'; // Importă CustomCard


const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  height: "500px",
  width: "100%",  // Asigură-te că are o lățime definită
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  perspective: "1000px",
  backgroundColor: "transparent",
  paddingTop: "30px",  // Adaugă un padding în partea de sus
  // Adaugă un fundal vizibil
}));


const CarouselTrack = styled(Box)({
  position: "relative",
  width: "100%",
  height: "100%",
  transformStyle: "preserve-3d",
  transition: "transform 0.5s ease-out",
  transform: "translateZ(-100px)"
});

const CarouselCard = styled(Card)(({ rotation, active }) => ({
  position: "absolute",
  width: "250px",
  height: "350px",
  left: "50%",
  transform: `translateX(-50%) rotateY(${rotation}deg) translateZ(180px)`,
  transition: "all 0.5s ease-out",
  cursor: "pointer",
  opacity: active ? 1 : rotation > -90 && rotation < 90 ? 0.4 : 0, // Opacitate redusă pentru cardurile din stânga/dreapta și invizibile pentru cele din spate
  visibility: rotation > 90 && rotation < 270 ? "hidden" : "visible",
  "&:hover": active
    ? {
        transform: `translateX(-50%) rotateY(${rotation}deg) translateZ(300px) scale(1.0.5)`,
        boxShadow: "0 20px 40px rgba(0,0,0,0.3)"
      }
    : {},
}));


const Carousel3D = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const rotateLeft = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? items.length - 1 : prevIndex - 1);
  }, [items.length]);

  const rotateRight = useCallback(() => {
    setCurrentIndex((prevIndex) => prevIndex === items.length - 1 ? 0 : prevIndex + 1);
  }, [items.length]);

  const handleWheel = useCallback(() => {
    let timeoutId = null;
  
    return (event) => {
      if (timeoutId) return;
  
      if (event.deltaY > 0) {
        rotateRight();
      } else {
        rotateLeft();
      }
  
      timeoutId = setTimeout(() => {
        timeoutId = null;
      }, 300); // Interval de 300ms pentru a preveni mișcările rapide
    };
  }, [rotateLeft, rotateRight]);
  

  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      rotateRight();
    } else if (isRightSwipe) {
      rotateLeft();
    }
    setTouchStart(null);
    setTouchEnd(null);
  };

  useEffect(() => {
    const debouncedHandleWheel = handleWheel();
    window.addEventListener("wheel", debouncedHandleWheel);
  
    return () => {
      window.removeEventListener("wheel", debouncedHandleWheel);
    };
  }, [handleWheel]);
  

  useEffect(() => {
    const container = document.querySelector(".carousel-container");
    container.addEventListener("wheel", handleWheel);
    return () => container.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  useEffect(() => {
    if (currentIndex >= items.length) {
      setCurrentIndex(0);
    }
  }, [items.length]);
  

  const getRotation = (index) => {
    const totalCards = items.length;
    const angleStep = 360 / totalCards;
    let rotation = ((index - currentIndex + totalCards) % totalCards) * angleStep;

    if (rotation > 180) {
      rotation -= 360;
    }

    return rotation;
  };

  return (
    <CarouselContainer
      className="carousel-container"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <CarouselTrack>
        {items.map((item, index) => (
          <CarouselCard
            key={item.name}
            rotation={getRotation(index)}
            active={index === currentIndex}
            elevation={index === currentIndex ? 8 : 4}
          >
            <CustomCard
              name={item.name}
              price={item.price}
              duration={item.duration}
              details={item.details}
              imagen={item.imagen}
            />
          </CarouselCard>
        ))}
      </CarouselTrack>
    </CarouselContainer>
  );
};

export default Carousel3D;