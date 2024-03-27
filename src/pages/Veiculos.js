import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryVeiculos from "../hooks/useQuery/useQueryVeiculos";

function Veiculos({ history }) {
  const { data: veiculos, isLoading } = useQueryVeiculos();

  return (
    <PageLoader loading={isLoading}>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Renavam</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Versao</th>
          </tr>
        </thead>
        <tbody>
          {veiculos?.map((veiculo) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() =>
                history.push(`/editar-veiculo/${veiculo.idVeiculo}`)
              }
            >
              <td>{veiculo.idVeiculo}</td>
              <td>{veiculo.renavamVeiculo}</td>
              <td>{veiculo.placaVeiculo}</td>
              <td>{veiculo.marcaVeiculo}</td>
              <td>{veiculo.modeloVeiculo}</td>
              <td>{veiculo.versaoVeiculo}</td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
      <hr />
      <Button
        variant="primary"
        type="submit"
        onClick={() => history.push("/editar-veiculo")}
      >
        Incluir Nova Veiculo
      </Button>
    </PageLoader>
  );
}

export default Veiculos;
