import api from "./api";

export function getUsuarios() {
  return api.get("/usuario");
}

export function getUsuario(idUsuario) {
  return api.get(`/usuario/detalhe/${idUsuario}`);
}

export function createUsuario(usuario) {
  return api.post(`/usuario`, usuario);
}

