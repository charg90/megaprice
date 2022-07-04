import React from "react";
import { Container, Carousel, Row, Col, Card, Image } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import fondo from "./../../img/animals.jpg";
import Pic1 from "./../../img/pexels-cottonbro-3661243.jpg";
import Pic2 from "./../../img/pexels-markus-spiske-168866.jpg";
import pic3 from "./../../img/pexels-mike-191360.jpg";
import monopatin from "./../../img/112-monopatin.png";
import cGigante from "./../../img/117-camion-gigante.png";
import escarabajo from "./../../img/122-primer-escarabajo.png";
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
        className=" p-0    justify-content-center align-items-center   "
      >
        <img
          className="d-block w-100 img-responsive "
          src="https://img.freepik.com/free-vector/many-cute-animals-bamboo-forest_1308-32851.jpg?w=2000"
          alt="First slide"
          style={{ height: "42rem" }}
          fluid
        ></img>
        <p className="  text-center text carousel-caption ">
          Megaprice le ofrece una amplia gama de productos innovadores en
          juguetes plásticos para la primera infancia, desarrollados bajo
          estrictos estándares de calidad y seguridad. Entre la gran variedad de
          juguetes ofrecemos distintos tipos de vehículos plásticos, como autos,
          camiones, aviones, barcos, trenes, etc; toda una línea de Juegos
          Didácticos pensados para el desarrollo y motivación de los más
          pequeños. Año tras año, nuestras líneas de juguetes son complementadas
          con nuevos modelos, manteniendo siempre presente el factor económico
          del mercado y brindándoles a nuestros clientes la mejor atención.
        </p>
      </Container>
      {/* <Carousel>
          <Carousel.Item interval={2500}>
            <img
              className="d-block w-100 "
              src={Pic1}
              alt="First slide"
              style={{ height: "20rem" }}
              fluid
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={Pic2}
              alt="Second slide"
              style={{ height: "20rem" }}
            />
          </Carousel.Item>
          <Carousel.Item interval={1500}>
            <img
              className="d-block w-100"
              src={pic3}
              alt="Third slide"
              style={{ height: "20rem" }}
            />
          </Carousel.Item>
        </Carousel> */}
      {/* <Container className="  mt-5 container__info d-flex justify-content-center align-items-center rounded my-5 ">
          <Row>
            <Col xs={6} md={6} lg={66} className="d-flex align-items-center ">
              <i class="fa-solid fa-truck-fast fa-2xl  text-white"></i>
              <p class="text-white text-center m-0">
                Envios a toda la Argentina
              </p>
            </Col>
            <Col xs={6} md={6} lg={6} className="d-flex align-items-center">
              <i class="fa-solid fa-certificate fa-2xl   text-white "></i>
              <p class="text-white text-center  m-0">
                Productos Certificados IRAM
              </p>
            </Col>
          </Row>
        </Container> */}
      {/* <Container>
          <Row>
            <Col>
              <h1 className="text-center">Los mas vendidos</h1>
            </Col>
          </Row>
          <Row className="d-flex justify-content-center ">
            <Card
              style={{ width: "10rem" }}
              className="mx-1  producto-background"
            >
              <Card.Img variant="top" src={monopatin} alt="no hay imagen" />
              <Card.Body className="d-flex flex-column ">
                <Card.Title className="text">Monopatin</Card.Title>
                <Card.Text className="text mt-auto">
                  Articulo : 112 nro.
                </Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "10rem" }}
              className="mx-1 producto-background"
            >
              <Card.Img variant="top" src={cGigante} alt="no hay imagen" />
              <Card.Body>
                <Card.Title className="text">Camion Gigante</Card.Title>
                <Card.Text className="text">Articulo : 112 nro</Card.Text>
              </Card.Body>
            </Card>

            <Card
              style={{ width: "10rem" }}
              className="mx-1 mt-1 producto-background"
            >
              <Card.Img variant="top" src={escarabajo} alt="no hay imagen" />
              <Card.Body>
                <Card.Title className="text">Primer Escarabajo</Card.Title>
                <Card.Text className="text">Articulo : 112 nro </Card.Text>
              </Card.Body>
            </Card>
          </Row>
        </Container> */}
    </motion.div>
  );
};

export default Home;
