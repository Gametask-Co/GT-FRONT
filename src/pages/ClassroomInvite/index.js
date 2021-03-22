import React, { useEffect, useState } from "react";
import Form from "../../components/Form/Index";

import { useHistory, useParams } from "react-router-dom";

import { Email } from "../../components/Inputs/Index";
import { ButtomBar, ButtomCTA } from "../../components/Buttons/Index";
import { Header, Body } from "../../components/Modais/styled";
import { InternModal } from "../../components/Modais";

import { BackgroundModal } from "../../components/Modais";

import { useAuth } from "../../contents/auth";
import api from "../../services/api";

function ClassroomInvite() {
  const { signed, user, loading } = useAuth();

  const [subjectName, setSubjectName] = useState("");
  const [students, setStudents] = useState("");

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/signin");
      } else {
        setStudents(user.email);

        api.get(`/subjects/${id}`).then(function (res) {
          console.log("subject id", res);
          setSubjectName(res.data.name);
        });
      }
    }
  }, [signed, history, loading, user, id]);

  async function handleStudentSubject(e) {
    e.preventDefault();
    api
      .post("/subjects/student/email", {
        subject_id: id,
        student_email: students,
      })
      .then(function (res) {
        console.log(res, "res content!");
        history.push("/");
      })
      .catch(function (error) {
        console.log(error, "Error Student on Subject error!");
        alert("O email inserido não é de um estudante cadastrado!");
      });
  }

  return (
    <BackgroundModal>
      <InternModal show={true}>
        <Header>
          <h1>Entrar na disciplina Algoritmos {subjectName}</h1>
        </Header>

        <Body>
          <Form onSubmit={handleStudentSubject}>
            <Email
              name="students"
              value={students}
              placeholder="Inserir alunos por email"
              onChange={(e) => setStudents(e.target.value)}
              required
            >
              Insira seu email
            </Email>

            <ButtomBar>
              <ButtomCTA
                secondary
                onClick={() => {
                  history.push("/signin");
                }}
              >
                Voltar
              </ButtomCTA>
              <ButtomCTA type="submit">Concluir</ButtomCTA>
            </ButtomBar>
          </Form>
        </Body>
      </InternModal>
    </BackgroundModal>
  );
}

export default ClassroomInvite;
