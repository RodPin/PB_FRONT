import React from "react";
import { Container, Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import FormInput from "../components/FormInput";
import Select from "../components/Select";
import RadioButton from "../components/RadioButton";
import useQueryLojas from "../hooks/useQuery/useQueryLojas";

export default function IncluirEditarUsuario() {
  const { data: lojas } = useQueryLojas();

  return (
    <Container style={{ padding: "20px 40px" }}>
      <Form>
        <h3>Cadastro de Usuario</h3>
        <hr />
        <Row>
          <Col xs={1}>
            <FormInput label="Id" name="idLoja" value="13" disabled required />
          </Col>
          <Col xs={3}>
            <FormLabel>
              <strong>Loja</strong>
            </FormLabel>

            <Select data={lojas} />

            {/* <FormInput label="CNPJ da Loja " name="cnpjLoja" required /> */}
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={3}>
            <p>
              <b>Nivel do Usuario</b>
            </p>
          </Col>
        </Row>

        <Row>
          <Col xs={2}>
            <RadioButton label="Inicializador" />
          </Col>
          <Col xs={2}>
            <RadioButton label="Fotografo" />
          </Col>
          <Col xs={2}>
            <RadioButton label="Vendedor" />
          </Col>
          <Col xs={2}>
            <RadioButton label="Documentalista" />
          </Col>
          <Col xs={2}>
            <RadioButton label="Gerente" />
          </Col>
          <Col xs={2}>
            <RadioButton label="Socio" />
          </Col>
        </Row>

        <br />
        <Row>
          <Col xs={3}>
            <FormInput label="Login Usuario" name="loginUsuario" required />
          </Col>
          <Col xs={3}>
            <FormInput label="Email Usuario" name="emailUsuario" required />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col xs={3}>
            <FormInput label="Senha Usuario" name="senhaUsuario" required />
          </Col>
          <Col xs={3}>
            <FormInput
              label="Confirmacao Senha Usuario"
              name="confirmaoSenhaUsuario"
              required
            />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={3}>
            <FormInput label="Nome Usuario" name="nomeUsuario" required />
          </Col>
        </Row>

        <hr />
        <Button variant="primary" type="submit">
          {/* {idLoja ? "Gravar" : "Incluir"} */}
          Incluir Usuario
        </Button>
      </Form>
    </Container>
  );
}

// idUsuario: {
//     autoIncrement: true,
//     type: DataTypes.BIGINT,
//     allowNull: false,
//     primaryKey: true
//   },
//   DTYPE: {
//     type: DataTypes.STRING(31),
//     allowNull: true
//   },
//   emailUsuario: {
//     type: DataTypes.STRING(40),
//     allowNull: false
//   },
//   senhaUsuario: {
//     type: DataTypes.STRING(32),
//     allowNull: false
//   },
//   nivelUsuario: {
//     type: DataTypes.STRING(1),
//     allowNull: false
//   },
//   statusUsuario: {
//     type: DataTypes.STRING(1),
//     allowNull: false
//   },
//   loginUsuario: {
//     type: DataTypes.STRING(40),
//     allowNull: false,
//     unique: "loginUsuario"
//   },
//   nomeUsuario: {
//     type: DataTypes.STRING(20),
//     allowNull: false,
//     unique: "nomeUsuario"
//   },
//   idLoja: {
//     type: DataTypes.BIGINT,
//     allowNull: true,
//     references: {
//       model: 'Loja',
//       key: 'idLoja'
//     }
//   },
//   dtUltAcesso: {
//     type: DataTypes.DATEONLY,
//     allowNull: true
//   }
// }
