export const MASTER_NIVEL = ["M"];
export const SOCIO_NIVEL = [...MASTER_NIVEL, "S"];
export const GERENTE_NIVEL = [...SOCIO_NIVEL, "G"];
export const DOCUMENTALISTA_NIVEL = [...GERENTE_NIVEL, "d"];
export const VENDEDOR_NIVEL = [...DOCUMENTALISTA_NIVEL, "v"];

function isAvailableByNivel(nivel, usuario) {
  return !nivel?.includes(usuario?.nivelUsuario);
}

export default isAvailableByNivel;
