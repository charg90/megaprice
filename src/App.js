import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import { Empresa } from "./Pages/Empresa/Empresa";
import Home from "./Pages/Home/Home";

import Productos from "./Pages/Productos/Productos";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="empresa" element={<Empresa />} />
        <Route path="productos" element={<Productos />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
