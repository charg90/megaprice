import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import Productos from "../../Pages/Productos/Productos";
import Spinners from "./../Spinners/Spinners";

import Home from "./../../Pages/Home/Home";
import Empresa from "./../../Pages/Empresa/Empresa";
import Contact from "./../../Pages/Contact/Contact";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="productos" element={<Productos />} />
        <Route path="contacto" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
