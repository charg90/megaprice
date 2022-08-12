import React from "react";
import Logo from "./../../img/megaprice-logo-3d.png";
import { Container, Image, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { useDebounce } from "./../../CustomHooks/useDebounce";
import Spinners from "../../Components/Spinners/Spinners";
import "./empresa.css";

const Empresa = () => {
  const [wait] = useDebounce(true);
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

      <Container className="   my-1  contenedor d-flex align-items-center ">
        {wait ? (
          <Spinners />
        ) : (
          <Row className=" p-3  ">
            <motion.Col
              sm={12}
              className=" jumbotron_container p-4"
              initial={{ x: "-300vh" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", duration: 1.5, bounce: 0.3 }}
            >
              <Image
                src={Logo}
                alt="no se encontro"
                fluid
                style={{ width: "20rem" }}
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
                contribuyan a su diversión y desarrollo, dentro de unos
                estándares elevados de calidad y seguridad.
              </p>
              <p className="jumbotron_letters text-white">
                Lo principal es lograr estimular al niño para que éste crezca
                aprendiendo a desarrollar sus capacidades físicas,
                intelectuales, afectivas y comunicativas. Nuestro objetivo es
                crear juguetes los cuales permitan y acompañen la integración de
                padres e hijos/hijas, y de ambos en sociedad. Los niños/niñas
                comparten muchas horas con los juguetes por eso éstos deben ser
                capaces de resistir el uso que el niño/niña le dará, además de
                no suponerle un peligro. Megaprice es una fábrica que se
                encuentra comprometida plenamente con los requerimientos
                establecidos en materia de seguridad. Los mismos también son
                sometidos a rigurosos análisis y ensayos, los cuales son
                realizados en los laboratorios habilitados con tal fin, contando
                de esta manera con los certificados habilitados
                correspondientes. Debido a la importancia que tienen los
                niños/niñas para nuestra empresa, la seguridad de ellos/ellas
                siempre será un objetivo primordial e ineludible para nosotros.
              </p>
            </motion.Col>
          </Row>
        )}
      </Container>
    </motion.div>
  );
};

export default Empresa;
