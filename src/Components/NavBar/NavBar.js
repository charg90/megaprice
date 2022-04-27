import Logo from "./../../img/logo-megaprice-removebg-preview.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="dark"
      variant="dark  "
      className="nav_background"
    >
      <Container>
        <Navbar.Brand href="/">
          <Image
            src={Logo}
            alt="no se encontro"
            fluid
            style={{ width: "8rem" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto  ">
            <Nav.Link>
              <Link to="/empresa" className="navBarText">
                Empresa
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/productos" className="navBarText">
                Productos
              </Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/novedades" className="navBarText">
                Novedades
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
