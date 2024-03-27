import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import FormInput from "../FormInput";
import {
  editPessoa,
  createPessoa,
  getPessoaCpfCnpj,
} from "../../services/pessoaService";
import SCVButton from '../SCVButton';

export default function PessoasForm({ isEnvelope, pessoa , handleChange, setPessoa}){
  const [ cpfCnpjExists, setCpfCnpjExists ] = useState(null);

  async function submit(e) {
    e.preventDefault();
    // setLoading(true);
    try {
      if (!pessoa.idPessoa) {
        await createPessoa(pessoa);
        alert("Pessoa cadastrada com Sucesso");
      } else {
        await editPessoa(pessoa);
        alert("Pessoa editada com Sucesso");
      }
    } catch (e) {
      alert(e?.message);
    } finally {
    //   setLoading(false);
    }
  }

if(isEnvelope && cpfCnpjExists === null) {
    return (
      <CpfCnpjInput  handleChange={handleChange} pessoa={pessoa} setPessoa={setPessoa} setCpfCnpjExists={setCpfCnpjExists}/>
    )
}



  return (
    <Form onSubmit={submit}>
        {pessoa.idPessoa ? <h3>Editar Pessoa</h3> : <h3>Cadastrar Pessoa</h3>}
        <hr />
        <Row>
          <Col xs={1}>
            {pessoa?.id && (
              <FormInput
                label="Id"
                onchange={handleChange}
                name="idPessoa"
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
              name="idPessoa"
              values={pessoa}
              disabled
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              label="CPF/CNPJ"
              onchange={handleChange}
              name="cpfCnpjPessoa"
              values={pessoa}
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              label="Identidade"
              onchange={handleChange}
              name="identidadePessoa"
              values={pessoa}
              required
            />
          </Col>
          <Col xs={2}>
            <FormInput
              onchange={handleChange}
              label="Orgao Emissor"
              name="orgaoEmissorIdentidadePessoa"
              values={pessoa}
              required
            />
          </Col>
        </Row>

        <hr />

        <Row>
          <Col>
            <FormInput
              label="Nome/Razao Social "
              onchange={handleChange}
              name="nomePessoa"
              values={pessoa}
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
              name="enderecoPessoa"
              values={pessoa}
              required
            />
          </Col>
          <Col>
            <FormInput
              label="Numero"
              onchange={handleChange}
              name="numeroEnderecoPessoa"
              values={pessoa}
              required
            />
          </Col>
          <Col>
            <FormInput
              onchange={handleChange}
              label="Complemento"
              name="complementoNumeroEnderecoPessoa"
              values={pessoa}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <FormInput
              label="Bairro"
              onchange={handleChange}
              name="bairroEnderecoPessoa"
              required
              values={pessoa}
            />
          </Col>
          <Col>
            <FormInput
              label="Cidade"
              onchange={handleChange}
              name="cidadeEnderecoPessoa"
              required
              values={pessoa}
            />
          </Col>
          <Col>
            <FormInput
              label="Estado"
              onchange={handleChange}
              name="estadoEnderecoPessoa"
              required
              values={pessoa}
            />
          </Col>
          <Col>
            <FormInput
              label="CEP"
              onchange={handleChange}
              name="cepEnderecoPessoa"
              required
              values={pessoa}
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
                  name="dddTelefone1Pessoa"
                  onchange={handleChange}
                  required
                  values={pessoa}
                />
              </Col>
              <Col xs={4}>
                <FormInput
                  name="Telefone1Pessoa"
                  onchange={handleChange}
                  required
                  values={pessoa}
                />
              </Col>
              <Col xs={2}>
                <FormInput
                  name="dddTelefone2Pessoa"
                  onchange={handleChange}
                  values={pessoa}
                />
              </Col>
              <Col xs={3}>
                <FormInput
                  name="Telefone2Pessoa"
                  onchange={handleChange}
                  values={pessoa}
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
                  name="dddTelefone3Pessoa"
                  onchange={handleChange}
                  values={pessoa}
                />
              </Col>
              <Col xs={4}>
                <FormInput
                  name="Telefone3LojaPessoa"
                  onchange={handleChange}
                  values={pessoa}
                />
              </Col>
            </Row>
          </Col>
        </Row>

        <hr />
        <Row>
          <Col xs={2}>
            <FormInput
              type="date"
              label="Dt Nascimento"
              name="dtNascimentoPessoa"
              pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
              onchange={handleChange}
              values={pessoa}
            />
          </Col>
          <Col xs={4}>
            <FormInput
              input="email"
              label="Email"
              name="emailPessoa"
              onchange={handleChange}
              required
              values={pessoa}
            />
          </Col>
        </Row>
        <hr />
        <Button variant="primary" type="submit">
          {pessoa.idPessoa ? "Gravar" : "Incluir"}
          Pessoa
        </Button>
      </Form>
  )
}

function CpfCnpjInput({handleChange, pessoa, setPessoa, setCpfCnpjExists}){
    const [ loading, setLoading ] = useState(false);
  
    function submitSearchCpfCnpj(e){
      e.preventDefault();
      if(!pessoa.cpfCnpjPessoa) {
        return alert("CPF/CNPJ vazio")
      };
      
      setLoading(true)
      getPessoaCpfCnpj(pessoa.cpfCnpjPessoa).then(rPessoa => {
        setPessoa(rPessoa);
        setCpfCnpjExists(true);
      }).catch(e=> {
        alert(e.message)
        if(e.status === 404){
          setCpfCnpjExists(false);
        }
      }).finally(()=> setLoading(false))
    }
    return (
      <Form>
        <h3>Cadastrar Envelope</h3>
        <hr />
  
        <Row >
        <Col xs={1}/>
        <Col xs={2}>
          <FormInput
            label="CPF/CNPJ"
            onchange={handleChange}
            name="cpfCnpjPessoa"
            values={pessoa}
            required
          />
        </Col>
        <Col xs={3}>
          <SCVButton variant="primary" onClick={submitSearchCpfCnpj} loading={loading}>Pesquisar CPF/CNPJ</SCVButton>
        </Col>
        </Row>
  
      </Form>
    )
}