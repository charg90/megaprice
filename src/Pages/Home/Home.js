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

      <Container fluid className=" p-0 d-flex">
        <Row className="p-0  d-flex justify-content-center ">
          <Col sm={4}>
            <p className=" mt-5 text-center  home_text">
              Megaprice le ofrece una amplia gama de productos innovadores en
              juguetes plásticos para la primera infancia, desarrollados bajo
              estrictos estándares de calidad y seguridad. Entre la gran
              variedad de juguetes ofrecemos distintos tipos de vehículos
              plásticos, como autos, camiones, aviones, barcos, trenes, etc;
              toda una línea de Juegos Didácticos pensados para el desarrollo y
              motivación de los más pequeños. Año tras año, nuestras líneas de
              juguetes son complementadas con nuevos modelos, manteniendo
              siempre presente el factor económico del mercado y brindándoles a
              nuestros clientes la mejor atención.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Home;
