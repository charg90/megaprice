import React from "react";
import avion from "./../../img/avioncito.jpg";
import cubo from "./../../img/cubo.jpg";
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
          <img
            src={avion}
            className="d-block w-100 photo"
            alt="avioncito megaprice"
          />
          <div className="carousel-caption d-none d-md-block">
            <p className="avion">Juguetes para volar juntos.</p>
          </div>
        </div>

        <div className="carousel-item">
          <img
            src={cubo}
            className="d-block w-100 photo"
            alt="cubo megaprice"
          />
          <div className="carousel-caption d-none d-md-block ">
            <p className="cubo"> Juguetes para construir juntos.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
