import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormInput from "../components/FormInput";
import { createLoja } from "../services/lojaService";

export default function IncluirEditarLoja() {
  const [loja, setLoja] = useState({});

  function handleChange(key, value) {
    const xLoja = { ...loja, [key]: value };
    setLoja(xLoja);
  }

  async function submit(e) {
    e.preventDefault();


    try {
      await createLoja(loja);
      alert("Sucesso");
    } catch (e) {
      alert(e?.message);
    }
  }

  return (
    <Container style={{ padding: "20px 40px" }}>
      <Form onSubmit={submit}>
        <h3>Cadastrar Loja</h3>
        <hr />
        <Row>
          <Col xs={1}>
            {loja?.id && (
              <FormInput
                label="Id"
                onchange={handleChange}
                name="idLoja"
                disabled
                required
              />
            )}
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              label="CNPJ"
              onchange={handleChange}
              values={loja}
              name="cnpjLoja"
              required
            />
          </Col>
          <Col>
            <FormInput
              label="Inscricao Municipal"
              onchange={handleChange}
              name="isMunicipalLoja"
              values={loja}
              required
            />
          </Col>
          <Col>
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
          <Col>
            <FormInput
              label="Endereco"
              onchange={handleChange}
              name="enderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col>
            <FormInput
              label="Numero"
              onchange={handleChange}
              name="numeroEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col>
            <FormInput
              label="Complemento"
              onchange={handleChange}
              name="complementoNumeroEnderecoLoja"
              values={loja}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              label="Bairro"
              onchange={handleChange}
              name="bairroEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col>
            <FormInput
              label="Cidade"
              onchange={handleChange}
              name="cidadeEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col>
            <FormInput
              label="Estado"
              onchange={handleChange}
              name="estadoEnderecoLoja"
              values={loja}
              required
            />
          </Col>
          <Col>
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
              <Col xs={3}>
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
          <Col>
            <Form.Label>
              <strong>Fax</strong>
            </Form.Label>

            <Row>
              <Col xs={2}>
                <FormInput
                  onchange={handleChange}
                  name="dddFaxLoja"
                  values={loja}
                />
              </Col>
              <Col xs={4}>
                <FormInput
                  onchange={handleChange}
                  name="FaxLoja"
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
        <Button variant="primary" type="submit">
          Gravar
        </Button>
      </Form>
    </Container>
  );
}
