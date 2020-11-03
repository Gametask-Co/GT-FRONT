import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página Inicial Static</h1>
      <Link to="/signin">Página Login</Link>
      <br />
      <Link to="/dashboard">Página Dashboard</Link>
      <br />
      <Link to="/subject">Pagina Disciplinas</Link>
    </div>
  );
}

export default Home;
