import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import Layout from "../../components/Layout";

import * as Styled from "../SignIn/styled";

import { useAuth } from "../../contents/auth";

import { ReactComponent as LogIn } from "../../assets/icons/log-in.svg";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/google.svg";

function SignIn() {
  const { signed, signUp, loading } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [gender, setGender] = useState("");
  const [teacher, setTeacher] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === true) {
        history.push("/signin");
      }
    }
  }, [loading, signed]);

  async function handleSignUp(e) {
    e.preventDefault();

    try {
      if (password === confirmPassword) {
        await signUp(name, email, date, gender, teacher, password);
        history.push("/signin");
      }
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <Layout header={false}>
      <Styled.LoginWrapper>
        <Styled.LogoIcon />
        <span>Insira seus dados para criar uma conta.</span>
        <form onSubmit={handleSignUp}>
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
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

          <label htmlFor="iAm">Eu sou</label>
          <Styled.FilterRadio>
            <input
              type="radio"
              id="featured-radio"
              className="radio-button"
              name="content-filter"
              defaultChecked="checked"
              value={teacher}
              onChange={() => setTeacher(false)}
            />
            <input
              type="radio"
              id="personal-radio"
              className="radio-button"
              name="content-filter"
              value={teacher}
              onChange={() => setTeacher(true)}
            />

            <label
              htmlFor="featured-radio"
              className="filter-label featured"
              id="feature-label"
            >
              Estudante
            </label>
            <label
              htmlFor="personal-radio"
              className="filter-label personal"
              id="personal-label"
            >
              Professor
            </label>
          </Styled.FilterRadio>

          <label htmlFor="password">Senha</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <label htmlFor="passwordConfirm">Confirmar senha</label>
          <input
            type="password"
            name="password"
            id="passwordConfirm"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />

          <div>
            <button type="submit">
              <LogIn />
              <span>Cadastrar</span>
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
