import { useQuery } from "react-query";
import { getUsuarios } from "../../services/usuarioService";

export default () => useQuery("usuarios", getUsuarios);

