import React, { useState } from "react";
import { Button, Card, Col, Image, Modal } from "react-bootstrap";
import { motion } from "framer-motion";

import ReactGA from "react-ga4";
import "./producto.css";

const Producto = ({ codigo, nombre, img, imgDescription }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  const handleShow = () => {
    setShow(true);
    ReactGA.event({
      category: `Producto UNidad`,
      action: `${codigo} '==>'${nombre}`,
    });
  };

  return (
    <>
      <Col
        xs={6}
        sm={6}
        md={4}
        lg={3}
        className="mt-2 mb-2  d-flex justify-content-center card1"
      >
        <motion.Card
          style={{ width: "14rem" }}
          className="h-100 producto-background d-flex flex-column"
          initial={{ x: "-300vh" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
        >
          <Card.Img
            variant="top"
            src={img}
            alt="no se ha encontrado la imagen"
          />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="flex-grow-1 text-center text text-wrap">
              {nombre.toUpperCase()}
            </Card.Title>
            <Card.Title className="mt-auto text flex-grow-1 text-center text-wrap">
              Codigo:{codigo}
            </Card.Title>
            <Button
              variant="primary"
              className="btn-block mt-auto btnInfo"
              onClick={() => {
                handleShow();
              }}
            >
              Ver mas
            </Button>
          </Card.Body>
        </motion.Card>
      </Col>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header className="producto-background d-flex justify-content-center ">
          <Modal.Title className="text ">{nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={imgDescription} className="img-fluid" />
        </Modal.Body>
        <Modal.Footer className="producto-background d-flex justify-content-center">
          <Button variant="primary" onClick={handleClose}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Producto;
