import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryPessoas from "../hooks/useQuery/useQueryPessoas";

function Pessoas({ history }) {
  const { data: pessoas, isLoading } = useQueryPessoas();

  return (
    <PageLoader loading={isLoading}>
      <h3> Pessoas</h3>
      <hr />
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>CPF/CNPJ</th>
            <th>Loja</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {pessoas?.map((pessoa) => (
            <tr
              style={{ cursor: "pointer" }}
              onClick={() => history.push(`/editar-pessoa/${pessoa.idPessoa}`)}
            >
              <td>{pessoa.idPessoa}</td>
              <td>{pessoa.cpfCnpjPessoa}</td>
              <td>{pessoa.loja?.nomeLoja}</td>
              <td>{pessoa.nomePessoa}</td>
              <td>{pessoa.emailPessoa}</td>
              <td>{pessoa.estadoEnderecoPessoa}</td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
      <hr />
      <Button
        variant="primary"
        type="submit"
        onClick={() => history.push("/editar-pessoa")}
      >
        Incluir
      </Button>
    </PageLoader>
  );
}

export default Pessoas;

