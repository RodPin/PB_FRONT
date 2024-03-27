import { useQuery } from "react-query";
import { getLojas } from "../../services/lojaService";

export default () => useQuery("lojas", getLojas);
