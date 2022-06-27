import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "service_8nnq1ai",
        "template_nnr9cnq",
        e.target,
        "n4WX9Oyn3Wg_n7Fqh"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form onSubmit={handleSubmit(sendEmail)}>
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
            <Form.Label> Empresa</Form.Label>
            <Form.Control
              type="text"
              placeholder="Empresa"
              name="empresa"
              {...register("empresa")}
            />
            <Form.Label> Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="email"
              name="email"
              {...register("email")}
            />
            <Form.Label> Pais</Form.Label>
            <Form.Control
              type="text"
              placeholder="Pais"
              name="pais"
              {...register("pais")}
            />
            <Form.Label> Ciudad</Form.Label>
            <Form.Control
              type="text"
              placeholder="Ciudad"
              name="ciudad"
              {...register("ciudad")}
            />
            <Form.Label> tel/cel</Form.Label>
            <Form.Control
              type="number"
              placeholder="Telefono/Celular"
              name="tel"
              {...register("tel")}
            />
            <Form.Label> Motivo</Form.Label>
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
            <Button type="submit">ENVIAR</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
