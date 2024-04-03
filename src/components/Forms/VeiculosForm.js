import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormInput from "../FormInput";
import {
  editVeiculo,
  createVeiculo,
} from "../../services/veiculoService";
import SCVButton from '../SCVButton';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { toast } from "react-toastify";

export default function VeiculosForm({ veiculo, handleChange}){
  const [ renavamExists, setRenavamExists ] = useState(null);

  const history = useHistory();


  async function submit(e) {
    e.preventDefault();
    // setLoading(true);
    try {
      if (!veiculo.idVeiculo) {
        await createVeiculo(veiculo);
      } else {
        await editVeiculo(veiculo);
      }
      toast.success("Veiculo cadastrado com Sucesso");
      history.push("/veiculos")
    } catch (e) {
      toast.error(e?.message);
    } finally {
      // setLoading(false);
    }
  }

  return (
    <Form onSubmit={submit}>
    <h3>Cadastrar Veiculo</h3>
    <hr />

    <Row>
      <Col xs={1}>
        {veiculo?.idVeiculo && (
          <FormInput
            label="Id"
            onchange={handleChange}
            name="idVeiculo"
            disabled
            required
          />
        )}
      </Col>
    </Row>

    <Row>
      <Col xs={1}>
        <FormInput
          label="Id"
          name="idVeiculo"
          values={veiculo}
          disabled
          required
        />
      </Col>
      <Col xs={2}>
        <FormInput
          label="Renavam"
          onchange={handleChange}
          name="renavamVeiculo"
          values={veiculo}
          required
        />
      </Col>
      <Col xs={2}>
        <FormInput
          label="Placa"
          onchange={handleChange}
          name="placaVeiculo"
          values={veiculo}
          required
        />
      </Col>
    </Row>
    <Row>
      <Col xs={2}>
        <FormInput
          label="Marca"
          onchange={handleChange}
          values={veiculo}
          name="marcaVeiculo"
          required
        />
      </Col>
      <Col xs={3}>
        <FormInput
          label="Modelo"
          onchange={handleChange}
          name="modeloVeiculo"
          values={veiculo}
          required
        />
      </Col>
      <Col xs={4}>
        <FormInput
          label="Versao"
          onchange={handleChange}
          name="versaoVeiculo"
          values={veiculo}
          required
        />
      </Col>
    </Row>
    <Row>
      <Col xs={1}>
        <FormInput
          label="Fabricacao"
          onchange={handleChange}
          name="anofabVeiculo"
          values={veiculo}
          required
        />
      </Col>
      <Col xs={3}>
        <FormInput
          label="Chassi"
          onchange={handleChange}
          name="chassiVeiculo"
          values={veiculo}
          required
        />
      </Col>
      <Col xs={2}>
        <FormInput
          label="Combustivel"
          onchange={handleChange}
          name="combustivelVeiculo"
          values={veiculo}
          required
        />
      </Col>
    </Row>

    <Row>
      <Col xs={2}>
        <FormInput
          label="Cor"
          onchange={handleChange}
          name="corVeiculo"
          values={veiculo}
          required
        />
      </Col>
      <Col xs={2}>
        <FormInput
          label="Portas"
          onchange={handleChange}
          name="portasVeiculo"
          values={veiculo}
          required
        />
      </Col>
      <Col xs={2}>
        <FormInput
          label="Cambio"
          onchange={handleChange}
          name="cambioVeiculo"
          values={veiculo}
          required
        />
      </Col>
    </Row>
    <Row>
      <Col xs={2}>
        <FormInput
          label="Valor"
          onchange={handleChange}
          name="valorVeiculo"
          values={veiculo}
          required
          type='number'
        />
      </Col>
    </Row>
    <hr />

    <Button variant="primary" type="submit">
      {veiculo?.idVeiculo ? "Editar " : "Incluir "}
      Veiculo
    </Button>
  </Form>
  )
}
