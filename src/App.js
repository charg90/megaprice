import { HashRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <Router className="min-vh-100 background d-flex flex-column h-100">
      <NavBar />
      <AnimatedRoutes className="min-vh-100 background d-flex flex-column h-100" />
      <Footer />
    </Router>
  );
}

export default App;
