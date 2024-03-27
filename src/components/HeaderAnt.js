import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { clearLocalStorage } from "../localstorage";

export default function Header() {
  const history = useHistory();
  function handleLogout() {
    clearLocalStorage();
    history.push("/");
  }
  return (
    <nav
      class="navbar navbar-dark bg-dark d-flex flex-row-reverse"
      style={{ marginBottom: 50, paddingRight: 30 }}
    >
      <Button variant="dark" onClick={handleLogout}>
        Logout
      </Button>
    </nav>
  );
}
