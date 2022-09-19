import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import './NavBar.css';
 
const NavBar = () => {
  return (
    <Navbar variant="dark" >
      <Container>
        <Navbar.Brand href="#home">
         Buster Club
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#peliculas">Peliculas</Nav.Link>
          <Nav.Link href="#snacks">Snacks</Nav.Link>
        </Nav>
        <CartWidget />
      </Container>
    </Navbar>
  )
}

export default NavBar;