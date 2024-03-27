import api from "./api";

export function getCompras() {
  return api.get("/compra");
}

export function getCompra(idCompra) {
  return api.get(`/compra/detalhe/${idCompra}`);
}

export function createCompra(idVeiculo, idPessoa, valor) {
  return api.post(`/compra`, idVeiculo, idPessoa, valor);
}

export function editCompra(compra) {
  return api.put(`/compra/${compra?.idCompra}`, compra);
}
