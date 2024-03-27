import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import useQueryAuth from "../hooks/useQuery/useQueryAuth";
import { clearLocalStorage } from "../localstorage";

function Header() {
  const { data: usuario } = useQueryAuth();
  const history = useHistory();
  function handleLogout() {
    clearLocalStorage();
    history.push("/");
  }
  let isAdmin = usuario && usuario.nivelUsuario === "M" ? true : false;
  return (
    <>
      <Navbar variant="dark" bg="dark" expand={false} className="mb-3">
        <Container fluid>
          <div style={{ display: "flex", columnGap: 12 }}>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${false}`} />
            <Navbar.Brand as={Link} to="/lojas">
              {usuario?.loja?.nomeLoja}
            </Navbar.Brand>
          </div>
          <div style={{ display: "flex", columnGap: 12 }}>
            <Navbar.Text>
              Usuario : <a>{usuario?.nomeUsuario}</a>
            </Navbar.Text>
            <Button variant="dark" onClick={handleLogout}>
              Sair
            </Button>
          </div>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${false}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${false}`}
            placement="start"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${false}`}>
                {usuario?.loja?.nomeLoja}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                {isAdmin ? (
                  <>
                    <NavDropdown.Item as={Link} to="/editar-loja">
                      Cadastrar Lojas
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/editar-usuario">
                      Cadastrar Usuarios
                    </NavDropdown.Item>
                  </>
                ) : (
                  <>
                    <NavDropdown.Item as={Link} to="/editar-pessoa">
                      Cadastrar Pessoas
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/editar-veiculo">
                      Cadastrar Veiculos
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/editar-compra">
                      Cadastrar Compra
                    </NavDropdown.Item>
                  </>
                )}

                <NavDropdown.Divider />

                {isAdmin ? (
                  <>
                    <NavDropdown.Item as={Link} to="/lojas">
                      Listar Lojas
                    </NavDropdown.Item>
                    <NavDropdown.Item as={Link} to="/usuarios">
                      Listar Usuarios
                    </NavDropdown.Item>
                  </>
                ) : null}

                <NavDropdown.Item as={Link} to="/pessoas">
                  Listar Pessoas
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/veiculos">
                  Listar Veiculos
                </NavDropdown.Item>

                <NavDropdown.Item as={Link} to="/compras">
                  Listar Compras
                </NavDropdown.Item>

                {isAdmin ? (
                  <NavDropdown.Item as={Link} to="/logs">
                    Listar Logs
                  </NavDropdown.Item>
                ) : null}

                <NavDropdown.Divider />
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
