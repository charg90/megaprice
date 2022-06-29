import { useGetProducts } from "../../CustomHooks/Http";
import { Container, Row, Button, Col } from "react-bootstrap";
import { buttons } from "./../../Components/Buttons/Buttons";
import Producto from "./Producto";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import Spinners from "./../../Components/Spinners/Spinners";
const Productos = () => {
  const [products, loading] = useGetProducts();
  const [filter, setFilter] = useState(products);
  const handlerFilter = (e) => {
    const categoria = e.target.value;
    const productsFilter = products.filter((p) => p.categoria === categoria);
    setFilter(productsFilter);
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
      <Container>
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
        <h1 className="text-center mt-3"> A Jugar !!!</h1>
        <Row className="d-flex ">
          {buttons &&
            buttons.map((button) => (
              <Col className=" d-flex justify-content-center">
                <Button
                  key={button.id}
                  as="input"
                  type="button"
                  value={button.value}
                  onClick={(e) => handlerFilter(e)}
                  className="mx-1 mt-3 buttons"
                />
              </Col>
            ))}
        </Row>

        {loading ? (
          <Spinners />
        ) : (
          <Row className="mt-3">
            {filter.map((p) => (
              <Producto key={p.id} {...p} />
            ))}
          </Row>
        )}
      </Container>
    </motion.div>
  );
};

export default Productos;
