import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./footer.css";
const Footer = () => {
  return (
    <Container fluid className="footer mt-auto">
      <Row>
        <Col xs={12} className="d-flex justify-content-center">
          <p className="text-white footer_text text-center">
            MegaPrice - Todos los derechos reservados
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
