import Logo from "./../../img/megaprice-logo-3d.png";
import { Container, Navbar, Nav, Image } from "react-bootstrap";
import "./NavBar.css";
import { Link } from "react-router-dom";
const NavBar = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="nav_background"
      bg="transparent"
      variant="dark"
    >
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Image
              src={Logo}
              alt="no se encontro"
              fluid
              style={{ width: "15rem" }}
            />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav " className="" />
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
              <Link to="/contacto" className="navBarText">
                Contacto
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
