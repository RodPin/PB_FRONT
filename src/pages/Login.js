import React, { useEffect, useState } from "react";
import { doLogin } from "../services/authService";
import { getTokenLocalStorage, setTokenLocalStorage } from "../localstorage";
import logo from "../logo.svg";
import "../App.css";
import { toast } from "react-toastify";
function App({ history }) {
  const [login, setLogin] = useState("admin@admin.com");
  const [senha, setSenha] = useState("");

  useEffect(() => {
    if (getTokenLocalStorage()) {
      history.push("/veiculos");
    }
  }, []);

  function handleLogin(e) {
    e.preventDefault();
    doLogin(login, senha)
      .then((resposta) => {
        console.log("resposta",resposta)
        setTokenLocalStorage(resposta.token);
        history.push("/veiculos");
      })
      .catch((e) => toast.error(e.message));
  }

  return (
    <div>
      <form onSubmit={handleLogin}>
        <div style={{width:'100%',display:'flex',justifyContent:'center',marginTop:102,marginBottom:12}}>
        <h1>Sistema de Controle de Veiculos</h1>
        </div>
        <table width="100%" border="0" align="center">
          <tbody>
            <tr height="15">
              <td valign="middle" align="center">
                <b>LOGIN</b>
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />
        <br />

        <table
          width="500"
          border="1"
          align="center"
          style={{ border: "3px solid #3d6d80" }}
        >
          <tbody>
            <tr>
              <td colspan="2">
                <div align="center">
                  <br />

                  <font size="3" face="Verdana">
                    Login :
                  </font>
                  <input
                    type="text"
                    name="loginUsuario"
                    size="20"
                    maxlength="50"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                  />

                  <br />

                  <font size="3" face="Verdana">
                    Senha:
                  </font>
                  <input
                    type="password"
                    name="senhaUsuario"
                    size="20"
                    maxlength="40"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                  />

                  <br />
                  <br />
                </div>
              </td>
            </tr>
          </tbody>
        </table>

        <br />
        <br />

        <table width="500" border="0" align="center">
          <tbody>
            <tr>
              <td align="center">
                <button onClick={handleLogin}>Enviar</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default App;
