import React from "react";
import styled from "styled-components";

import { Header, Gametask } from "../../components/Modais/styled";
import { BackgroundModal } from "../../components/Modais";
import { useAuth } from "../../contents/auth";
import { Row } from "../../components/Grid/Index";
import { Text, Date, RadioGroup, Upload } from "../../components/Inputs/Index";
import Form from "../../components/Form/Index";
import { ButtomBar, ButtomCTA } from "../../components/Buttons/Index";

import { userSchema } from "../../validations/userValidation";

import { UploadFile } from "../../services/amazonS3";

const PersonalDetails = ({ setForm, formData, navigation }) => {
  const { email, password, name, avatar, gender, birthday, teacher } = formData;
  const { previous, next } = navigation;

  const { signUp } = useAuth();

  async function sendData(e) {
    e.preventDefault();

    try {
      const isValid = await userSchema.isValid(formData);
      if (isValid) {
        // post image and get url to set on variable "avatar"
        const newFileName = "test-file.jpg";
        //image value = e.target.files[0]
        console.log("avatar", avatar);
        
        UploadFile(newFileName)
          .then((data) => {
            console.log("data", data); // get url new image
            console.log("data", data.location); // get url new image

            // await signUp(
            //   name,
            //   avatar,
            //   email,
            //   birthday,
            //   JSON.parse(gender),
            //   JSON.parse(teacher),
            //   password
            // );
            // next();
          })
          .catch((err) => console.error("err", err));
      }
    } catch (err) {
      alert("Erro no cadastro, tente novamente.");
    }
  }

  return (
    <BackgroundModal>
      <Header>
        <Gametask />
        <h1>Complete o perfil</h1>
      </Header>
      <Body>
        <Form onSubmit={sendData} autocomplete="off">
          <Upload
            name="avatar"
            defaultValue={avatar}
            onChange={setForm}
            accept="image/*"
            placeholder="Escolha uma foto sua"
            required
          >
            Avatar
          </Upload>

          <Text
            name="name"
            defaultValue={name}
            onChange={setForm}
            placeholder="Fulano Silva"
            required
          >
            Nome Completo
          </Text>

          <Date
            name="birthday"
            defaultValue={birthday}
            onChange={setForm}
            required
          >
            Data de nascimento
          </Date>

          <span>Genero</span>
          <RadioGroup margin>
            <input
              type="radio"
              id="female"
              name="gender"
              defaultValue={false}
              onChange={setForm}
            />
            <label htmlFor="female">Feminino</label>

            <input
              type="radio"
              id="male"
              name="gender"
              defaultValue={true}
              onChange={setForm}
            />
            <label htmlFor="male">Masculino</label>
          </RadioGroup>

          <span>Eu sou</span>
          <RadioGroup>
            <input
              type="radio"
              id="students"
              name="teacher"
              defaultValue={false}
              onChange={setForm}
            />
            <label htmlFor="students">Estudante</label>

            <input
              type="radio"
              id="teacher"
              name="teacher"
              defaultValue={true}
              onChange={setForm}
            />
            <label htmlFor="teacher">Professor</label>
          </RadioGroup>
          <ButtomBar>
            <ButtomCTA top secondary onClick={previous}>
              Voltar
            </ButtomCTA>
            <ButtomCTA top type="submit">
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
