import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import Swal from "sweetalert2";

import "./contact.css";

const Contact = () => {
  const {
    register,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_8nnq1ai",
        "template_nnr9cnq",
        e.target,
        "n4WX9Oyn3Wg_n7Fqh"
      )
      .then((response) => {
        console.log(response);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Su mensaje ha sido enviado exitosamente",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((error) => console.log(error));
  };
  return (
    <motion.div
      intial={{ width: 0 }}
      animated={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Container>
        <Row className=" d-flex justify-content-center mb-2 ">
          <h1 className="  mt-3"> Nos encantaria estar en contacto con vos</h1>

          <Col xs={6} md={6} lg={6} className=" mt-4 ">
            <Form onSubmit={sendEmail} className="form_contact p-4 ">
              <Form.Group>
                <Form.Label> Nombre y Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Nombre y Apellido"
                  name="nombreApellido"
                  {...register("nombreApellido", {
                    required: true,
                    maxLength: 20,
                  })}
                />
                {errors.nombreApellido?.type === "required" && (
                  <p>nombre requerido</p>
                )}
              </Form.Group>
              <Form.Label> Empresa:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Empresa"
                name="empresa"
                {...register("empresa")}
              />
              <Form.Label> Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="email"
                name="email"
                {...register("email")}
              />
              <Form.Label> Pais:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Pais"
                name="pais"
                {...register("pais")}
              />
              <Form.Label> Ciudad:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ciudad"
                name="ciudad"
                {...register("ciudad")}
              />
              <Form.Label> telefono/celular:</Form.Label>
              <Form.Control
                type="number"
                placeholder="Telefono/Celular"
                name="tel"
                {...register("tel")}
              />
              <Form.Label> Motivo:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Motivo"
                name="motivo"
                {...register("motivo")}
              />
              <Form.Control
                as="textarea"
                rows={3}
                className="my-1"
                name="comment"
                {...register("comentario")}
              />
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
