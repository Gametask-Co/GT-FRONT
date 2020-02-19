import React from 'react';

import './Home.sass';

function Home() {
  return (
    <div class="box">
      <div id="logotext">
        <img
          id="logo"
          src="https://gametask.s3-sa-east-1.amazonaws.com/img/titulo-novo.png"
          alt="Logo Gametask"
        />
        <h2>Dê um UP na sua rotina!</h2>
      </div>
      <h1>Em Breve!</h1>
      <img
        id="game"
        src="https://gametask.s3-sa-east-1.amazonaws.com/img/logo-nova.png"
        alt="Logo Game"
      />
    </div>
  );
}

export default Home;
