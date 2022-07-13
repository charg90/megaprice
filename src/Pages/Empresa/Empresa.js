import React from "react";
import Logo from "./../../img/logo-megaprice-removebg-preview.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import "./empresa.css";

const Empresa = () => {
  return (
    <motion.div
      intial={{ width: 0 }}
      animated={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Helmet>
        <title>MegaPrice | Empresa</title>
        <meta
          name="description"
          content="Megaprice es una empresa orientada a la producción de distintas líneas de juguetes plásticos para la Primera Infancia, dentro de estándares elevados de calidad y a un precio accesible para el consumidor final."
        />
        <meta
          name="keywords"
          content="juguetes, juguetes de plástico, autos plásticos, primera infancia, juguetes pequeños, juguetes para encastrar, duraderos, seguros, playa, infantil, didáctico, little, nenes, nenas, bañera, playa."
        />
      </Helmet>
      <Container className="   my-5  ">
        <Row className=" p-3 jumbotron_container  ">
          <Col sm={12} className="text-center">
            <Image
              src={Logo}
              alt="no se encontro"
              fluid
              style={{ width: "25rem" }}
            />
            <p className="jumbotron_letters text-white mt-2 ">
              Somos una empresa de capitales argentinos que desde su origen se
              ha dedicado a la fabricación y comercialización de juguetes de
              plástico para la primera infancia, a partir de los 12 meses de
              edad. Desde entonces la empresa ha asumido el compromiso de año
              tras año realizar nuevos juguetes, con el propósito de mantener
              constante y encendida la creatividad lúdica de los niños/niñas y
              como pensamiento fundamental creando juguetes seguros para
              ellos/ellas. Es en los niños/niñas en que el juguete es un
              concepto imprescindible y en el que toma su máximo valor en el
              contexto del desarrollo humano..
            </p>

            <p className="jumbotron_letters text-white">
              <strong>Misión:</strong> Megaprice tiene como misión brindar al
              público infantil productos innovadores y diferenciados que
              contribuyan a su diversión y desarrollo, dentro de unos estándares
              elevados de calidad y seguridad.
            </p>
            <p className="jumbotron_letters text-white">
              Lo principal es lograr estimular al niño para que éste crezca
              aprendiendo a desarrollar sus capacidades físicas, intelectuales,
              afectivas y comunicativas. Nuestro objetivo es crear juguetes los
              cuales permitan y acompañen la integración de padres e
              hijos/hijas, y de ambos en sociedad. Los niños/niñas comparten
              muchas horas con los juguetes por eso éstos deben ser capaces de
              resistir el uso que el niño/niña le dará, además de no suponerle
              un peligro. Megaprice es una fábrica que se encuentra comprometida
              plenamente con los requerimientos establecidos en materia de
              seguridad. Nuestros juguetes cuentan con un sistema europeo que no
              permite que las ruedas de los vehículos se desprendan de su eje,
              logrando a su vez que dicho eje permanezca brilloso evitando su
              opacamiento y oxidación. Los mismos también son sometidos a
              rigurosos análisis y ensayos, los cuales son realizados en el
              laboratorio de la Cámara Argentina de la Industria del Juguete,
              obteniendo luego certificados de conformidad emitidos por el INTI
              (Instituto Nacional de Tecnología Industrial). Además de
              encontrarse todos los productos certificados por las normas IRAM
              correspondientes también se encuentran aprobados por la Resolución
              583/2008 del Ministerio de Salud, la cual certifica la no
              contención de ftalato. Debido a la importancia que tienen los
              niños/niñas para nuestra empresa, la seguridad de ellos/ellas
              siempre será un objetivo primordial e ineludible para nosotros.
            </p>
          </Col>
        </Row>
      </Container>
    </motion.div>
  );
};

export default Empresa;
