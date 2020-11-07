import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";

import * as Styled from "./styled";

import { useAuth } from "../../contents/auth";

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
        <h1>Login</h1>
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

          <button type="submit">Entrar</button>
        </form>
      </Styled.LoginWrapper>
    </Layout>
  );
}

export default SignIn;
