import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Página Inicial Static</h1>
      <Link to="/signin">Pagina SignIn</Link>
      <br />
      <Link to="/dashboard">Pagina Dashboard</Link>
      <br />
      <Link to="/subject">Pagina Subjects</Link>
    </div>
  );
}

export default Home;
