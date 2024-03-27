import React from "react";
import { Navbar, Container, NavDropdown, Dropdown } from "react-bootstrap";
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
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">
          SCV - Loja : QUARTHY AUTOMOVEIS LTDA
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Usuario : <a href="#login">Alebrto Coelho</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <Button variant="dark" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}
