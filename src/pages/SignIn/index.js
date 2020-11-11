import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

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
  }, [signed]);

  async function handleSignIn(email, password) {
    await signIn(email, password);
  }

  return (
    <Layout>
      <Styled.LoginWrapper>
        <Styled.LogoIcon />
        <span>Insira seus dados para fazer login.</span>
        <form onSubmit={handleSignIn(email, password)}>
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

          <span className="align-center">Ou entrar com:</span>

          <div>
            <button className="facebook">
              <Facebook />
              <span>Facebook</span>
            </button>
            <button className="google">
              <Google />
              <span>Google</span>
            </button>
          </div>
        </form>
      </Styled.LoginWrapper>
    </Layout>
  );
}

export default SignIn;
