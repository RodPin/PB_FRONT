import React from "react";
import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryPessoas from "../hooks/useQuery/useQueryPessoas";

function Pessoas({ history }) {
  const { data: pessoas, isLoading } = useQueryPessoas();

  return (
    <PageLoader loading={isLoading}>
      <Table striped>
        <thead>
          <tr>
            <th>Id</th>
            <th>CPF/CNPJ</th>
            <th>Nome da Pessoa</th>
            <th>Dt Nascimento</th>
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
              <td>{pessoa.nomePessoa}</td>
              <td>{pessoa.dtNascimentoPessoa}</td>
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
// idPessoa: {
//     autoIncrement: true,
//     type: DataTypes.BIGINT,
//     allowNull: false,
//     primaryKey: true
//   },
//   orgaoEmissorIdentidadePessoa: {
//     type: DataTypes.STRING(10),
//     allowNull: true
//   },
//   nomePessoa: {
//     type: DataTypes.STRING(40),
//     allowNull: false
//   },
//   emailPessoa: {
//     type: DataTypes.STRING(50),
//     allowNull: true
//   },
//   cepEnderecoPessoa: {
//     type: DataTypes.STRING(8),
//     allowNull: true
//   },
//   cpfCnpjPessoa: {
//     type: DataTypes.STRING(14),
//     allowNull: false
//   },
//   numeroEnderecoPessoa: {
//     type: DataTypes.STRING(10),
//     allowNull: true
//   },
//   dddTelefone1Pessoa: {
//     type: DataTypes.STRING(3),
//     allowNull: true
//   },
//   dddFaxPessoa: {
//     type: DataTypes.STRING(3),
//     allowNull: true
//   },
//   estadoEnderecoPessoa: {
//     type: DataTypes.STRING(2),
//     allowNull: true
//   },
//   enderecoPessoa: {
//     type: DataTypes.STRING(50),
//     allowNull: true
//   },
//   Telefone2Pessoa: {
//     type: DataTypes.STRING(9),
//     allowNull: true
//   },
//   dtNascimentoPessoa: {
//     type: DataTypes.DATEONLY,
//     allowNull: true
//   },
//   Telefone3Pessoa: {
//     type: DataTypes.STRING(9),
//     allowNull: true
//   },
//   identidadePessoa: {
//     type: DataTypes.STRING(20),
//     allowNull: true
//   },
//   dddTelefone2Pessoa: {
//     type: DataTypes.STRING(3),
//     allowNull: true
//   },
//   complementoNumeroEnderecoPessoa: {
//     type: DataTypes.STRING(10),
//     allowNull: true
//   },
//   cidadeEnderecoPessoa: {
//     type: DataTypes.STRING(30),
//     allowNull: true
//   },
//   dddTelefone3Pessoa: {
//     type: DataTypes.STRING(3),
//     allowNull: true
//   },
//   Telefone1Pessoa: {
//     type: DataTypes.STRING(9),
//     allowNull: true
//   },
//   tipoPessoa: {
//     type: DataTypes.STRING(1),
//     allowNull: true
//   },
//   bairroEnderecoPessoa: {
//     type: DataTypes.STRING(25),
//     allowNull: true
//   },
//   FaxPessoa: {
//     type: DataTypes.STRING(9),
//     allowNull: true
//   },
//   idUsuarioPessoa: {
//     type: DataTypes.BIGINT,
//     allowNull: true
//   },
//   idLojaPessoa: {
//     type: DataTypes.BIGINT,
//     allowNull: true
//   }
