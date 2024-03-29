import { HashRouter as Router } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import NavBar from "./Components/NavBar/NavBar";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";
import ReactGA from "react-ga4";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    ReactGA.initialize("G-KWKYCP5EKR");
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
    });
    ReactGA.send(window.location.pathname + window.location.search);
  }, []);

  return (
    <Router className="min-vh-100 background d-flex flex-column h-100">
      <NavBar />
      <AnimatedRoutes className="min-vh-100 background d-flex flex-column h-100" />
      <Footer />
    </Router>
  );
}

export default App;
