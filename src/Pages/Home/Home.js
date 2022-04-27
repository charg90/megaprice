import React from "react";
import {
  Container,
  Carousel,
  Row,
  Col,
  Card,
  Button,
  CardGroup,
} from "react-bootstrap";
import Pic1 from "./../../img/pexels-cottonbro-3661243.jpg";
import Pic2 from "./../../img/pexels-markus-spiske-168866.jpg";
import pic3 from "./../../img/pexels-mike-191360.jpg";
import monopatin from "./../../img/112-monopatin.png";
import cGigante from "./../../img/117-camion-gigante.png";
import escarabajo from "./../../img/122-primer-escarabajo.png";
import "./Home.css";
const Home = () => {
  return (
    <Container fluid className="p-0  ">
      <Carousel>
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
      </Carousel>
      <Container className="  mt-5 container__info d-flex justify-content-center align-items-center rounded my-5 ">
        <Row>
          <Col xs={4} md={4} lg={4} className="d-flex align-items-center ">
            <i className="fa-solid fa-building-columns fa-2xl  text-white text-center" />
            <p className="m-0 text-white  text-center">
              Todos los medios de pagos
            </p>
          </Col>
          <Col xs={4} md={4} lg={4} className="d-flex align-items-center ">
            <i class="fa-solid fa-truck-fast fa-2xl  text-white"></i>
            <p class="text-white text-center m-0">Envios a toda la Argentina</p>
          </Col>
          <Col xs={4} md={4} lg={4} className="d-flex align-items-center">
            <i class="fa-solid fa-certificate fa-2xl   text-white "></i>
            <p class="text-white text-center  m-0">
              Productos Certificados IRAM
            </p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <h1 className="text-center">Los mas vendidos</h1>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-5">
          <CardGroup>
            <Card
              style={{ width: "10rem" }}
              className="mx-1 producto-background"
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
              className="mx-1 producto-background"
            >
              <Card.Img variant="top" src={escarabajo} alt="no hay imagen" />
              <Card.Body>
                <Card.Title className="text">Primer Escarabajo</Card.Title>
                <Card.Text className="text">Articulo : 112 nro </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Row>
      </Container>
    </Container>
  );
};

export default Home;
