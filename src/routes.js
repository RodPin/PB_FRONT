import React from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import Lojas from "./pages/Lojas";
import Logs from "./pages/Logs";
import Usuarios from "./pages/Usuarios";
import Pessoas from "./pages/Pessoas";
import Login from "./pages/Login";
import Veiculos from "./pages/Veiculos";
import Compras from "./pages/Compras";

import IncluirEditarLoja from "./pages/IncluirEditarLoja";
import { getTokenLocalStorage } from "./localstorage";
import Header from "./components/Header";
import InjectAxiosInterceptors from "./components/InjectAxiosInterceptors";
import IncluirEditarUsuario from "./pages/IncluirEditarUsuario";
import IncluirEditarPessoa from "./pages/IncluirEditarPessoa";
import IncluirEditarVeiculo from "./pages/IncluirEditarVeiculo";
import IncluirEditarEnvelope from "./pages/IncluirEditarEnvelope";
import IncluirEditarCompra from "./pages/IncluirEditarCompra";

function routes() {
  return (
    <BrowserRouter>
      <InjectAxiosInterceptors />
      <Route path="/" component={Login} exact />
      <PrivateRoute path="/logs" component={Logs} />
      <PrivateRoute path="/pessoas" component={Pessoas} />
      <PrivateRoute path="/lojas" component={Lojas} />
      <PrivateRoute path="/usuarios" component={Usuarios} />
      <PrivateRoute path="/veiculos" component={Veiculos} />
      <PrivateRoute path="/compras" component={Compras} />
      <PrivateRoute
        path="/editar-loja/:idLoja?"
        component={IncluirEditarLoja}
      />
      <PrivateRoute
        path="/editar-usuario/:idUsuario?"
        component={IncluirEditarUsuario}
      />
      <PrivateRoute
        path="/editar-pessoa/:idPessoa?"
        component={IncluirEditarPessoa}
      />
      <PrivateRoute
        path="/editar-veiculo/:idVeiculo?"
        component={IncluirEditarVeiculo}
      />
      <PrivateRoute
        path="/editar-envelope/:idEnvelope?"
        component={IncluirEditarEnvelope}
      />
      <PrivateRoute
        path="/editar-compra/:idCompra?"
        component={IncluirEditarCompra}
      />
      
    </BrowserRouter>
  );
}

const isAuthenticated = () => getTokenLocalStorage();

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuthenticated() ? (
        <>
          <Header />
          <Component {...props} />
        </>
      ) : (
        <Redirect to={{ pathName: "/", state: { from: props.location } }} />
      )
    }
  ></Route>
);

export default routes;
