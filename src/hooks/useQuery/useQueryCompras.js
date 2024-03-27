import { useQuery } from "react-query";
import { getCompras } from "../../services/compraService";

export default () => useQuery("compras", getCompras);
