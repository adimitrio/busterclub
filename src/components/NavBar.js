import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import './NavBar.css';
 
const NavBar = () => {
  return (
    <Navbar variant="dark" >
      <Container>
        <Navbar.Brand as={Link} to='/'>
         Buster Club
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to='/'>Home</Nav.Link>
          <Nav.Link as={Link} to='/category/terror'>Terror</Nav.Link>
          <Nav.Link as={Link} to='/category/accion'>Acción</Nav.Link>
          <Nav.Link as={Link} to='/snacks'>Snacks</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;