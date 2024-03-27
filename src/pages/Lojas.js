import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryLojas from "../hooks/useQuery/useQueryLojas";

function Lojas({ history }) {
  const { data: lojas, isLoading } = useQueryLojas();

  return (
    <PageLoader loading={isLoading}>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome da loja</th>
            <th>CNPJ</th>
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
