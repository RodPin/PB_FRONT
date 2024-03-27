import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { getVeiculo } from "../services/veiculoService";
import VeiculosForm from '../components/Forms/VeiculosForm';

export default function IncluirEditarVeiculo() {
  const [veiculo, setVeiculo] = useState({});
  const { idVeiculo } = useParams();
  const [loading, setLoading] = useState(!!idVeiculo);

  useEffect(() => {
    if (idVeiculo) {
      getVeiculo(idVeiculo)
        .then((rVeiculo) => {
          setVeiculo(rVeiculo);
        })
        .catch((e) => console.log("e", e))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  function handleChange(key, value) {
    const xVeiculo = { ...veiculo, [key]: value };
    setVeiculo(xVeiculo);
  }
  console.log(veiculo);
  return (
    <PageLoader loading={loading}>
        <VeiculosForm veiculo={veiculo} handleChange={handleChange} setVeiculo={setVeiculo} />
    </PageLoader>
  );
}