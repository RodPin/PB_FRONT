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

// idVeiculo: {
//   autoIncrement: true,
//   type: DataTypes.BIGINT,
//   allowNull: false,
//   primaryKey: true
// },
// opDirecaoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opAlarmeVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opAirBagMotoristaVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opVolRegAltVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opRodasVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opCompBordoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opBancoMAAVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// versaoVeiculo: {
//   type: DataTypes.STRING(50),
//   allowNull: true
// },
// opTEletricaVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opCapotaMaritmaVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opSensorChuVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opBancoDAVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opProtCacVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opEncCabTrasVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// modeloVeiculo: {
//   type: DataTypes.STRING(30),
//   allowNull: true
// },
// opAirBagDuploVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opSensorEstVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opAbsVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opRetFotoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opBancosCouroVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opTetoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// : {
//   type: DataTypes.STRING(4),
//   allowNull: true
// },
// combustivelVeiculo: {
//   type: DataTypes.STRING(20),
//   allowNull: true
// },
// renavamVeiculo: {
//   type: DataTypes.STRING(11),
//   allowNull: true
// },
// tipoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: false
// },
// opVEletricoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opRadioTfVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opRadioVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// cambioVeiculo: {
//   type: DataTypes.STRING(25),
//   allowNull: true
// },
// opArCondVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opDisqueteiraVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// anofabVeiculo: {
//   type: DataTypes.STRING(4),
//   allowNull: true
// },
// opRetEleVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// portasVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// corVeiculo: {
//   type: DataTypes.STRING(20),
//   allowNull: true
// },
// marcaVeiculo: {
//   type: DataTypes.STRING(20),
//   allowNull: true
// },
// opContTracaoVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opLimpVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opFarolXenVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opArQuenteVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// op4x4Veiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opRadioCdVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opDesTraseiroVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// chassiVeiculo: {
//   type: DataTypes.STRING(17),
//   allowNull: true
// },
// opContAutVelVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// opPortaCoposVeiculo: {
//   type: DataTypes.STRING(1),
//   allowNull: true
// },
// placaVeiculo: {
//   type: DataTypes.STRING(7),
//   allowNull: true
// },
// idUsuarioVeiculo: {
//   type: DataTypes.BIGINT,
//   allowNull: true
// },
// idLojaVeiculo: {
//   type: DataTypes.BIGINT,
//   allowNull: true
// }
