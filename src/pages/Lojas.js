import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryLojas from "../hooks/useQuery/useQueryLojas";

function Lojas({ history }) {
  const { data: lojas, isLoading } = useQueryLojas();

  return (
    <PageLoader loading={isLoading}>
      <h3> Lojas</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome da loja</th>
            <th>CNPJ</th>
            <th>Numero Usuarios</th>
            <th>Veiculos</th>
            <th>Vendas</th>
            <th>Saldo</th>
          </tr>
        </thead>
        <tbody>
          {lojas?.map((loja) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => history.push(`/editar-loja/${loja.idLoja}`)}
            >
              <td>{loja.idLoja}</td>
              <td>{loja.nomeLoja}</td>
              <td>{loja.cnpjLoja}</td>
              <td>{loja.qtdUsuarios}</td>
              <td>{loja.qtdVeiculos}</td>
              <td>{loja.qtdCompras}</td>
              <td style={{color: loja.saldo === 0 ? "black" : loja.saldo > 0 ? 'green':"red"}}>{loja.saldo?.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <Button
        variant="primary"
        type="submit"
        onClick={() => history.push("/editar-loja")}
      >
        Incluir Nova Loja
      </Button>
    </PageLoader>
  );
}

export default Lojas;
