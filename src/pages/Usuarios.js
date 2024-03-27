import { Button } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import PageLoader from "../components/PageLoader";
import useQueryUsuarios from "../hooks/useQuery/useQueryUsuarios";

function Usuarios({ history }) {
  const { data: usuarios, isLoading } = useQueryUsuarios();

  return (
    <PageLoader loading={isLoading}>
      <Table striped>
        <thead>
          <tr>
            <th>Nome Loja</th>
            <th>Id Usuario</th>
            <th>Nome Usuario</th>
            <th>Ult Acesso</th>
            <th>Nivel</th>
            <th>Status</th>
            <th>Login</th>
          </tr>
        </thead>
        <tbody>
          {usuarios?.map((usuario) => (
            <tr>
              <td>{usuario.loja?.nomeLoja}</td>
              <td>{usuario.idUsuario}</td>
              <td>{usuario.nomeUsuario}</td>
              <td>{usuario.dtUltAcesso}</td>
              <td>{usuario.nivelUsuario}</td>
              <td>{usuario.statusUsuario}</td>
              <td>{usuario.loginUsuario}</td>
            </tr>
          ))}
        </tbody>
      </Table>{" "}
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

export default Usuarios;
