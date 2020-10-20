import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import CardSubjectList from "../../components/CardSubjectList";
import Modal from "../../components/Modal";

import { useAuth } from "../../contents/auth";

import api from "../../services/api";

import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

function Subject() {
  const { signed, user } = useAuth();

  const [show, setShow] = useState(false);
  const [showStudent, setShowStudent] = useState(false);

  // subject
  const [subjects, setSubjects] = useState([]);
  const [idSubject, setIdSubject] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  //student
  const [link, setLink] = useState("");
  const [students, setStudents] = useState(""); // []

  const history = useHistory();

  console.log("user", user);
  console.log("signed", signed);

  const userName = user.name;
  const userEmail = user.email;

  useEffect(() => {
    if (signed === false) {
      history.push("/");
    } else {
      // await 2 sec
      api.get("/subject").then(function (res) {
        setSubjects(res.data);
      });
    }
  }, [signed, subjects]);

  function handleSubjectModal(e) {
    setShow(!show);
  }
  function handleStudentModal(e) {
    setShowStudent(!showStudent);
  }

  async function handleCreateSubject(e) {
    e.preventDefault();

    await api
      .post("/subject", {
        name,
        description,
      })
      .then(function (res) {
        console.log(res, "Create Subject ok!");

        setShow(!show);
        setName("");
        setDescription("");

        setIdSubject(res.id);
        setLink("https://gametask.netlify.app/subject/" + res.id);
        setShowStudent(!showStudent);
      })
      .catch(function (error) {
        console.log(error, "Error Subject error!");
      });
  }

  async function handleStudentSubject(e) {
    e.preventDefault();

    await api
      .post("/subject/student/email", {
        subject_id: idSubject,
        student_email: students,
      })
      .then(function (res) {
        console.log(res, "add Student on Subject ok!");
        setLink("");
        setStudents("");

        setShowStudent(!showStudent);
      })
      .catch(function (error) {
        console.log(error, "Error Student on Subject error!");
      });
  }

  return (
    <Layout>
      <Styled.MenuWrapper>
        <h1>{userName}</h1>
        <p>{userEmail}</p>

        {/* <h1>MEDALHAS</h1>
        <br/>
        <br/>
        <h1>TROFÉUS</h1> */}
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

        {subjects.map((item) => (
          <CardSubjectList
            key={item.id}
            name={item.name}
            teacher="Fulano de Tal"
            percentage="55"
          />
        ))}
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

          {/* <label htmlFor="image">Imagem</label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            // required
          /> */}

          <div>
            <button onClick={handleSubjectModal}>Cancelar</button>
            <button type="submit">Continuar</button>
          </div>
        </form>
      </Modal>

      <Modal onClose={handleStudentModal} show={showStudent}>
        <form onSubmit={handleStudentSubject}>
          <h2>Adicionar Alunos</h2>

          <label htmlFor="link">Compartilhar link</label>
          <input
            type="text"
            id="link"
            placeholder="Nome da Disciplina"
            value={link}
            disabled
          />

          <label htmlFor="students">Inserir alunos por email</label>
          <input
            type="text"
            id="students"
            placeholder="Nome da Disciplina"
            value={students}
            onChange={(e) => setStudents(e.target.value)}
            required
          />
          {/* <span>{students}</span> */}

          <div>
            <button onClick={handleStudentModal}>Cancelar</button>
            <button type="submit">Continuar</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}

export default Subject;
