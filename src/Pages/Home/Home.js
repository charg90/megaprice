import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import "./Home.css";
const Home = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animated={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.5 } }}
    >
      <Helmet>
        <title>MegaPrice | Home</title>
        <meta
          name="description"
          content="Megaprice es una empresa orientada a la producción de distintas líneas de juguetes plásticos para la Primera Infancia, dentro de estándares elevados de calidad y a un precio accesible para el consumidor final."
        />
        <meta
          name="keywords"
          content="juguetes, juguetes de plástico, autos plásticos, primera infancia, juguetes pequeños, juguetes para encastrar, duraderos, seguros, playa, infantil, didáctico, little, nenes, nenas, bañera, playa."
        />
      </Helmet>

      <Container
        fluid
        className="d-flex flex-column  justify-content-center align-items-center margin mt-5 "
      >
        <Row className=" d-flex justify-content-center mt-5 ">
          <Col sm={10} className="">
            <p className=" text-center  home_text">
              Megaprice les ofrece una amplia gama de productos innovadores en
              juguetes plásticos para la primera infancia, desarrollados bajo
              estrictos estándares de calidad y seguridad.
            </p>
            <p className="text-center  home_text">
              Todos nuestros jueguetes están pensados para el desarrollo y la
              motivación de las niñas/niños ya que el juguete es la principal
              herramienta que les permite jugar y a través del juego desarrollar
              sus habilidades mentales, estimular su aprendizaje, permitirles
              experimentar y descubrir un mundo de conocimiento formas, colores,
              texturas y tamaños , además de fomentar la creatividad y la
              imaginación
            </p>
            <p className="text-center  home_text">
              Por eso año tras año, nuestras lineas de juguetes son
              complementadas con la incorporación de nuevos modelos, acompañando
              siempre el crecimiento y desarrollo de nuestros niños/niñas
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
