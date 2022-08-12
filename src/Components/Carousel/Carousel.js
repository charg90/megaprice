import React from "react";
import avion from "./../../img/IER_7467-01.jpeg";
import tren from "./../../img/IER_7508.jpg";
import cubo from "./../../img/IER_7521.jpg";
import "./Carousel.css";
const Carousel = () => {
  return (
    <div
      id="carouselExampleSlidesOnly"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={avion} className="d-block w-100 photo" alt="..." />
          <div className="carousel-caption ">
            <p className="avion">Juguetes para volar juntos.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={tren} className="d-block w-100 photo" alt="..." />
          <div className="carousel-caption ">
            <p className="tren">Juguetes para viajar siempre juntos.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={cubo} className="d-block w-100 photo" alt="..." />
          <div className="carousel-caption  ">
            <p className="cubo"> Juguetes para construir juntos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
