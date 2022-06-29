import React from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import sendEmail from "../../Services/EmailJs";
import { Helmet } from "react-helmet";
import "./contact.css";

const Contact = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animated={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Helmet>
        <title>MegaPrice | Contacto</title>
        <meta
          name="description"
          content="Megaprice es una empresa orientada a la producción de distintas líneas de juguetes plásticos para la Primera Infancia, dentro de estándares elevados de calidad y a un precio accesible para el consumidor final."
        />
        <meta
          name="keywords"
          content="juguetes, juguetes de plástico, autos plásticos, primera infancia, juguetes pequeños, juguetes para encastrar, duraderos, seguros, playa, infantil, didáctico, little, nenes, nenas, bañera, playa."
        />
      </Helmet>
      <Container>
        <Row className=" d-flex justify-content-center mb-2 ">
          <h1 className="  mt-3 text-center">
            {" "}
            Nos encantaria estar en contacto con vos
          </h1>

          <Col xs={12} md={6} lg={6} className=" mt-4 ">
            <Form onSubmit={sendEmail} className="form_contact p-4 ">
              <Form.Group>
                <Form.Label> Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre y Apellido"
                  name="nombreApellido"
                  autofocus
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Empresa:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Empresa"
                  name="empresa"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Email:</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="email"
                  name="email"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Pais:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Pais"
                  name="pais"
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label> Ciudad:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Ciudad"
                  name="ciudad"
                  required
                />
              </Form.Group>
              <Form.Label> telefono/celular:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Telefono/Celular"
                name="tel"
                required
              />
              <Form.Group>
                <Form.Label> Motivo:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Motivo"
                  name="motivo"
                  required
                />
                <Form.Control
                  as="textarea"
                  rows={3}
                  className="my-1"
                  name="comment"
                />
              </Form.Group>
              <Button type="submit" className="btn btn-block">
                ENVIAR
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Contact;
