import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Productos from "../../Pages/Productos/Productos";
import Spinners from "../Spinners/Spinners";
const Home = lazy(() => import("../../Pages/Home/Home"));
const Empresa = lazy(() => import("../../Pages/Empresa/Empresa"));
const Contact = lazy(() => import("../../Pages/Contact/Contact"));

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Suspense fallback={<Spinners />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="empresa" element={<Empresa />} />
          <Route path="productos" element={<Productos />} />
          <Route path="contacto" element={<Contact />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
