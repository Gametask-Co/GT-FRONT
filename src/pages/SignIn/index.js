import React, { useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { useAuth } from '../../contents/auth';

import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import {
  Header,
  Gametask,
  Body,
  Remember,
  Footer,
  SocialButtons,
  Facebook,
  Google,
} from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';
import { Email, Password, Checkbox } from '../../components/Inputs/Index';
import { ButtomCTA } from '../../components/Buttons/Index';
import Form from '../../components/Form/Index';

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
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Entrar</h1>
        <p>
          Novo usuário? <Link to="/signup">Crie uma conta</Link>
        </p>
      </Header>

      <Body>
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

          <Remember>
            <Checkbox>Lembre de mim</Checkbox>
            <Link to="/forgotpassword">Esqueci a senha</Link>
          </Remember>

          <ButtomCTA top type="submit">
            Entrar
          </ButtomCTA>
        </Form>
      </Body>
      <Footer>
        <p>Acesso rápido através de sua conta</p>
        <SocialButtons>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Google />
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
                <Facebook />
              </button>
            )}
          />
        </SocialButtons>
      </Footer>
    </BackgroundModal>
  );
}

export default SignIn;
