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
    <Navbar variant="dark" bg="dark" expand="lg" style={{ marginBottom: 30 }}>
      <Container fluid>
        <Navbar.Brand href="lojas">
          SCV / Loja : QUARTHY AUTOMOVEIS LTDA{" "}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Cadastros"
            menuVariant="dark"
          >
            <NavDropdown.Item href="/editar-loja">
              Cadastrar Lojas
            </NavDropdown.Item>
            <NavDropdown.Item href="/editar-usuario">
              Cadastrad Usuarios
            </NavDropdown.Item>
            <NavDropdown.Item href="/editar-pessoa">
              Cadastrar Pessoas
            </NavDropdown.Item>
            <NavDropdown.Item href="/editar-veiculo">
              Cadastrar Veiculos
            </NavDropdown.Item>
            <NavDropdown.Item href="/editar-envelope">
              Cadastrar Envelope
            </NavDropdown.Item>

            <NavDropdown.Divider />
            <NavDropdown.Item href="/logs">Listar Logs</NavDropdown.Item>
            <NavDropdown.Item href="/lojas">Listar Lojas</NavDropdown.Item>
            <NavDropdown.Item href="/pessoas">Listar Pessoas</NavDropdown.Item>
            <NavDropdown.Item href="/veiculos">
              Listar Veiculos
            </NavDropdown.Item>
            <NavDropdown.Item href="/usuarios">
              Listar Usuarios
            </NavDropdown.Item>
          </NavDropdown>

          <NavDropdown
            id="nav-dropdown-dark-example"
            title="Envelopes"
            menuVariant="dark"
          >
            <NavDropdown.Item href="#action/3.1">
              Entrada de Envelope
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Saida de Envelope
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">
              Tramitacao de Envelope
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Manutencao/Custos/Pos-Venda por Envelope
            </NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Usuario : <a href="#login">Alebrto Coelho</a>
          </Navbar.Text>
        </Navbar.Collapse>
        <>
          <Dropdown className="d-inline mx-2">
            <Dropdown.Toggle id="dropdown-autoclose-true">
              Default Dropdown
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-2" autoClose="inside">
            <Dropdown.Toggle id="dropdown-autoclose-inside">
              Clickable Outside
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-2" autoClose="outside">
            <Dropdown.Toggle id="dropdown-autoclose-outside">
              Clickable Inside
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className="d-inline mx-2" autoClose={false}>
            <Dropdown.Toggle id="dropdown-autoclose-false">
              Manual Close
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
              <Dropdown.Item href="#">Menu Item</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </>

        <Button variant="dark" onClick={handleLogout}>
          Logout
        </Button>
      </Container>
    </Navbar>
  );
}
