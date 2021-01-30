import React from 'react';
import * as Styled from './styled';

import Layout from '../../components/Layout';
import { Col, Container } from '../../components/Grid/Index';

export const BackgroundModal = ({ children }) => {
  return (
    <Styled.Background>
      <Layout header={false}>
        <Container>
          <Styled.RowStyled>
            <Col lg="4" md="6" sm="8" xs="12">
              <Styled.LoginWrapper>{children}</Styled.LoginWrapper>
            </Col>
          </Styled.RowStyled>
        </Container>
      </Layout>
    </Styled.Background>
  );
};
