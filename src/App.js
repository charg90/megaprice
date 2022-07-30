import { HashRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

function App() {
  return (
    <Router>
      <NavBar />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
