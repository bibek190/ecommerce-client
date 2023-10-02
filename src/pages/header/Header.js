import { Col, Form, Navbar, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsSearch } from "react-icons/bs";
import { RiAdminFill } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <Navbar expand="lg" className="bg-dark " variant="dark">
      <Container>
        <Navbar.Brand href="#home">E-shop Client</Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
            <Nav.Link href="#home">
              <RiAdminFill size={30} />
            </Nav.Link>
            <Nav.Link href="#link">
              <FaShoppingCart size={30} />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
