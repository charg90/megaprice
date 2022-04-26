import { useState } from "react";
import { Button, Card, Col, Image, Modal } from "react-bootstrap";
import "./producto.css";
const Producto = ({ codigo, nombre, img, imgDescription }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col sm={6} className="mt-2 mb-2">
        <Card style={{ width: "10rem" }} className="h-100 producto-background ">
          <Card.Img variant="top" src={img} />
          <Card.Body className="d-flex flex-column">
            <Card.Title className="flex-grow-1 text-center text">
              {nombre.toUpperCase()}
            </Card.Title>
            <Card.Title className="mt-auto text ">Codigo:{codigo}</Card.Title>
            <Button
              variant="primary"
              className="mt-auto"
              onClick={() => {
                handleShow();
              }}
            >
              Ver mas
            </Button>
          </Card.Body>
        </Card>
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
