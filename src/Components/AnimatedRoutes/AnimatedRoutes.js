import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import { Empresa } from "../../Pages/Empresa/Empresa";
import Productos from "../../Pages/Productos/Productos";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="productos" element={<Productos />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
