import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <Container fluid className="footer mt-auto ">
      <Row>
        <Col
          xs={12}
          md={4}
          lg={4}
          xl={4}
          className="d-flex justify-content-center "
        >
          <p className="text-white">
            MegaPrice - Todos los derechos reservados
          </p>
        </Col>
        <Col
          xs={12}
          md={4}
          lg={4}
          xl={4}
          className="d-flex justify-content-center"
        >
          <p className="text-white">Tel.: (5411) 4713-5577 / 4753-4105 </p>
        </Col>
        <Col
          xs={12}
          md={4}
          lg={4}
          xl={4}
          className="d-flex justify-content-center"
        >
          <p className="text-white">info@megaprice.com.ar</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
