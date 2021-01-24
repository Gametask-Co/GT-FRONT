import React, { Component, useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import * as Styled from '../SignIn/styled';
import { Col, Container, Row } from '../../components/Grid/Index';
import Checkbox from '../../components/Checkbox/Index';
import Form from '../../components/Form/Index';

import { ReactComponent as LogIn } from '../../assets/icons/log-in.svg';
import { ReactComponent as Facebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as Google } from '../../assets/icons/google.svg';

const Body = styled(Row)`
  margin-bottom: 0;
`;

class UserDetails extends Component {
  saveAndContinue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  render() {
    const { values } = this.props;
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
                    <Form>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        defaultValue={values.email}
                        onChange={this.props.handleChange('email')}
                        required
                      />

                      <label htmlFor="password">Senha</label>
                      <input
                        type="password"
                        name="password"
                        id="password"
                        defaultValue={values.password}
                        onChange={this.props.handleChange('password')}
                        required
                      />

                      <Checkbox>
                        Eu li e concordo com os{' '}
                        <a href="#" target="_blank">
                          Termos e Condições
                        </a>
                      </Checkbox>
                      <button onClick={this.saveAndContinue}>Continuar</button>
                    </Form>
                  </Body>
                </Styled.LoginWrapper>
              </Col>
            </Styled.RowStyled>
          </Container>
        </Layout>
      </Styled.Background>
    );
  }
}

export default UserDetails;
