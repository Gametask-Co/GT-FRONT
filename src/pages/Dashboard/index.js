import React from "react";

import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Página Inicial Dashboard!</h1>
      <Link to="/subject">Página Disciplinas</Link>
    </>
  );
}

export default Dashboard;
