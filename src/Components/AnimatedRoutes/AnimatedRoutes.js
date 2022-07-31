import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Productos from "../../Pages/Productos/Productos";
import Home from "./../../Pages/Home/Home";
import Empresa from "./../../Pages/Empresa/Empresa";
import Contact from "./../../Pages/Contact/Contact";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence className="min-vh-100 background d-flex flex-column h-100">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home />}
          className="min-vh-100 background d-flex flex-column h-100"
        />
        <Route path="empresa" element={<Empresa />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
