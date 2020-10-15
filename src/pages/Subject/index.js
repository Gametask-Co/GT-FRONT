import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import CardSubjectList from "../../components/CardSubjectList";

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

  function openSubjectModal(e) {
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
            <button onClick={openSubjectModal}>
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

      <div>
        <h1>Modal</h1>
      </div>
      
    </Layout>
  );
}

export default Subject;
