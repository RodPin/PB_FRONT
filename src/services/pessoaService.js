import api from "./api";

export function getPessoas() {
  return api.get("/pessoa");
}

export function getPessoa(idPessoa) {
  return api.get(`/pessoa/detalhe/${idPessoa}`);
}

export function getPessoaCpfCnpj(cpfCnpjPessoa) {
  return api.get(`/pessoa/detalhe/cpfcnpj/${cpfCnpjPessoa}`);
}

export function createPessoa(pessoa) {
  return api.post(`/pessoa`, pessoa);
}

export function editPessoa(pessoa) {
  return api.put(`/pessoa/${pessoa?.idPessoa}`, pessoa);
}
