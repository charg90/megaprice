import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <Container fluid className="footer mt-auto">
      <Row>
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className="d-flex justify-content-center "
        >
          <p className="text-white footer_text">
            MegaPrice - Todos los derechos reservados
          </p>
        </Col>
        <Col
          xs={12}
          md={6}
          lg={6}
          xl={6}
          className="d-flex justify-content-center"
        >
          <p className="text-white footer_text">Tel.: (5411) 4753-4105 </p>
          <p className="text-white inline-block footer_text">
            / lineas rotativas
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
