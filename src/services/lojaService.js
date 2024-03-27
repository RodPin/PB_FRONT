import api from "./api";

export function getLojas() {
  return api.get("/loja");
}

export function getLoja(idLoja) {
  return api.get(`/loja/detalhe/${idLoja}`);
}

export function createLoja(loja) {
  return api.post(`/loja`, loja);
}

export function editLoja(loja) {
  return api.put(`/loja/${loja?.idLoja}`, loja);
}
