import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";

import { useAuth } from "../../contents/auth";
import api from "../../services/api";

function MilestoneDetail() {
  const { signed, loading } = useAuth();

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        // history.push("/signin");
      } else {
        // api.get("/milestones").then(function (res) {
        //   setMilestones(res.data);
        // });
      }
    }
  }, [signed, history, loading]);

  return (
    // pageTitle is dynamic, resquest on api
    <Layout pageTitle="Sistemas Operacionais">
      <Styled.Wrapper>
        <Styled.Content>
          <div>
            <div>
              <h4>Sistemas Operacionais</h4>
              <h3>
                <span>Marco 3 - </span>
                Gerencia de Memória
              </h3>
            </div>
            <button>Continuar</button>
          </div>

          <Styled.EmbedContainer>
            <iframe
              src="https://www.youtube.com/embed/QILiHiTD3uc"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Styled.EmbedContainer>
        </Styled.Content>
        <Styled.Block>
          <div>
            <span>opção 01</span>
            <span>opção 02</span>
            <span>opção 03</span>
          </div>
          {/* <div>
            <span>
              <input type="checkbox" name="" id="" />
              Aula - Método de Acesso
            </span>
          </div> */}
        </Styled.Block>
      </Styled.Wrapper>
    </Layout>
  );
}

export default MilestoneDetail;
