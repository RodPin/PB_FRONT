import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryVeiculos from "../hooks/useQuery/useQueryVeiculos";
import useQueryAuth from "../hooks/useQuery/useQueryAuth";

function Veiculos({ history }) {
  const { data: veiculos, isLoading } = useQueryVeiculos();
  const { data: usuario } = useQueryAuth();

  let saldo = 0;
  veiculos?.map((veiculo) => {
    if (veiculo.lucro === undefined){
      saldo -= veiculo.valorVeiculo
    } else {
      saldo += veiculo.lucro;
    }
  });


  console.log('usuarioxxxs',usuario)
  let statusCor = (lucro) =>
    lucro === 0 ? "black" : lucro > 0 ? "green" : "red";
  return (
    <PageLoader loading={isLoading}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3> Veiculos</h3>
        {usuario.nivelUsuario !== "M" && (
          <h3>
            Saldo:{" "}
            <h3
              style={{
                color: statusCor(saldo),
              }}
            >
              {saldo.toLocaleString()}
            </h3>
          </h3>
        )}
      </div>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>Renavam</th>
            <th>Placa</th>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Versao</th>
            <th>Situacao</th>
            <th>Valor Compra</th>
            <th>Valor Venda</th>
            <th>Lucro</th>
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
              <td style={{ color: veiculo.vendido ? "green" : undefined }}>
                {veiculo.vendido ? "Vendido" : "Em Estoque"}
              </td>
              <td>{veiculo.valorVeiculo?.toLocaleString()}</td>
              <td>{veiculo.valorVenda?.toLocaleString()}</td>
              <td
                style={{
                  color: statusCor(veiculo.lucro),
                }}
              >
                {veiculo.lucro?.toLocaleString()}
              </td>
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
        Incluir Novo Veiculo
      </Button>
    </PageLoader>
  );
}

export default Veiculos;
