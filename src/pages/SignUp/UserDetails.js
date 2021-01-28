import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import * as Styled from '../SignIn/styled';
import { Col, Container, Row } from '../../components/Grid/Index';
import Form from '../../components/Form/Index';
import { Email, Password, Checkbox } from '../../components/Inputs/Index';
import { ButtomCTA } from '../../components/Buttons/Index';

const UserDetails = ({ setForm, formData, navigation }) => {
  const { email, password, terms } = formData;
  const { next } = navigation;

  return (
    <Styled.Background>
      <Layout header={false}>
        <Container>
          <Styled.RowStyled>
            <Col lg="4" md="6" sm="8" xs="12">
              <Styled.LoginWrapper>
                <Styled.Header>
                  <Styled.Gametask />
                  <h1>Criar Conta</h1>
                  <p>
                    Já possui uma conta? <Link to="/signin">Entre</Link>
                  </p>
                </Styled.Header>
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
                    <ButtomCTA onClick={next}>Continuar</ButtomCTA>
                  </Form>
                </Body>
              </Styled.LoginWrapper>
            </Col>
          </Styled.RowStyled>
        </Container>
      </Layout>
    </Styled.Background>
  );
};

export default UserDetails;

const Body = styled(Row)`
  margin-bottom: 0;
`;
