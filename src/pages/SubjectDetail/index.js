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
  const [subjects, setSubjects] = useState([]);

  //student
  const [students, setStudents] = useState(""); // []

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/");
      } else {
        // api.get("/subject").then(function (res) {
        //   setSubjects(res.data);
        // });
      }
    }
  }, [signed, subjects, history, loading]);

  function handleSubjectModal(e) {
    setShow(!show);
  }

  return (
    <Layout pageTitle="Disciplinas">
      <Styled.MenuWrapper>
        <h1>RANKING</h1>
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
      </Styled.SubjectWrapper>
    </Layout>
  );
}

export default SubjectDetail;
