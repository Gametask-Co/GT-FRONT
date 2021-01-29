import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Header, Gametask } from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';

import { Row } from '../../components/Grid/Index';
import Form from '../../components/Form/Index';
import { Email, Password, Checkbox } from '../../components/Inputs/Index';
import { ButtomCTA } from '../../components/Buttons/Index';

const UserDetails = ({ setForm, formData, navigation }) => {
  const { email, password, terms } = formData;
  const { next } = navigation;

  return (
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Criar Conta</h1>
        <p>
          Já possui uma conta? <Link to="/signin">Entre</Link>
        </p>
      </Header>
      <Body>
        <Form autocomplete="off">
          <Email
            name="email"
            defaultValue={email}
            placeholder="email@example.com"
            onChange={setForm}
            required
          >
            Email
          </Email>

          <Password
            name="password"
            defaultValue={password}
            placeholder="••••••••"
            onChange={setForm}
            required
          >
            Senha
          </Password>

          <Password
            name="confirmPassword"
            placeholder="••••••••"
            defaultValue={password}
            onChange={setForm}
            required
          >
            Confirmar Senha
          </Password>

          <Checkbox defaultValue={terms} onChange={setForm}>
            Eu li e concordo com os{' '}
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termos e Condições
            </a>
          </Checkbox>
          <ButtomCTA top onClick={next}>
            Continuar
          </ButtomCTA>
        </Form>
      </Body>
    </BackgroundModal>
  );
};

export default UserDetails;

const Body = styled(Row)`
  margin-bottom: 0;
`;
