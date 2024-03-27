import { useQuery } from "react-query";
import { getAuthFromToken } from "../../services/authService";

export default () =>
  useQuery("auth", getAuthFromToken, { staleTime: 5 * 60 * 1000 });


