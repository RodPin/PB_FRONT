import React, { useEffect, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import PessoasForm from "../components/Forms/PessoasForm";
import FormInput from "../components/FormInput";
import PageLoader from "../components/PageLoader";
import { editPessoa, getPessoa, createPessoa } from "../services/pessoaService";
import { toast } from "react-toastify";

export default function IncluirEditarPessoa() {
  const { idPessoa } = useParams();
  const [pessoa, setPessoa] = useState({});
  const [loading, setLoading] = useState(!!idPessoa);

  useEffect(() => {
    if (idPessoa) {
      getPessoa(idPessoa)
        .then((rPessoa) => {
          setPessoa(rPessoa);
        })
        .catch((e) => console.log("e", e))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  function handleChange(key, value) {
    const xPessoa = { ...pessoa, [key]: value };
    setPessoa(xPessoa);
  }

  async function submit(e) {
    e.preventDefault();
    setLoading(true);
    try {
      if (!pessoa.idPessoa) {
        await createPessoa(pessoa);
        toast.success("Pessoa cadastrada com Sucesso");
      } else {
        await editPessoa(pessoa);
        toast.success("Pessoa editada com Sucesso");
      }
    } catch (e) {
      toast.error(e?.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <PageLoader loading={loading}>
      <PessoasForm pessoa={pessoa} handleChange={handleChange} setPessoa={setPessoa} />
    </PageLoader>
  );
}

