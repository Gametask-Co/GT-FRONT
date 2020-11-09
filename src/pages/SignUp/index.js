import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Layout from "../../components/Layout";

import * as Styled from "../SignIn/styled";

import { useAuth } from "../../contents/auth";

import { ReactComponent as LogIn } from "../../assets/icons/log-in.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";

function SignIn() {
  const { signed, signIn, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  console.log("gender", gender);
  
  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push("/");
      }
    }
  }, [signed]);

  async function handleSignUp(email, password) {
    await signIn(email, password);
  }

  return (
    <Layout>
      <Styled.LoginWrapper>
        <Styled.LogoIcon />
        <span>Insira seus dados para criar uma conta.</span>
        <form onSubmit={handleSignUp(email, password)}>
          <label htmlFor="name">Nome</label>
          <input
            type="email"
            name="email"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="name">Email</label>
          <input
            type="email"
            name="email"
            id="userEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label htmlFor="date">Data de nascimento</label>
          <input
            type="date"
            name="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />

          <label htmlFor="gender">Selecione o seu gênero:</label>
          <select
            name="gender"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="" selected>
              Selecione seu gênero
            </option>
            <option value="male" value="male">
              Masculino
            </option>
            <option value="female" value="female">
              Feminino
            </option>
            <option value="other" value="other">
              Outro
            </option>
          </select>

          <label htmlFor="name">Senha</label>
          <input
            type="password"
            name="password"
            id="userPassword"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="name">Confirmar senha</label>
          <input
            type="password"
            name="password"
            id="userPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div>
            <button type="submit">
              <LogIn />
              <span>Entrar</span>
            </button>
            <Link to="/signin">
              <span>
                Já possui uma conta? <span className="text-und">Entre!</span>
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
