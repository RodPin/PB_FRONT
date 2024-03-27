import { useQuery } from "react-query";
import { getVeiculos } from "../../services/veiculoService";

export default () => useQuery("veiculos", getVeiculos);
