import React from 'react';
import styled from 'styled-components';

import { Header, Gametask } from '../../components/Modais/styled';
import { BackgroundModal } from '../../components/Modais';
import { useAuth } from '../../contents/auth';
import { Row } from '../../components/Grid/Index';
import { Text, Date, RadioGroup } from '../../components/Inputs/Index';
import Form from '../../components/Form/Index';
import { ButtomBar, ButtomCTA } from '../../components/Buttons/Index';

const PersonalDetails = ({ setForm, formData, navigation }) => {
  const { email, password, name, gender, birthday, teacher } = formData;
  const { previous, next } = navigation;

  const { signUp } = useAuth();

  async function sendData(e) {
    e.preventDefault();

    try {
      await signUp(name, email, birthday, gender, teacher, password);
      next();
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  return (
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Complete o perfil</h1>
      </Header>
      <Body>
        <Form autocomplete="off">
          <Text
            name="name"
            defaultValue={name}
            onChange={setForm}
            placeholder="Fulano Silva"
            required
          >
            Nome Completo
          </Text>

          <Date name="date" defaultValue={birthday} onChange={setForm} required>
            Data de nascimento
          </Date>

          <span>Genero</span>
          <RadioGroup margin>
            <input
              type="radio"
              id="female"
              name="gender-group"
              defaultValue={gender}
              onChange={setForm}
            />
            <label htmlFor="female">Feminino</label>

            <input
              type="radio"
              id="male"
              name="gender-group"
              defaultValue={gender}
              onChange={setForm}
            />
            <label htmlFor="male">Masculino</label>
          </RadioGroup>

          <span>Eu sou</span>
          <RadioGroup>
            <input
              type="radio"
              id="students"
              name="iam"
              defaultValue={teacher}
              onChange={setForm}
            />
            <label htmlFor="students">Estudante</label>

            <input
              type="radio"
              id="teacher"
              name="iam"
              defaultValue={teacher}
              onChange={setForm}
            />
            <label htmlFor="teacher">Professor</label>
          </RadioGroup>
          <ButtomBar>
            <ButtomCTA top secondary onClick={previous}>
              Voltar
            </ButtomCTA>
            <ButtomCTA top onClick={sendData}>
              Concluir
            </ButtomCTA>
          </ButtomBar>
        </Form>
      </Body>
    </BackgroundModal>
  );
};

export default PersonalDetails;

const Body = styled(Row)`
  margin-bottom: 0;
`;
