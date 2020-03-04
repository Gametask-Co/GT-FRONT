import React, { useState, useEffect } from 'react';
import axios from 'axios';

import api from '../../services/api';
import Modal from '../../components/Modal/Modal';
import './Home.sass';

function Home() {
  const [show, setShow] = useState(false);

  useEffect(()=>{
    console.log("show", show);

    async function authUser() {
      // const response = await api
      //   .post('/user/auth', {
      const response = await axios
        .post('https://gametask.com.br/user/auth', {
          email: 'euller@gametask.com',
          password: 'test123'
        })
        .then(function(res) {
          console.log(res, 'deu ruim!');
        });
      console.log(response);
    }

    authUser();
  }, []);

  function showModal(e) {
    setShow(!show);
  };

  return (
    <div className="box">
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

      <button
        className="toggle-button"
        id="centered-toggle-button"
        onClick={e => {
          showModal(e);
        }}
      >
        {" "}
        show Modal{" "}
      </button>

      <Modal onClose={showModal} show={show}>

        <div className="models">logo</div>
        <div className="content">nav</div>
        <div className="todo">content</div>

        {/* Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis
        deserunt corrupti, ut fugit magni qui quasi nisi amet repellendus non
        fuga omnis a sed impedit explicabo accusantium nihil doloremque
        consequuntur. */}
      </Modal>

    </div>
  );
}

export default Home;
