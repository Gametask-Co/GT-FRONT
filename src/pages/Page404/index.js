import React from "react";
import { Link } from "react-router-dom";

import Layout from "../../components/Layout";
import { Col, Container } from "../../components/Grid/Index";

import * as Styled from "./styled";

function Page404() {
  return (
    <Styled.Background>
      <Layout header={false}>
        <Container>
          <Styled.RowStyled>
            <Col lg="4" md="6" sm="8" xs="12">
              <Styled.LoginWrapper>
                <Styled.BodyPageError>
                  <Styled.Gametask />
                  <div>
                    <h1>404!</h1>
                    <span>Página não encontrada</span>
                    <p>Não sabe como veio parar aqui?</p>
                    <Link to="/">Voltar para página inicial!</Link>
                  </div>
                </Styled.BodyPageError>
              </Styled.LoginWrapper>
            </Col>
          </Styled.RowStyled>
        </Container>
      </Layout>
    </Styled.Background>
  );
}

export default Page404;
