import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import sendEmail from "../../Services/EmailJs";
import { Helmet } from "react-helmet";
import Spinners from "./../../Components/Spinners/Spinners";
import "./contact.css";
import { useDebounce } from "./../../CustomHooks/useDebounce";

const Contact = () => {
  const [wait] = useDebounce(true);

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
      <Container className=" ">
        {wait ? (
          <Spinners />
        ) : (
          <Row className=" d-flex justify-content-center align-items-center ">
            <h1 className="  mt-3 text-center h1 ">
              {" "}
              Para estar siempre en contacto vos nos podes escribir aca
            </h1>

            <Col xs={12} md={6} lg={6} className=" mt-4 ">
              <motion.form
                onSubmit={sendEmail}
                className="form_contact p-4 "
                initial={{ x: "-300vh" }}
                animate={{ x: 0 }}
                transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
              >
                <Form.Group>
                  <Form.Label> Nombre y Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Nombre y Apellido"
                    name="nombreApellido"
                    autoFocus
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
              </motion.form>
            </Col>
          </Row>
        )}
      </Container>
    </motion.div>
  );
};

export default Contact;
