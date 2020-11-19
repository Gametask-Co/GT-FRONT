import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";

import { useAuth } from "../../contents/auth";
import api from "../../services/api";

import { ReactComponent as Inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

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

          <Styled.MainContent>
            <div>
              {/* <Styled.ButtonTab onClick={handleShowTab} tab={showTab}> */}
              <Styled.ButtonTab tab={false}>Detalhes</Styled.ButtonTab>
              <Styled.ButtonTab tab={false}>Atividades</Styled.ButtonTab>
              <div>
                <button>
                  <Edit />
                </button>
              </div>
            </div>

            {/* view content use this <Styled.MilestoneWrapper tab={showTab}> */}
            <div>
              <span>Content Details</span>
            </div>
            <div>
              <span>Content Tasks</span>
            </div>
          </Styled.MainContent>
        </Styled.Content>
        <Styled.Block>
          <div>
            <button>
              <Inbox />
            </button>
            <button>
              <Plus />
            </button>
            <button>
              <Edit />
            </button>
          </div>
          {/* .map to get blocks and class and tasks */}
          <Styled.WrapCollabsible>
            {/* styled with circle as number block */}
            <input id="collapsible" className="toggle" type="checkbox" />
            <label htmlFor="collapsible" className="lbl-toggle">
              Uso direto
            </label>
            <div className="collapsible-content">
              <div className="content-inner">
                <span>
                  <input type="checkbox" name="class" id="class-id" />
                  <label htmlFor="class-id">Aula - Método de Acesso</label>
                </span>
              </div>
            </div>
          </Styled.WrapCollabsible>
        </Styled.Block>
      </Styled.Wrapper>
    </Layout>
  );
}

export default MilestoneDetail;
