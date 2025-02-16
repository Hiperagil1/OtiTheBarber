import React from "react";
import Header from "./Header"; // Asigură-te că calea este corectă
import HairstyleCarousel from "./HairstyleCarousel";
import Carousel3D from "./CustomCarousel"; // Importă CustomCarousel


const hairstyles = [
  { name: "Tuns Simplu", price: "45 lei", duration: "30 min", details: "Acest servciu este pentru barbati cu parul scurt si copii. La aceasta tunsoare nu se face skin fade.", imagen: "/images/haircut.jpg" },
  { name: "Tund Modern", price: "55 lei", duration: "40 min", details: "Skin fade, Low/Mid/High tapper, drop.", imagen: "/images/shave.jpg" },
  { name: "Pachet Premium", price: "100 lei", duration: "60 lei", details: "Servicii VIP, Tunds, Spalat, Masaj Capilar, Aranjarea parului. ", imagen: "/images/beardtrim.jpg" },
  { name: "Tuns barbati si contur barba", price: "65 lei", duration: "50 min", details: "Tuns pentru barbati si aranjarea barbii la forma si lungimea dorita.", imagen: "/images/hairdye.jpg" },
  { name: "Tund Modern", price: "55 lei", duration: "40 min", details: "Skin fade, Low/Mid/High tapper, drop.", imagen: "/images/shave.jpg" },
];

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <Header />
      <Carousel3D items={hairstyles} /> 


    </div>
  );
}

export default App;
