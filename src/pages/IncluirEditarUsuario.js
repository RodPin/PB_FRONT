import React, { useEffect, useRef, useState } from "react";
import { Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import FormInput from "../components/FormInput";
import Select from "../components/Select";
import RadioButton from "../components/RadioButton";
import useQueryLojas from "../hooks/useQuery/useQueryLojas";
import { createUsuario } from "../services/usuarioService";
import { useParams } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function IncluirEditarUsuario() {
  const { idUsuario } = useParams();
  const [loading, setLoading] = useState(!!idUsuario);
  const formRef = useRef(null);
  const history = useHistory();

  const { data: lojas } = useQueryLojas();
  const [usuario, setUsuario] = useState({});

  async function submitUsuario(e) {
    e.preventDefault();
    setLoading(true);

    try {
      if (!usuario.idUsuario) {
        if (usuario.senhaUsuario !== usuario.confirmacaoSenhaUsuario) {
          return toast.error("Senha nao sao iguais");
        }
        await createUsuario(usuario);
      } else {
        //await editLoja(usuario);
      }
      toast.success("Usuario cadastrado com sucesso !");
      history.push("/usuarios")
      formRef.current.reset();
    } catch (e) {
      toast.error(e?.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(key, value) {
    const xUsuario = { ...usuario, [key]: value };
    setUsuario(xUsuario);
  }

  return (
    <PageLoader loading={loading}>
      <Form onSubmit={submitUsuario} ref={formRef}>
        <h3>Cadastro de Usuario</h3>
        <hr />
        <Row>
          <Col xs={1}>
            {usuario?.id && (
              <FormInput
                label="Id"
                onchange={handleChange}
                name="idUsuario"
                disabled
                required
              />
            )}
          </Col>
        </Row>

        <Row>
          <Col xs={1}>
            <FormInput label="Id" name="idLoja" disabled required />
          </Col>
          <Col xs={3}>
            <FormLabel>
              <strong>Loja</strong>
            </FormLabel>

            <Select
              data={lojas}
              name="idLoja"
              labelKey="nomeLoja"
              onChange={handleChange}
            />

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
            <RadioButton
              label="Vendedor"
              value="v"
              checked={usuario.nivelUsuario === "v"}
              onChange={(nivel) => handleChange("nivelUsuario", nivel)}
            />
          </Col>
          <Col xs={2}>
            <RadioButton
              label="Documentalista"
              value="d"
              checked={usuario.nivelUsuario === "d"}
              onChange={(nivel) => handleChange("nivelUsuario", nivel)}
            />
          </Col>
          <Col xs={2}>
            <RadioButton
              label="Gerente"
              value="G"
              checked={usuario.nivelUsuario === "G"}
              onChange={(nivel) => handleChange("nivelUsuario", nivel)}
            />
          </Col>
          <Col xs={2}>
            <RadioButton
              label="Socio"
              value="S"
              checked={usuario.nivelUsuario === "S"}
              onChange={(nivel) => handleChange("nivelUsuario", nivel)}
            />
          </Col>
        </Row>

        <br />
        <Row>
          <Col md={3} sm={6}>
            <FormInput
              label="Login Usuario"
              name="loginUsuario"
              required
              onchange={handleChange}
            />
          </Col>
          <Col md={3} sm={6}>
            <FormInput
              label="Email Usuario"
              name="emailUsuario"
              required
              onchange={handleChange}
            />
          </Col>
        </Row>

        <hr />
        <Row>
          <Col xs={3}>
            <FormInput
              type="password"
              label="Senha Usuario"
              name="senhaUsuario"
              required
              onchange={handleChange}
            />
          </Col>
          <Col xs={3}>
            <FormInput
              type="password"
              label="Confirmacao Senha Usuario"
              name="confirmacaoSenhaUsuario"
              required
              onchange={handleChange}
            />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col xs={3}>
            <FormInput
              label="Nome Usuario"
              name="nomeUsuario"
              required
              onchange={handleChange}
            />
          </Col>
        </Row>

        <hr />
        <Button variant="primary" type="submit">
          {idUsuario ? "Gravar " : "Incluir "}
          Usuario
        </Button>
      </Form>
    </PageLoader>
  );
}
// ( xs: 0, sm: 576px, md: 768px, lg: 992px, xl: 1200px, xxl: 1400px );

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
