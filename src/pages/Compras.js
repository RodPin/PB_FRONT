import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryCompras from "../hooks/useQuery/useQueryCompras";

function Compras({ history }) {
  const { data: compras, isLoading } = useQueryCompras();

  return (
    <PageLoader loading={isLoading}>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Veiculo</th>
            <th>Pessoa</th>
            <th>Valor</th>
            <th>Cor</th>
          </tr>
        </thead>
        <tbody>
          {compras?.map((compra) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() =>
                history.push(`/editar-compra/${compra.idCompra}`)
              }
            >
              <td>{compra.idCompra}</td>
              <td>{compra.veiculo?.modeloVeiculo}</td>
              <td>{compra.pessoa?.nomePessoa}</td>
              <td>{compra.valor}</td>
              <td>{compra.veiculo?.corVeiculo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <Button
        variant="primary"
        type="submit"
        onClick={() => history.push("/editar-compra")}
      >
        Incluir Nova Compra
      </Button>
    </PageLoader>
  );
}

export default Compras;
