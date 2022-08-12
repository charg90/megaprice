import { Button, Col, Container, Form, Row } from "react-bootstrap";
import ReactGA from "react-ga4";
import { motion } from "framer-motion";
import sendEmail from "../../Services/EmailJs";
import { Helmet } from "react-helmet";
import Spinners from "./../../Components/Spinners/Spinners";
import "./contact.css";
import { useDebounce } from "./../../CustomHooks/useDebounce";
import React from "react";

const Contact = () => {
  const [wait] = useDebounce(true);

  const googleAnalyticsHandler = () => {
    ReactGA.event({
      category: `Form`,
      action: `Formulario enviado`,
    });
  };

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
      <Container className=" contenedorContact d-flex align-items-center mt-3 ">
        {wait ? (
          <Spinners />
        ) : (
          <Row className=" d-flex justify-content-center align-items-center ">
            <Col xs={12}>
              <h1 className="  mt-2 text-center h1 ">
                {" "}
                Para estar siempre en contacto vos nos podes escribir aca
              </h1>
            </Col>

            <Col xs={12} md={6} lg={6} className=" mt-5 mb-2 ">
              <motion.form
                onSubmit={sendEmail}
                className="form_contact p-4 "
                initial={{ x: "-300vh" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
              >
                <Form.Group>
                  <Form.Label className="label"> Nombre y Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre y Apellido"
                    name="nombreApellido"
                    autoFocus
                    required
                    className="control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label"> Empresa:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Empresa"
                    name="empresa"
                    required
                    className="control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label"> Email:</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="email"
                    name="email"
                    required
                    className="control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label"> Pais:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Pais"
                    name="pais"
                    required
                    className="control"
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label className="label"> Ciudad:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ciudad"
                    name="ciudad"
                    required
                    className="control"
                  />
                </Form.Group>
                <Form.Label className="label"> telefono/celular:</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="Telefono/Celular"
                  name="tel"
                  required
                  className="control"
                />
                <Form.Group>
                  <Form.Label className="label"> Motivo:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Motivo"
                    name="motivo"
                    required
                    className="control"
                  />
                  <Form.Control
                    as="textarea"
                    rows={3}
                    className="my-1"
                    name="comment"
                  />
                </Form.Group>
                <Button
                  type="submit"
                  className="btn btn-block"
                  onClick={googleAnalyticsHandler}
                >
                  ENVIAR
                </Button>
              </motion.form>
            </Col>
          </Row>
        )}
      </Container>
    </motion.div>
  );
};

export default Contact;
