import React, { useState, useEffect } from "react";
import { db } from "./../../Bd/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { Container, Row } from "react-bootstrap";
import Producto from "./Producto";

const Productos = () => {
  const [productos, setProductos] = useState([]);
  const productosCollectionRef = collection(db, "productos");

  useEffect(() => {
    const getProductos = async () => {
      const data = await getDocs(productosCollectionRef);
      const product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      product.sort((a, b) => parseInt(a.codigo) - parseInt(b.codigo));

      setProductos(product);
    };

    getProductos();
  }, []);
  return (
    <Container>
      <h1> Nuestros Jueguetes</h1>
      <Row className="mt-5">
        {productos.map((p) => (
          <Producto key={p.id} {...p} />
        ))}
      </Row>
    </Container>
  );
};

export default Productos;
