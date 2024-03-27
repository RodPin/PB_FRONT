import api from "./api";

export function getVeiculos() {
  return api.get("/veiculo");
}

export function getVeiculo(idVeiculo) {
  return api.get(`/veiculo/detalhe/${idVeiculo}`);
}

export function createVeiculo(veiculo) {
  return api.post(`/veiculo`, veiculo);
}

export function editVeiculo(veiculo) {
  return api.put(`/veiculo/${veiculo?.idVeiculo}`, veiculo);
}
