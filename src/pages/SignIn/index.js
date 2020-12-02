import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";

import Layout from "../../components/Layout";

import * as Styled from "./styled";

import { useAuth } from "../../contents/auth";

import { ReactComponent as LogIn } from "../../assets/icons/log-in.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";

function SignIn() {
  const { signed, signIn, loading } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push("/");
      }
    }
  }, [loading, signed]);

  const responseFacebook = (res) => {
    setEmail(res.email);
    setPassword(res.userID);
  };

  const onGoogleSuccess = (res) => {
    setEmail(res.profileObj.email);
    setPassword(res.profileObj.googleId);
  };

  const onGoogleFailure = (res) => {
    console.log("Login failed: res:", res);
  };

  async function handleSignIn(e) {
    e.preventDefault();

    try {
      await signIn(email, password);
      history.push("/");
    } catch (err) {
      alert("Erro no login, tente novamente.");
    }
  }

  return (
    <Layout header={false}>
      <Styled.LoginWrapper>
        <Styled.LogoIcon />
        <span>Insira seus dados para fazer login.</span>
        <form onSubmit={handleSignIn}>
          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="name">Senha</label>
          <input
            type="password"
            name="password"
            id="userPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div>
            <button type="submit">
              <LogIn />
              <span>Entrar</span>
            </button>
            <Link to="/signup">
              <span>
                Ainda não tem conta?{" "}
                <span className="text-und">Cadastre-se!</span>
              </span>
            </Link>
          </div>
        </form>

        <span className="align-center">Ou entrar com:</span>

        <Styled.LoginWrapperFooter>
          <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APP_ID}
            autoLoad
            fields="name,email,picture"
            callback={responseFacebook}
            render={(renderProps) => (
              <button onClick={renderProps.onClick} className="facebook">
                <Facebook />
                <span>Facebook</span>
              </button>
            )}
          />

          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            render={(renderProps) => (
              <button
                className="google"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <Google />
                <span>Google</span>
              </button>
            )}
            buttonText="Login"
            onSuccess={onGoogleSuccess}
            onFailure={onGoogleFailure}
            cookiePolicy={"single_host_origin"}
          />
        </Styled.LoginWrapperFooter>
        {/* </form> */}
      </Styled.LoginWrapper>
    </Layout>
  );
}

export default SignIn;
