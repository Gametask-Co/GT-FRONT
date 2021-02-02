import React, { useEffect, useState } from "react";
import { useHistory, Link } from "react-router-dom";

import {
  Header,
  Body,
  Footer,
  SocialButtons,
} from "../../components/Modais/styled";

import Form from "../../components/Form/Index";
import { Text, Textarea, Image } from "../../components/Inputs/Index";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import Container from "../../components/Container";
import CardSubjectList from "../../components/CardSubjectList";
import Modal from "../../components/Modal";

import { useAuth } from "../../contents/auth";

import api from "../../services/api";

import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Award } from "../../assets/icons/award.svg";
import { ReactComponent as Star } from "../../assets/icons/star.svg";

function Subject() {
  const { signed, user, loading } = useAuth();

  const [show, setShow] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showEditSubject, setShowEditSubject] = useState(false);

  // subject
  const [subjects, setSubjects] = useState([]);
  const [idSubject, setIdSubject] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  //student
  const [link, setLink] = useState("");
  const [students, setStudents] = useState(""); // []

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userFlag, setUserFlag] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        // history.push('/signin');
      } else {
        setUserName(user.name);
        setUserEmail(user.email);

        // VERIFY user is teacher or students
        // // user.teacher
        // api.get("/teacher/subjects").then(function (res) {
        api
          .get("subjects")
          .then(function (res) {
            console.log("res ------", res);
            console.log("res ------", res.status);

            if (user.student_id !== null) {
              setSubjects(res.data.student_user);
              setUserFlag(false);
            } else {
              setSubjects(res.data.teacher_user);
              setUserFlag(true);
            }

            // if (res.status != "error") {
            //   setSubjects(res.data);
            // }

            // if (res.data.student_user.length) {
            //   // setSubjects[res.data.student_user];
            //   console.log(
            //     "res.data.student_user.length",
            //     res.data.student_user.length
            //   );
            // } else {
            //   // setSubjects[res.data.teacher_user];
            //   console.log(
            //     "res.data.teacher_user.length",
            //     res.data.teacher_user.length
            //   );
            // }
          })
          .catch((error) => {
            // user student
            console.log("error ------", error);
            setSubjects([]);
          });
      }
    }
    // }, [signed, subjects, history, loading]);
  }, [signed, history, loading, user]);

  function handleSubjectModal(e) {
    setShow(!show);
  }
  function handleStudentModal(e) {
    setShowStudent(!showStudent);
  }

  function handleEditSubjectModal(e) {
    setShowEditSubject(!showEditSubject);
  }

  async function handleCreateSubject(e) {
    e.preventDefault();

    await api
      .post("/subjects", {
        name,
        description,
        image,
      })
      .then(function (res) {
        console.log(res.data, "Create Subject ok!");

        setShow(!show);
        setName("");
        setDescription("");

        setIdSubject(res.data.id);
        setLink("https://gametask.com.br/subject/" + res.data.id);
        setShowStudent(!showStudent);
      })
      .catch(function (error) {
        console.log(error, "Error Subject error!");
      });
  }

  async function handleStudentSubject(e) {
    e.preventDefault();

    await api
      .post("/subjects/student/email", {
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
      <Container>
        <Styled.MenuWrapper>
          <Styled.CircleProfile />
          <h3>{userFlag ? "Professor" : "Estudante"}</h3>
          <h1>{userName}</h1>
          <h3>{userEmail}</h3>
          <div>
            <h4>Medalhas</h4>
            <div>
              <Styled.Insignia color="#CCAF4E">
                <Award />
                999 <span> - Ouro</span>
              </Styled.Insignia>
              <Styled.Insignia color="#F0F0F0">
                <Award />
                888 <span> - Prata</span>
              </Styled.Insignia>
              <Styled.Insignia color="#E2673E">
                <Award />
                777 <span> - Bronze</span>
              </Styled.Insignia>
            </div>
          </div>
          <div>
            <h4>Troféus</h4>
            <div>
              <Styled.Insignia color="#CCAF4E">
                <Star />
                999 <span> - Ouro</span>
              </Styled.Insignia>
              <Styled.Insignia color="#F0F0F0">
                <Star />
                888 <span> - Prata</span>
              </Styled.Insignia>
              <Styled.Insignia color="#E2673E">
                <Star />
                777 <span> - Bronze</span>
              </Styled.Insignia>
            </div>
          </div>
        </Styled.MenuWrapper>
        <Styled.SubjectWrapper>
          <div>
            <h1>Disciplinas</h1>
            <div>
              <button onClick={handleSubjectModal}>
                <Plus />
              </button>
              <button onClick={handleEditSubjectModal}>
                <Edit />
              </button>
            </div>
          </div>

          {subjects.map((item) => (
            <Link key={item.id} to={`/subject/${item.id}`}>
              <CardSubjectList
                key={item.id}
                name={item.name}
                teacher="Fulano de Tal"
                percentage="55"
                tab={true}
              />
            </Link>
          ))}
        </Styled.SubjectWrapper>

        <Modal onClose={handleSubjectModal} show={show}>
          <Header>
            <h1>Criar Disciplina</h1>
          </Header>

          <Body>
            <Form onSubmit={handleCreateSubject}>
              {/* <label htmlFor="name">Nome</label> */}
              <Text
                name="name"
                value={name}
                placeholder="Nome da Disciplina"
                onChange={(e) => setName(e.target.value)}
                required
              >
                Nome
              </Text>

              <Textarea
                name="description"
                value={description}
                placeholder="Escreva aqui..."
                rows="5"
                cols="33"
                onChange={(e) => setDescription(e.target.value)}
                required
              >
                Descrição
              </Textarea>

              <Image
                name="image"
                value={image}
                accept="image/*"
                onChange={(e) => setImage("null")}
                // onChange={(e) => setImage(e.target.value)}
                // required
              >
                Imagem
              </Image>

              <div>
                <button onClick={handleSubjectModal}>Cancelar</button>
                <button type="submit">Continuar</button>
              </div>
            </Form>
          </Body>
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
              <button onClick={handleStudentModal}>Pular</button>
              <button type="submit">Concluir</button>
            </div>
          </form>
        </Modal>

        <Modal onClose={handleEditSubjectModal} show={showEditSubject}>
          <h2>Editar Disciplinas</h2>

          {subjects.map((item) => (
            <button key={item.id}>{item.name}</button>
          ))}
          <span onClick={handleEditSubjectModal}>Cancelar</span>
        </Modal>
      </Container>
    </Layout>
  );
}

export default Subject;
