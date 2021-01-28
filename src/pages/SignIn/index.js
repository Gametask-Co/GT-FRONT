import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import Layout from '../../components/Layout';
import { Col, Container } from '../../components/Grid/Index';

import * as Styled from './styled';

import { useAuth } from '../../contents/auth';
import Form from '../../components/Form/Index';
import { Email, Password, Checkbox } from '../../components/Inputs/Index';
import { ButtomCTA } from '../../components/Buttons/Index';

function SignIn() {
  const { signed, signIn, loading } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push('/');
      }
    }
  }, [loading, signed, history]);

  const responseFacebook = (res) => {
    setEmail(res.email);
    setPassword(res.userID);
  };

  const onGoogleSuccess = (res) => {
    setEmail(res.profileObj.email);
    setPassword(res.profileObj.googleId);
  };

  const onGoogleFailure = (res) => {
    console.log('Login failed: res:', res);
  };

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      await signIn(email, password);
      history.push('/');
    } catch (err) {
      alert('Erro no login, tente novamente.');
    }
  }

  return (
    <Styled.Background>
      <Layout header={false}>
        <Container>
          <Styled.RowStyled>
            <Col lg="4" md="6" sm="8" xs="12">
              <Styled.LoginWrapper>
                <Styled.Header>
                  <Styled.Gametask />
                  <h1>Entrar</h1>
                  <p>
                    Novo usuário? <Link to="/signup">Crie uma conta</Link>
                  </p>
                </Styled.Header>

                <Styled.Body>
                  <Form onSubmit={handleSignIn}>
                    <Email
                      name="email"
                      value={email}
                      placeholder="email@example.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    >
                      Email
                    </Email>

                    <Password
                      name="password"
                      value={password}
                      placeholder="••••••••"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    >
                      Senha
                    </Password>

                    <Styled.Remember>
                      <Checkbox>Lembre de mim</Checkbox>
                      <a href="#">Esqueci a senha</a>
                    </Styled.Remember>

                    <ButtomCTA type="submit">Entrar</ButtomCTA>
                  </Form>
                </Styled.Body>
                <Styled.Footer>
                  <p>Acesso rápido através de sua conta</p>
                  <Styled.SocialButtons>
                    <GoogleLogin
                      clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                      render={(renderProps) => (
                        <button
                          onClick={renderProps.onClick}
                          disabled={renderProps.disabled}
                        >
                          <Styled.Google />
                        </button>
                      )}
                      buttonText="Login"
                      onSuccess={onGoogleSuccess}
                      onFailure={onGoogleFailure}
                      cookiePolicy={'single_host_origin'}
                    />

                    <FacebookLogin
                      appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                      autoLoad
                      fields="name,email,picture"
                      callback={responseFacebook}
                      render={(renderProps) => (
                        <button onClick={renderProps.onClick}>
                          <Styled.Facebook />
                        </button>
                      )}
                    />
                  </Styled.SocialButtons>
                </Styled.Footer>
              </Styled.LoginWrapper>
            </Col>
          </Styled.RowStyled>
        </Container>
      </Layout>
    </Styled.Background>
  );
}

export default SignIn;
