import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import * as Styled from '../SignIn/styled';
import { Col, Container } from '../../components/Grid/Index';
import { useHistory } from 'react-router-dom';

const Success = () => {
  const [count, setCount] = useState(5);
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      setCount((a) => {
        return a - 1;
      });
    }, 1000);

    if (count === 0) {
      history.push('/signin');
    }
  }, [count, history]);

  return (
    <Styled.Background>
      <Layout header={false}>
        <Container>
          <Styled.RowStyled>
            <Col lg="4" md="6" sm="8" xs="12">
              <Styled.LoginWrapper>
                <Styled.Header>
                  <Styled.Gametask />
                  <h1>Confirme seu email</h1>
                  <p>
                    Para concluir o seu cadastro clique no link que enviamos
                    para seu email.
                  </p>
                  <p>
                    Não recebeu nenhum email? <Link to="/signin">Reenviar</Link>
                  </p>
                </Styled.Header>
                <span>Redirecionando para página de login em {count}...</span>
              </Styled.LoginWrapper>
            </Col>
          </Styled.RowStyled>
        </Container>
      </Layout>
    </Styled.Background>
  );
};

export default Success;
