import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import * as Styled from '../SignIn/styled';
import { useAuth } from '../../contents/auth';
import { Col, Container, Row } from '../../components/Grid/Index';
import { Text, Date, Select, RadioGroup } from '../../components/Inputs/Index';
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
    <Styled.Background>
      <Layout header={false}>
        <Container>
          <Styled.RowStyled>
            <Col lg="4" md="6" sm="8" xs="12">
              <Styled.LoginWrapper>
                <Styled.Header>
                  <Styled.Gametask />
                  <h1>Complete o perfil</h1>
                </Styled.Header>
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

                    <Select
                      label="Genero"
                      name="gender"
                      defaultValue={gender}
                      onChange={setForm}
                      required
                    >
                      <option value="">Selecione um genero</option>
                      <option value="female">Feminino</option>
                      <option value="male">Masculino</option>
                      <option value="other">Outro</option>
                    </Select>

                    <Date
                      name="date"
                      defaultValue={birthday}
                      onChange={setForm}
                      required
                    >
                      Data de nascimento
                    </Date>

                    <span>Eu sou</span>
                    <RadioGroup>
                      <input
                        type="radio"
                        id="students"
                        name="radio-group"
                        defaultValue={teacher}
                        onChange={setForm}
                      />
                      <label htmlFor="students">Estudante</label>

                      <input
                        type="radio"
                        id="teacher"
                        name="radio-group"
                        defaultValue={teacher}
                        onChange={setForm}
                      />
                      <label htmlFor="teacher">Professor</label>
                    </RadioGroup>
                    <ButtomBar>
                      <ButtomCTA secondary={true} onClick={previous}>
                        Voltar
                      </ButtomCTA>
                      <ButtomCTA onClick={sendData}>Concluir</ButtomCTA>
                    </ButtomBar>
                  </Form>
                </Body>
              </Styled.LoginWrapper>
            </Col>
          </Styled.RowStyled>
        </Container>
      </Layout>
    </Styled.Background>
  );
};

export default PersonalDetails;

const Body = styled(Row)`
  margin-bottom: 0;
`;
