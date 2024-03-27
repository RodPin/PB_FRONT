import React, { useState } from "react";
import { Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import FormInput from "../FormInput";
import { editCompra, createCompra } from "../../services/compraService";
import Select from "../Select";
import useQueryVeiculos from "../../hooks/useQuery/useQueryVeiculos";
import useQueryPessoas from "../../hooks/useQuery/useQueryPessoas";

export default function ComprasForm({ compra, handleChange }) {
  const { data: veiculos } = useQueryVeiculos();
  const { data: pessoas } = useQueryPessoas();

  async function submit(e) {
    e.preventDefault();
    // setLoading(true);
    try {
      if (!compra?.idCompra) {
        await createCompra(compra);
      } else {
        await editCompra(compra);
      }
      alert("compra cadastrada com Sucesso");
    } catch (e) {
        console.log("e",e)
      alert(e.message);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <Form onSubmit={submit}>
      <h3>Cadastrar Compra</h3>
      <hr />

      <Row>
        <Col xs={1}>
          {compra?.idCompra && (
            <FormInput
              label="Id"
              onchange={handleChange}
              values={compra}
              name="idCompra"
              disabled
              required
            />
          )}
        </Col>
      </Row>

      <Row>
        <Col xs={4}>
          <FormLabel>
            <strong>Veiculo</strong>
          </FormLabel>

          <Select
            data={veiculos}
            name="idVeiculo"
            labelKey="modeloVeiculo"
            onChange={handleChange}
            value={compra.idVeiculo}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormLabel>
            <strong>Pessoa</strong>
          </FormLabel>

          <Select
            data={pessoas}
            name="idPessoa"
            labelKey="nomePessoa"
            onChange={handleChange}
            value={compra.idPessoa}
          />

          {/* <FormInput label="CNPJ da Loja " name="cnpjLoja" required /> */}
        </Col>
      </Row>
      <Row>
        <Col xs={4}>
          <FormInput
            label="Valor"
            onchange={handleChange}
            name="valor"
            values={compra}
            type='number'
            required
          />
        </Col>
      </Row>
      <hr />

      <Button variant="primary" type="submit">
        {compra?.idCompra ? "Editar " : "Incluir "}
        Compra
      </Button>
    </Form>
  );
}
