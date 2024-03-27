import api from "./api";

export function getLogs() {
  return api.get("/log");
}
