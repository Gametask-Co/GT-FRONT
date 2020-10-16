import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import CardSubjectList from "../../components/CardSubjectList";
import Modal from "../../components/Modal";

import { useAuth } from "../../contents/auth";

import { ReactComponent as Plus } from "../../assets/icons/start.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

function Subject() {
  const { signed, user } = useAuth();

  const [show, setShow] = useState(false);
  // subject
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (signed === false) {
      history.push("/");
    }
  }, [signed]);

  function handleSubjectModal(e) {
    setShow(!show);
  }

  async function handleCreateSubject(e) {
    e.preventDefault();

    await api
      .post("/subject", {
        name,
        description,
        image,
        teacher_id: user.id,
      })
      .then(function (res) {
        console.log(res, "Create Subject ok!");

        setShow(!show);
        setName("");
        setDescription("");
        setImage("");
      })
      .catch(function (error) {
        console.log(error, "Error Subject error!");
      });
  }

  return (
    <Layout>
      <Styled.MenuWrapper>
        <h1>Menu lateral</h1>
      </Styled.MenuWrapper>
      <Styled.SubjectWrapper>
        <div>
          <h1>Disciplinas</h1>
          <div>
            <button onClick={handleSubjectModal}>
              <Plus />
            </button>
            <button>
              <Edit />
            </button>
          </div>
        </div>
        <CardSubjectList
          name="Sistemas Operacionais"
          teacher="Fulano de Tal"
          percentage="55"
        />
      </Styled.SubjectWrapper>

      <Modal onClose={handleSubjectModal} show={show}>
        <form onSubmit={handleCreateSubject}>
          <h2>Criar Disciplina</h2>

          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome da Disciplina"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            id="description"
            placeholder="Escreva aqui..."
            rows="5"
            cols="33"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <label htmlFor="image">Imagem</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />

          <div>
            <button onClick={handleSubjectModal}>Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Modal>

      {/* unfinish modal sucess  */}
      <Modal onClose={handleSubjectModal} show={show}>
        <form onSubmit={handleCreateSubject}>
          <h2>Adicionar Alunos</h2>

          <label htmlFor="name">Compartilhar link</label>
          <input
            type="text"
            id="name"
            placeholder="Nome da Disciplina"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            id="description"
            placeholder="Escreva aqui..."
            rows="5"
            cols="33"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <button onClick={handleSubjectModal}>Cancelar</button>
            <button type="submit">Salvar</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}

export default Subject;
