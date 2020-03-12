import React, { useState, useEffect } from "react";

import api from "../../services/api";
import Modal from "../../components/Modal/Modal";

function Home() {
  const [show, setShow] = useState(true);
  const [name, setName] = useState("");
  // const [subject, setSubject] = useState('');
  const [due_date, setDueDate] = useState("");
  const [description, setDescription] = useState("");
  // const [to_do_list, setToDoList] = useState('');
  const [auth_user, setAuthUser] = useState("");

  const models = [
    { name: "Disciplina", activate: true },
    { name: "Projeto", activate: false },
    { name: "Avulsa", activate: false }
  ];

  useEffect(() => {
    async function authUser() {
      await api
        // .post("/user", {
        //   name: 'eullerTest',
        //   email: "euller@game1task.com",
        //   birthday: '12/29/2000',
        //   password_hash: "testGametask"
        // })
        .post("/user/auth", {
          email: "euller@game1task.com",
          password: "testGametask"
        })
        .then(function(res) {
          console.log("Auth user ok!");
          setAuthUser(res.data.token);
        })
        .catch(function(error) {
          console.log(error, "Auth user error!");
        });
    }

    authUser();
  }, []);

  function showModal(e) {
    setShow(!show);
  }

  async function handleCreateTask(e) {
    e.preventDefault();
    var config = {
      headers: { Authorization: `Bearer ${auth_user}` }
    };
    await api
      .post(
        "/task",
        {
          name,
          description,
          due_date
        },
        config
      )
      .then(function(res) {
        console.log(res, "Create task error!");
      });

    setShow(!show);
    setName("");
    setDueDate("");
    setDescription("");
    // setToDoList("");
  }

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
        Nova Atividade{" "}
      </a>
      
      <Modal onClose={showModal} show={true} type="alert">
        <h1>Concluir atividade?</h1>
        <p>
          Tem certeza que quer concluir esta atividade, após a conclusão não
          será mais possível altera-la.
        </p>
      </Modal>

      <Modal onClose={showModal} show={false} type="message">
        <div className="margin_center">
          <div className="between">
            <h3>Atividade Concluida</h3>
            <span>
              <i className="fa fa-times" aria-hidden="true"></i>
            </span>
          </div>
          <p>
            Você ganhou 15 pontos pela atividade 'Lista de Exercícios' de Banco
            de Dados.
          </p>
        </div>
      </Modal>

      <Modal onClose={showModal} show={false} type="modal">
        <div className="models">
          <section className="container">
            <h2>Modelos</h2>
            {models.map(model => (
              <button
                key={model.name}
                className={model.activate ? "item activate" : "item"}
                onClick={e => {
                  // showModal(e);
                }}
              >
                <span>{model.name}</span>
              </button>
            ))}
          </section>
        </div>

        <div className="content">
          <section className="container">
            <form onSubmit={handleCreateTask} className="container_between">
              <h2>Cadastrar Atividade</h2>

              <div>
                <label htmlFor="name">
                  Nome
                  <div className="">
                    {/* <img src="/static/icons/form_icon/icon_task.png" className="input_icon" /> */}
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Nome"
                      value={name}
                      onChange={e => setName(e.target.value)}
                      required
                    />
                  </div>
                </label>

                <div className="form_between">
                  <label htmlFor="subject">
                    Disciplina
                    <div>
                      {/* <img src="/static/icons/form_icon/icon_subject.png" className="input_icon" /> */}
                      <select
                        className="select"
                        name="subject"
                        id="subject"
                        required
                      >
                        <option value="0" selected disabled>
                          {" "}
                          Escolha uma disciplina
                        </option>
                        <option value="1"> Disciplina 1</option>
                        <option value="2"> Disciplina 2</option>
                      </select>
                    </div>
                  </label>
                  <label htmlFor="due_date">
                    Prazo
                    <div>
                      {/* <img src="/static/icons/form_icon/icon_date.png" className="input_icon" /> */}
                      <input
                        type="date"
                        name="due_date"
                        id="due_date"
                        placeholder="dd/mm/aaaa"
                        value={due_date}
                        onChange={e => setDueDate(e.target.value)}
                        required
                      />
                    </div>
                  </label>
                </div>

                <label htmlFor="description">
                  Descrição
                  <div>
                    {/* <img src="/static/icons/form_icon/icon_description.png" className="input_icon" /> */}
                    {/* <input type="text" name="description" id="description_field" placeholder="Descrição" className="input_text input_style font_description" required /> */}

                    <textarea
                      id="text"
                      name="description"
                      id="description"
                      value={description}
                      onChange={e => setDescription(e.target.value)}
                      rows="5"
                      placeholder="Descrição"
                    />
                  </div>
                </label>
              </div>

              <div className="between">
                <button
                  className="toggle-button"
                  id="centered-toggle-button"
                  onClick={e => {
                    showModal(e);
                  }}
                >
                  <span>
                    <i className="fa fa-times" aria-hidden="true"></i>Cancelar
                  </span>
                </button>
                <button type="submit">
                  <span>
                    <i className="fa fa-times" aria-hidden="true"></i>Confirmar
                  </span>
                </button>
              </div>
            </form>
          </section>
        </div>

        <div className="todo">
          <section className="container">
            <h2>Lista de Afarezes</h2>

            <label htmlFor="to_do_list">
              <div id="to_do_list">
                <div className="flex">
                  <span id="btn_todo">
                    <span className="btn_closed">
                      <i className="fa fa-times" aria-hidden="true"></i>
                    </span>
                  </span>
                  <div className="">
                    <div>
                      {/* <img src="/static/icons/form_icon/icon_todo.png" className="input_icon" /> */}
                      {/* <span><i class="fa fa-times" aria-hidden="true"></i></span> */}
                      <input
                        type="text"
                        name="to_do_name_0"
                        id="to_do_name_field"
                        placeholder="Questão 1"
                        className="input_text input_style font_description"
                        required
                      />
                    </div>
                    <div>
                      {/* <img src="/static/icons/form_icon/icon_description.png" className="input_icon" /> */}
                      {/* <span><i class="fa fa-times" aria-hidden="true"></i></span> */}
                      <textarea
                        id="to_do_description_field"
                        name="to_do_description_0"
                        rows="2"
                        placeholder="Descrição"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            </label>

            {/* <span><i className="fa fa-times" aria-hidden="true"></i></span> */}
          </section>
        </div>
      </Modal>
    </div>
  );
}

export default Home;
