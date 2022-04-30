import { useState, useEffect } from "react";
import { db } from "./../Bd/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
// funcion encargada de traer los datos de los productos y manejar el loading
export const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProductos] = useState([]);
  const productosCollectionRef = collection(db, "productos");

  useEffect(() => {
    const getProductos = async () => {
      try {
        const data = await getDocs(productosCollectionRef);
        const product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        product.sort((a, b) => parseInt(a.codigo) - parseInt(b.codigo));
        setLoading(false);
        setProductos(product);
      } catch (err) {
        console.log(err);
      }
    };

    getProductos();
  }, []);
  return [products, loading];
};
