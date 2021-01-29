import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contents/auth';

import styled from 'styled-components';

import { Header, Gametask } from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';

import Form from '../../components/Form/Index';
import { Row } from '../../components/Grid/Index';
import { Password } from '../../components/Inputs/Index';
import { ButtomCTA } from '../../components/Buttons/Index';

const NewPassword = () => {
  const { signed, loading } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push('/');
      }
    }
  }, [loading, signed, history]);

  const pageForward = () => {
    history.push('/');
  };

  return (
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Nova senha</h1>
        <p>Insira uma nova senha com no mínimo 8 caracteres.</p>
      </Header>

      <Body>
        <Form autoComplete="off">
          <Password name="password" placeholder="••••••••" required>
            Nova senha
          </Password>
          <Password name="confirmPassword" placeholder="••••••••" required>
            Confirmar senha
          </Password>
          <ButtomCTA onClick={pageForward}>Enviar</ButtomCTA>
        </Form>
      </Body>
    </BackgroundModal>
  );
};

export default NewPassword;

const Body = styled(Row)`
  margin-bottom: 0;
`;
