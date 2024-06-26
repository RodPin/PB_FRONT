import React, { useState } from "react";
import { Row, Col, Form, Button, FormLabel } from "react-bootstrap";
import FormInput from "../FormInput";
import { editCompra, createCompra } from "../../services/compraService";
import Select from "../Select";
import useQueryVeiculos from "../../hooks/useQuery/useQueryVeiculos";
import useQueryPessoas from "../../hooks/useQuery/useQueryPessoas";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function ComprasForm({ compra, handleChange }) {
  const { data: veiculos } = useQueryVeiculos();
  const { data: pessoas } = useQueryPessoas();
  const history = useHistory();

  async function submit(e) {
    e.preventDefault();
    // setLoading(true);
    try {
      if (!compra?.idCompra) {
        await createCompra(compra);
      } else {
        await editCompra(compra);
      }
      toast.success("Venda cadastrada com Sucesso");
      history.push("/compras")
    } catch (e) {
        console.log("e",e)
      toast.error(e.message);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <Form onSubmit={submit}>
      <h3>Cadastrar Venda</h3>
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
            data={veiculos?.filter(veiculo => !veiculo.vendido)}
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
        Venda
      </Button>
    </Form>
  );
}
