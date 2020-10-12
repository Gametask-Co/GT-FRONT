import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import Container from "../../components/Container";

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
    <Layout pageTitle="Disciplinas">
      <Container>
        <h1>Page Subject</h1>
      </Container>
    </Layout>
  );
}

export default Subject;
