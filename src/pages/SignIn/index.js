import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Layout from "../../components/Layout";

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
      <h1>Login</h1>
      <br />
      <br />
      <form onSubmit={handleSignIn(email, password)}>
        <input
          type="email"
          name="email"
          id="userEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <input
          type="password"
          name="password"
          id="userPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <br />
        <button type="submit">Entrar</button>
      </form>
    </Layout>
  );
}

export default SignIn;
