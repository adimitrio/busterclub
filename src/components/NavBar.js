import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import './NavBar.css';
import logo from '../img/blockbuster-seeklogo.png';
 
const NavBar = () => {
  return (
    <Navbar variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to='/'>
        <img src={logo} width="90" height="50" />
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Catalogo</Nav.Link>
          <Nav.Link as={Link} to='/category/terror'>Terror</Nav.Link>
          <Nav.Link as={Link} to='/category/accion'>Acción</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;