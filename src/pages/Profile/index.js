import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import moment from "moment";

import * as Styled from "./styled";
import { DEFAULT_THEME as theme } from "../../styles/constants";

import { Col } from "../../components/Grid/Index";

import Layout from "../../components/Layout";

import { AvatarXXXL } from "../../components/Avatar";
import { useAuth } from "../../contents/auth";

import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

function Profile() {
  const { signed, user, loading } = useAuth();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userBirthday, setUserBirthday] = useState("");
  const [userGender, setUserGender] = useState("");
  const [userFlag, setUserFlag] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/signin");
      } else {
        setUserName(user.name);
        setUserEmail(user.email);
        setUserBirthday(user.birthday);
        setUserGender(user.gender);
        setUserFlag(user.teacher_id !== null ? true : false);
      }
    }
  }, [signed, history, loading, user]);

  return (
    <Layout pageTitle="Profile">
      <Styled.PageWrapper>
        <Col lg={3} md={4} sm={3} xs={3}>
          <Styled.MenuWrapper>
            <Styled.Header>
              <AvatarXXXL bottom={theme.spacing.md} />
              <Styled.Name>
                {userName} <span>{userFlag ? "Pro" : "Alu"}</span>
              </Styled.Name>
            </Styled.Header>

            <Styled.Body style={{ paddingTop: "0rem" }}>
              <h4>Dados Pessoais</h4>
              <p>{userEmail}</p>
              <p>{moment(userBirthday).format("DD/MM/YYYY")}</p>
              <p>{userGender ? "Masculino" : "Feminino"}</p>
            </Styled.Body>
          </Styled.MenuWrapper>
        </Col>

        <Col off={1} lg={8} md={7} sm={8} xs={8}>
          <Styled.ActionBar>
            <h1>Dados acadêmicos</h1>
            <Styled.ActionButtons>
              <button onClick={() => {}}>
                <Edit />
              </button>
            </Styled.ActionButtons>
          </Styled.ActionBar>

          <Styled.ContentWrapper data-testid="card-subject">
            {/* Wrapper content */}
          </Styled.ContentWrapper>
        </Col>
      </Styled.PageWrapper>
    </Layout>
  );
}

export default Profile;
