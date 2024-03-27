export const setTokenLocalStorage = (token) =>
  localStorage.setItem("token", token);

export const getTokenLocalStorage = () => {
  const xToken = localStorage.getItem("token");
  if (!xToken) {
    return undefined;
  }
  return `Bearer ${xToken}`;
};

export const clearLocalStorage = () => localStorage.removeItem("token");
