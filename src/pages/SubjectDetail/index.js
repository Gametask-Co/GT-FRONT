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

function SubjectDetail() {
  const { signed, user, loading } = useAuth();

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

  const userName = user.name;
  const userEmail = user.email;

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/");
      } else {
        api.get("/subject").then(function (res) {
          setSubjects(res.data);
        });
      }
    }
  }, [signed, subjects, history, loading]);

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
        image,
      })
      .then(function (res) {
        console.log(res.data, "Create Subject ok!");

        setShow(!show);
        setName("");
        setDescription("");

        // console.log("res.data.id =======", res.data.id);
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
      <Styled.MenuWrapper>
        <span>INSTRUTOR</span>
        <span>ALUNOS</span>
      </Styled.MenuWrapper>
      <Styled.MenuWrapper>
        <span>RANKING</span>
      </Styled.MenuWrapper>

      <Styled.SubjectWrapper>
        {subjects.map((item) => (
          <CardSubjectList
            key={item.id}
            name={item.name}
            teacher="Fulano de Tal"
            percentage="55"
          />
        ))}
      </Styled.SubjectWrapper>
    </Layout>
  );
}

export default SubjectDetail;
