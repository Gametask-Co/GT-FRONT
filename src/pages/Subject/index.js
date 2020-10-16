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
  const { signed } = useAuth();

  const [show, setShow] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (signed === false) {
      history.push("/");
    }
  }, [signed]);

  function handleSubjectModal(e) {
    setShow(!show);
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
        <form action="#" method="post">
          <h2>Criar Disciplina</h2>

          <label htmlFor="name">Nome</label>
          <input type="text" id="name" placeholder="Nome da Disciplina" />

          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            id="description"
            placeholder="Escreva aqui..."
            rows="5"
            cols="33"
          />

          <label htmlFor="image">Imagem</label>
          <input type="file" id="image" name="image" accept="image/*" />

          <div>
            <button onClick={handleSubjectModal}>Cancelar</button>
            <button>Salvar</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}

export default Subject;
