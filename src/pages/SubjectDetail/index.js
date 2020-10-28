import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import Modal from "../../components/Modal";

import { useAuth } from "../../contents/auth";

import api from "../../services/api";

import { ReactComponent as Remove } from "../../assets/icons/close.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";

function SubjectDetail() {
  const { signed, user, loading } = useAuth();

  const [show, setShow] = useState(false);
  const [subjects, setSubjects] = useState([]);

  //student
  const [students, setStudents] = useState([]);

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/");
      } else {
        api.get("/subject").then(function (res) {
          res.data.map((item) => {
            if (item.id === id) {
              console.log("students", item.students);
              // setStudents(...students, [item.students]);
              setStudents((students) => [...students, item.students]);
              console.log("setStudents", students);
            }
          });
        });
      }
    }
  }, [signed, subjects, history, loading]);

  function handleSubjectModal(e) {
    setShow(!show);
  }

  return (
    <Layout pageTitle="Disciplinas">
      <Styled.MenuWrapper>
        <h1>ALUNOS</h1>
        {[1, 2, 3].map((item) => (
          <div key={item}>
            <div>
              <Styled.CircleProfile />
              <span>Name</span>
            </div>
            <div>
              <button onClick={handleSubjectModal}>
                <Remove />
              </button>
              <button onClick={handleSubjectModal}>
                <Message />
              </button>
            </div>
          </div>
        ))}
      </Styled.MenuWrapper>
      <Styled.SubjectWrapper>
        <div>
          <h1>Detalhes</h1>
          <div>
            <button onClick={handleSubjectModal}>
              <Plus />
            </button>
            <button>
              <Edit />
            </button>
          </div>
        </div>

        <div>
          <div>
            <h2>Sistema Operacionais</h2>
          </div>

          <div>
            <span>marcos</span>
          </div>
        </div>
      </Styled.SubjectWrapper>
    </Layout>
  );
}

export default SubjectDetail;
