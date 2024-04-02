import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormInput from "../components/FormInput";
import PageLoader from "../components/PageLoader";
import { editLoja, getLoja, createLoja } from "../services/lojaService";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function IncluirEditarLoja() {
  const { idLoja } = useParams();
  const [loja, setLoja] = useState({});
  const history = useHistory();

  const [loading, setLoading] = useState(!!idLoja);

  useEffect(() => {
    if (idLoja) {
      getLoja(idLoja)
        .then((rLoja) => {
          setLoja(rLoja);
        })
        .catch((e) => console.log("e", e))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  async function submitLoja(e) {
    e.preventDefault();

    setLoading(true);
    try {
      if (!loja.idLoja) {
        await createLoja(loja);
      } else {
        await editLoja(loja);
      }
      alert("Loja cadastrada com Sucesso");
      history.push("/lojas")
    } catch (e) {
      alert(e?.message);
    } finally {
      setLoading(false);
    }
  }

  function handleChange(key, value) {
    console.log("handleChange");
    const xLoja = { ...loja, [key]: value };
    setLoja(xLoja);
  }

  return (
    <PageLoader loading={loading}>
      <Form onSubmit={submitLoja}>
        <h3>Cadastrar Loja</h3>
        <hr />
        <Row>
          <Col xs={1}>
            {loja?.id && (
              <FormInput
                label="Id"
                onchange={handleChange}
                name="idLoja"
                values={loja}
                disabled
                required
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <FormInput
              label="CNPJ"
              onchange={handleChange}
              name="cnpjLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              label="Inscricao Municipal"
              onchange={handleChange}
              name="isMunicipalLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              label="Inscricao Estadual"
              onchange={handleChange}
              name="isEstadualLoja"
              values={loja}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              label="Razao Social"
              onchange={handleChange}
              name="nomeLoja"
              values={loja}
              required
            />
          </Col>
          <Col />
        </Row>
        <Row>
          <Col xs={4}>
            <FormInput
              label="Endereco"
              onchange={handleChange}
              name="enderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={1}>
            <FormInput
              label="Numero"
              onchange={handleChange}
              name="numeroEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              label="Complemento"
              onchange={handleChange}
              name="complementoNumeroEnderecoLoja"
              values={loja}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={3}>
            <FormInput
              label="Bairro"
              onchange={handleChange}
              name="bairroEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={3}>
            <FormInput
              label="Cidade"
              onchange={handleChange}
              name="cidadeEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={1}>
            <FormInput
              label="Estado"
              onchange={handleChange}
              name="estadoEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              label="CEP"
              onchange={handleChange}
              name="cepEnderecoLoja"
              values={loja}
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Label>
              <strong>Telefones</strong>
            </Form.Label>

            <Row>
              <Col xs={2}>
                <FormInput
                  onchange={handleChange}
                  name="dddTelefone1Loja"
                  values={loja}
                  required
                />
              </Col>
              <Col xs={4}>
                <FormInput
                  onchange={handleChange}
                  name="Telefone1Loja"
                  values={loja}
                  required
                />
              </Col>
              <Col xs={2}>
                <FormInput
                  onchange={handleChange}
                  name="dddTelefone2Loja"
                  values={loja}
                />
              </Col>
              <Col xs={3}>
                <FormInput
                  onchange={handleChange}
                  name="Telefone2Loja"
                  values={loja}
                />
              </Col>
            </Row>
          </Col>
          <Col>
            <Form.Label>
              <strong>.</strong>
            </Form.Label>

            <Row>
              <Col xs={2}>
                <FormInput
                  onchange={handleChange}
                  name="dddTelefone3Loja"
                  values={loja}
                />
              </Col>
              <Col xs={4}>
                <FormInput
                  onchange={handleChange}
                  name="Telefone3Loja"
                  values={loja}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              label="Email"
              onchange={handleChange}
              name="emailLoja"
              values={loja}
              required
            />
          </Col>
          <Col></Col>
          <Col>
            <FormInput
              label="Site"
              onchange={handleChange}
              name="siteLoja"
              values={loja}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col xs={2}>
            <Button variant="primary" type="submit">
              {idLoja ? "Gravar" : "Incluir Loja"}
            </Button>
          </Col>
          <Col></Col>
          <Col xs={1}>
            <Button>Voltar</Button>
          </Col>
        </Row>
      </Form>
    </PageLoader>
  );
}
