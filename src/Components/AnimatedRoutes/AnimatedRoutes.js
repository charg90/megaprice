import React, { lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
//import Home from "../../Pages/Home/Home";
//import { Empresa } from "../../Pages/Empresa/Empresa";
//import Productos from "../../Pages/Productos/Productos";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Spinners from "../Spinners/Spinners";
//import Contact from "../../Pages/Contact/Contact";

const Home = lazy(() => import("../../Pages/Home/Home"));
const Empresa = lazy(() => import("../../Pages/Empresa/Empresa"));
const Productos = lazy(() => import("../../Pages/Productos/Productos"));
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
