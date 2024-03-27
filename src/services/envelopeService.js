import api from "./api";

export function getEnvelopes() {
  return api.get("/envelope");
}

export function getEnvelope(idEnvelope) {
  return api.get(`/envelope/detalhe/${idEnvelope}`);
}

export function createEnvelope(envelope) {
  return api.post(`/envelope`, envelope);
}

export function editEnvelope(envelope) {
  return api.put(`/envelope/${envelope?.idEnvelope}`, envelope);
}
