import { useQuery } from "react-query";
import { getLogs } from "../../services/logService";

export default () => useQuery("logs", getLogs);
