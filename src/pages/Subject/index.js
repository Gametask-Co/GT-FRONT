import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import Container from "../../components/Container";

function Subject() {
  const history = useHistory();

  useEffect(() => {
    // if value signed is false return to /
    // history.push("/");
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
