import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import FormInput from "../components/FormInput";
import {
  editEnvelope,
  getEnvelope,
  createEnvelope,
} from "../services/envelopeService";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import PageLoader from "../components/PageLoader";
import VeiculosForm from '../components/Forms/VeiculosForm';
import PessoasForm from "../components/Forms/PessoasForm";

export default function IncluirEditarEnvelope() {
  const { idEnvelope } = useParams();
  const [envelope, setEnvelope] = useState({});
  const [veiculo, setVeiculo] = useState({});
  const [pessoa, setPessoa] = useState({});
  const [loading, setLoading] = useState(!!idEnvelope);

  useEffect(() => {
    if (idEnvelope) {
      getEnvelope(idEnvelope)
        .then((rEnvelope) => {
          setEnvelope(rEnvelope);
        })
        .catch((e) => console.log("e", e))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  async function submitEnvelope(e) {
    e.preventDefault();

    setLoading(true);
    try {
      if (!envelope.idEnvelope) {
        await createEnvelope(envelope);
      } else {
        await editEnvelope(envelope);
      }
      alert("Envelope cadastrada com Sucesso");
    } catch (e) {
      alert(e?.message);
    } finally {
      setLoading(false);
    }
  }
  const handleChangeVeiculo = (key,value)=> { 
    const xVeiculo = { ...veiculo, [key]: value };
    setVeiculo(xVeiculo)
  };

  const handleChangePessoa = (key,value)=> { 
    const xPessoa = { ...pessoa, [key]: value };
    setPessoa(xPessoa)
  };

  return (
    <PageLoader loading={loading}>
      <VeiculosForm isEnvelope veiculo={veiculo} handleChange={handleChangeVeiculo} setVeiculo={setVeiculo}/>
      <div style={{ border: "1px solid #dee2e6" }}>
        <Tabs
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="1" title="Dados do Fornecedor">
            <Container style={{ padding: "20px 40px" }}>
              <h5>Dados do Fornecedor</h5>
            <PessoasForm isEnvelope pessoa={pessoa} handleChange={handleChangePessoa} setPessoa={setPessoa}/>
            </Container>
          </Tab>
          <Tab eventKey="2" title="CRLV de Entrada">
            <h1>TAB 2</h1>
          </Tab>
          <Tab eventKey="3" title="Opcionais">
            <h1>TAB 3</h1>
          </Tab>
          <Tab eventKey="4" title="Tramitacao">
            <h1>TAB 3</h1>
          </Tab>
          <Tab eventKey="5" title="Condicoes de Venda">
            <h1>TAB 3</h1>
          </Tab>
          <Tab eventKey="6" title="Dados do Comprador">
            <h1>TAB 3</h1>
          </Tab>
          <Tab eventKey="7" title="Recibo de Venda">
            <h1>TAB 3</h1>
          </Tab>
          <Tab eventKey="8" title="Dados do CRV">
            <h1>TAB 3</h1>
          </Tab>
        </Tabs>
      </div>
    </PageLoader>
  );
}
