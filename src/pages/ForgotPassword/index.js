import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contents/auth';

import styled from 'styled-components';

import { Header, Gametask } from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';

import Form from '../../components/Form/Index';
import { Row } from '../../components/Grid/Index';
import { Email } from '../../components/Inputs/Index';
import { ButtomCTA, ButtomBar } from '../../components/Buttons/Index';

const ForgotPassword = () => {
  const { signed, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push('/');
      }
    }
  }, [loading, signed, history]);

  const pageBack = () => {
    history.goBack();
  };

  const pageForward = () => {
    history.push('/newpassword');
  };

  return (
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Esqueci a senha</h1>
        <p>
          Para alterar sua senha insira abaixo email cadastrado em seu perfil e
          clique no link que enviaremos para ele.
        </p>
      </Header>

      <Body>
        <Form autoComplete="off">
          <Email name="email" placeholder="email@example.com" required>
            Email
          </Email>
          <ButtomBar>
            <ButtomCTA secondary onClick={pageBack}>
              Voltar
            </ButtomCTA>
            <ButtomCTA onClick={pageForward}>Enviar</ButtomCTA>
          </ButtomBar>
        </Form>
      </Body>
    </BackgroundModal>
  );
};

export default ForgotPassword;

const Body = styled(Row)`
  margin-bottom: 0;
`;
