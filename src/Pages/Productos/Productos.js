import { useEffect, useState } from "react";
import { useGetProducts } from "../../CustomHooks/Http";
import { Container, Row, Button, Col } from "react-bootstrap";
import { buttons } from "./../../Components/Buttons/Buttons";
import Producto from "./Producto";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Spinners from "./../../Components/Spinners/Spinners";
import "./producto.css";

const Productos = () => {
  const [products, loading] = useGetProducts();
  const [filter, setFilter] = useState(products);
  const [info] = useState(buttons);
  const [message, setMessage] = useState("");

  const handlerFilter = (e) => {
    const categoria = e.target.value;
    const productsFilter = products.filter((p) => p.categoria === categoria);
    const [infoFilter] = info.filter((e) => e.value === categoria);
    setFilter(productsFilter);
    setMessage(infoFilter.description);
  };

  useEffect(() => {
    setFilter(products);
  }, [products]);

  return (
    <motion.div
      intial={{ width: 0 }}
      animated={{ width: "100%" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.2 } }}
    >
      <Helmet>
        <title>MegaPrice | Productos</title>
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
        {loading ? (
          <Spinners />
        ) : (
          <>
            <h1 className="text-center mt-3"> A Jugar !!!</h1>
            <Row>
              <Col>
                <p className="text-center message p-2 mt-3">
                  El juego es una parte fundamental en la vida de los bebes,
                  niñas y niños ya que,gracias a el, mejoran su capacidad de
                  aprendizaje motivados por su curiosidad, como asi tambien
                  tiene la capacidad de reunir a los adultos y los niños/niñas
                  en interacciones divertidas y llenas de amor.{" "}
                </p>
              </Col>
            </Row>
            <Row className="d-flex justify-content-center   ">
              {buttons &&
                buttons.map((button) => (
                  <Col className=" d-flex justify-content-center ">
                    <Button
                      key={button.id}
                      as="input"
                      type="button"
                      value={button.value}
                      onClick={(e) => handlerFilter(e)}
                      className={button.styles}
                    />
                  </Col>
                ))}
            </Row>
            <Row
              className={
                message !== "" &&
                "message d-flex justify-content-center align-items-center  p-2 mt-3"
              }
            >
              {
                <Col>
                  <p className="my-0 text-center message ">{message}</p>
                </Col>
              }
            </Row>
            <Row className="mt-3">
              {filter.map((p) => (
                <Producto key={p.id} {...p} />
              ))}
            </Row>
          </>
        )}
      </Container>
    </motion.div>
  );
};

export default Productos;
