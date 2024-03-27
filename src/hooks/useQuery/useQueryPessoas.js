import { useQuery } from "react-query";
import { getPessoas } from "../../services/pessoaService";

export default () => useQuery("pessoas", getPessoas);
