import { useGetProducts } from "../../CustomHooks/Http";
import { Container, Row, Button, Col } from "react-bootstrap";
import Producto from "./Producto";
// import { useEffect, useState } from "react";

const Productos = () => {
  // const [category, setCategory] = useState("");
  const [productos, setProductos] = useGetProducts();

  // const handlerButton = (e) => {
  //   setCategory(e.target.value);

  //   console.log("hola", e.target.value);
  // };

  // useEffect(() => {
  //   const products = productos.filter((p) => {
  //     if (category === "") {
  //       console.log(p);
  //       return p;
  //     } else if (category === p.categoria) {
  //       console.log(p);
  //       return p;
  //     }
  //     return productos;
  //   });
  //   setProductos(products);
  // }, [category]);

  return (
    <Container>
      <h1 className="text-center"> Nuestros Jueguetes</h1>
      {/* <Row>
        <Col>
          <Button
            as="input"
            type="button"
            value="little"
            onClick={(e) => handlerButton(e)}
          />
          <Button
            as="input"
            type="button"
            value="playa"
            onClick={(e) => handlerButton(e)}
          />
        </Col>
      </Row>
       */}
      <Row className="mt-5">
        {productos.map((p) => (
          <Producto key={p.id} {...p} />
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
