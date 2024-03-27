import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { clearLocalStorage } from "../localstorage";

export default function Header() {
  const history = useHistory();
  function handleLogout() {
    clearLocalStorage();
    history.push("/");
  }
  return (
    <Navbar variant="dark" bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Dropdown"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Button variant="dark" onClick={handleLogout}>
            Logoutaaa
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
