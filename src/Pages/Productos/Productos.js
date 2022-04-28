import { useGetProducts } from "../../CustomHooks/Http";
import { Container, Row, Button, Col } from "react-bootstrap";
import { buttons } from "./../../Components/Buttons/Buttons";
import Producto from "./Producto";
import { useEffect, useState } from "react";

const Productos = () => {
  const [products] = useGetProducts();
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
    <Container>
      <h1 className="text-center mt-3"> Nuestros Jueguetes</h1>
      <Row>
        <Col className="d-flex justify-content-center ">
          {buttons &&
            buttons.map((button) => (
              <>
                <Button
                  key={button.id}
                  as="input"
                  type="button"
                  value={button.value}
                  onClick={(e) => handlerFilter(e)}
                  className="mx-1 mt-3 buttons"
                />
              </>
            ))}
        </Col>
      </Row>

      <Row className="mt-3">
        {filter.map((p) => (
          <Producto key={p.id} {...p} />
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
