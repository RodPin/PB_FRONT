import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Formik } from "formik";
import FormInput from "../components/FormInput";
import { editLoja, getLoja, createLoja } from "../services/lojaService";
import lojaSchema from "../utils/validators/lojaSchema";
import { BigTriangle } from "../components/PageLoader";

export default function IncluirEditarLoja() {
  const { idLoja } = useParams();
  const [loja, setLoja] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (idLoja) {
      setLoading(true);
      getLoja(idLoja)
        .then((rLoja) => {
          setLoja(rLoja);
        })
        .catch((e) => console.log("e", e))
        .finally(() => {
          console.log("fafa");
          setLoading(false);
        });
    }
  }, []);

  async function submitLoja(formLojaData) {
    try {
      if (!loja.idLoja) {
        await createLoja(formLojaData);
      } else {
        await editLoja(formLojaData);
      }
      alert("Sucesso");
    } catch (e) {
      alert(e?.message);
    }
  }

  if (idLoja && loading) {
    return <BigTriangle />;
  }

  return (
    <Container style={{ padding: "20px 40px" }}>
      <Formik
        initialValues={loja}
        validateOnChange={false}
        validationSchema={lojaSchema}
        onSubmit={(values, { setSubmitting }) => submitLoja(values)}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <h3>Informacoes loja</h3>
            <hr />
            <Row>
              <Col xs={1}>
                {values.idLoja && (
                  <FormInput
                    label="Id"
                    name="idLoja"
                    values={values}
                    disabled
                    error={errors}
                  />
                )}
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInput
                  label="CNPJ"
                  name="cnpjLoja"
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
              </Col>
              <Col>
                <FormInput
                  label="Inscricao Municipal"
                  values={values}
                  name="isMunicipalLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col>
                <FormInput
                  label="Inscricao Estadual"
                  values={values}
                  name="isEstadualLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInput
                  label="Razao Social"
                  values={values}
                  name="nomeLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col />
            </Row>
            <Row>
              <Col>
                <FormInput
                  label="Endereco"
                  values={values}
                  name="enderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col>
                <FormInput
                  label="Numero"
                  values={values}
                  name="numeroEnderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col>
                <FormInput
                  label="Complemento"
                  values={values}
                  name="complementoNumeroEnderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInput
                  label="Bairro"
                  values={values}
                  name="bairroEnderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col>
                <FormInput
                  label="Cidade"
                  values={values}
                  name="cidadeEnderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col>
                <FormInput
                  label="Estado"
                  values={values}
                  name="estadoEnderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
                />
              </Col>
              <Col>
                <FormInput
                  label="CEP"
                  values={values}
                  name="cepEnderecoLoja"
                  errors={errors}
                  handleChange={handleChange}
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
                      values={values}
                      name="dddTelefone1Loja"
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col xs={4}>
                    <FormInput
                      values={values}
                      name="Telefone1Loja"
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col xs={2}>
                    <FormInput
                      values={values}
                      name="dddTelefone2Loja"
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col xs={3}>
                    <FormInput
                      values={values}
                      name="Telefone2Loja"
                      errors={errors}
                      handleChange={handleChange}
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
                      //label="CEP"
                      values={values}
                      name="dddTelefone3Loja"
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col xs={4}>
                    <FormInput
                      //label="CEP"
                      values={values}
                      name="Telefone3Loja"
                      errors={errors}
                      handleChange={handleChange}
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
                      //label="CEP"
                      values={values}
                      name="dddFaxLoja"
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </Col>
                  <Col xs={4}>
                    <FormInput
                      //label="CEP"
                      values={values}
                      name="FaxLoja"
                      errors={errors}
                      handleChange={handleChange}
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormInput
                  label="Email"
                  name="emailLoja"
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
              </Col>
              <Col></Col>
              <Col>
                <FormInput
                  label="Site"
                  name="siteLoja"
                  values={values}
                  handleChange={handleChange}
                  errors={errors}
                />
              </Col>
            </Row>
            <hr />
            <Button variant="primary" type="submit">
              {idLoja ? "Gravar" : "Incluir"}
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
}
