import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageLoader from "../components/PageLoader";
import { getCompra } from "../services/compraService";
import ComprasForm from '../components/Forms/ComprasForm';

export default function IncluirEditarVeiculo() {
  const [compra, setCompra] = useState({});
  const { idCompra } = useParams();
  const [loading, setLoading] = useState(!!idCompra);

  useEffect(() => {
    console.log('12',idCompra)
    if (idCompra) {
      getCompra(idCompra)
        .then((rCompra) => {
          console.log("rCompra",rCompra)
          setCompra(rCompra);
        })
        .catch((e) => alert(e.message))
        .finally(() => {
          setLoading(false);
        });
    }
  }, []);

  function handleChange(key, value) {
    if(key === 'valor'){
      value = parseFloat(value)
    } 
    const xCompra = { ...compra, [key]: value };
    setCompra(xCompra);
  }
  return (
    <PageLoader loading={loading}>
        <ComprasForm compra={compra} handleChange={handleChange} setCompra={setCompra} />
    </PageLoader>
  );
}