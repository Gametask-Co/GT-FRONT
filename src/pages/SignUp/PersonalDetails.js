import React, { Component, useEffect } from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import * as Styled from '../SignIn/styled';
import { Col, Container, Row } from '../../components/Grid/Index';
import Form from '../../components/Form/Index';
import { useAuth } from '../../contents/auth';
import { useHistory } from 'react-router-dom';

class PersonalDetails extends Component {
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  async sendData(e) {
    const {
      email,
      password,
      avatar,
      name,
      gender,
      birthday,
      teacher,
    } = this.props;
    e.preventDefault();

    try {
      await useAuth().signUp(name, email, birthday, gender, teacher, password);
      useHistory().push('/signin');
      this.props.nextStep();
    } catch (err) {
      alert('Erro no cadastro, tente novamente.');
    }
  }

  render() {
    const { values } = this.props;

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
                    <Form>
                      <label htmlFor="name">Nome Completo</label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        defaultValue={values.name}
                        onChange={this.props.handleChange('name')}
                        required
                      />

                      <label htmlFor="date">Data de nascimento</label>
                      <input
                        type="date"
                        name="date"
                        id="date"
                        defaultValue={values.birthday}
                        onChange={this.props.handleChange('birthday')}
                        required
                      />

                      <label htmlFor="gender">Selecione o seu gênero:</label>
                      <select
                        name="gender"
                        id="gender"
                        defaultValue={values.gender}
                        onChange={this.props.handleChange('gender')}
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
                          defaultValue={values.teacher}
                          onChange={this.props.handleChange('teacher')}
                        />
                        <input
                          type="radio"
                          id="personal-radio"
                          className="radio-button"
                          name="content-filter"
                          defaultValue={values.teacher}
                          onChange={this.props.handleChange('teacher')}
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
                      <button onClick={this.back}>Voltar</button>
                      <button onClick={this.sendData}>Concluir</button>
                    </Form>
                  </Body>
                </Styled.LoginWrapper>
              </Col>
            </Styled.RowStyled>
          </Container>
        </Layout>
      </Styled.Background>
    );
  }
}

export default PersonalDetails;

const Body = styled(Row)`
  margin-bottom: 0;
`;
