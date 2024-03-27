import api from "./api";

export function doLogin(login, senha) {
  return api.post("/auth/login", { login, senha });
}

export function getAuthFromToken() {
  return api.get("/auth");
}
