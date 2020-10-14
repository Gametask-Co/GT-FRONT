import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import CardSubjectList from "../../components/CardSubjectList";

import { useAuth } from "../../contents/auth";

function Subject() {
  const { signed } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (signed === false) {
      history.push("/");
    }
  }, []);

  return (
    <Layout>
      {/* <div>
        <h1>Menu lateral</h1>
      </div> */}
      <Styled.SubjectWrapper>
        <div>
          <h1>Disciplinas</h1>
          <div>
            <span>0909</span>
            <span>kkkkk</span>
          </div>
        </div>
        <CardSubjectList name="Sistemas Operacionais" teacher="Fulano de Tal" percentage="55" />
      </Styled.SubjectWrapper>
    </Layout>
  );
}

export default Subject;
