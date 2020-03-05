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
      const response = await api
        .post('/user/auth', {
      // const response = await axios
      //   .post('https://gametask.com.br/user/auth', {
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

      <a
        className="toggle-button"
        id="centered-toggle-button"
        onClick={e => {
          showModal(e);
        }}
      >
        {" "}
        show Modal{" "}
      </a>

      <Modal onClose={showModal} show={show}>

        <div className="models">
          <section className="container">
            <h2>Modelos</h2>
            <button
              className="item"
              onClick={e => {
                // showModal(e);
              }}
            >
              <span>Avulsa</span>
            </button>
            <button
              className="item"
              onClick={e => {
                // showModal(e);
              }}
            >
              <span>Disciplina</span>
            </button>
            <button
              className="item"
              onClick={e => {
                // showModal(e);
              }}
            >
              <span>Projeto</span>
            </button>
          </section>
        </div>
        <div className="content">
          <h2>Cadastrar Atividade</h2>
          <button
            className="toggle-button"
            id="centered-toggle-button"
            onClick={e => {
              showModal(e);
            }}
          >
            <span>Cancelar</span>
          </button>
        </div>
        <div className="todo">
          <h2>Lista de Afarezes</h2>
        </div>

      </Modal>

    </div>
  );
}

export default Home;
