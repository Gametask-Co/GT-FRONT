import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";

import * as Styled from "./styled";

import { Col } from "../../components/Grid/Index";
import { Header, Body } from "../../components/Modais/styled";

import Layout from "../../components/Layout";

import Form from "../../components/Form/Index";
import { Text, Textarea, Badge, Upload } from "../../components/Inputs/Index";
import { ButtomBar, ButtomCTA } from "../../components/Buttons/Index";
import { InternModal } from "../../components/Modais";

import { useAuth } from "../../contents/auth";
import api from "../../services/api";

import { ReactComponent as Inbox } from "../../assets/icons/inbox.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";

function MilestoneDetail() {
  const { signed, loading } = useAuth();

  const [show, setShow] = useState(false);
  const [showResources, setShowResources] = useState(false);

  const [showTabDetails, setShowTabDetails] = useState(true);
  const [showTabResources, setShowTabResources] = useState(false);
  const [showTabComments, setShowTabComments] = useState(false);

  const [link, setLink] = useState("");
  // const [classActive, setClassActive] = useState("");

  const [blocks, setBlocks] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const [milestone, setMilestone] = useState("");

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/signin");
      } else {
        const milestones = JSON.parse(
          localStorage.getItem("@RNAuth:milestones")
        );
        const subject = JSON.parse(localStorage.getItem("@RNAuth:subject"));

        milestones.map((item) => {
          if (item.id === id) {
            setMilestone(item);
            setBlocks(item.blocks);
            setSubjectName(subject);
          }
          return null;
        });
      }
    }
  }, [signed, history, loading, id]);

  function handleClassModal(e) {
    setShow(!show);
  }
  function handleResourcesModal(e) {
    setShowResources(!showResources);
  }

  function handleShowTab(element) {
    if (element === "Details") {
      setShowTabDetails(true);
      setShowTabResources(false);
      setShowTabComments(false);
    } else if (element === "Resources") {
      setShowTabDetails(false);
      setShowTabResources(true);
      setShowTabComments(false);
    } else {
      setShowTabDetails(false);
      setShowTabResources(false);
      setShowTabComments(true);
    }
  }

  async function handleClassActivate(e) {
    e.preventDefault();

    await api
      .get("/blocks")
      .then(function (res) {
        console.log(res.data, "Create Class ok!");
        // setClassActive(0);
      })
      .catch(function (error) {
        console.log(error, "Error Class error!");
      });
  }

  async function handleCreateClass(e) {
    e.preventDefault();

    // await api
    //   .post('/subjects', {
    //     name,
    //     description,
    //     image,
    //   })
    //   .then(function (res) {
    //     console.log(res.data, 'Create Subject ok!');

    //     setShow(!show);
    //     setName('');
    //     setDescription('');

    //     setIdSubject(res.data.id);
    //     setLink('https://gametask.com.br/subject/' + res.data.id);
    //     setShowStudent(!showStudent);
    //   })
    //   .catch(function (error) {
    //     console.log(error, 'Error Subject error!');
    //   });
  }

  async function handleCreateResources(e) {
    e.preventDefault();
  }

  return (
    // pageTitle is dynamic
    <Layout pageTitle={subjectName}>
      <Styled.PageWrapper>
        <Col off={1} lg={8} md={7} sm={8} xs={8}>
          <Styled.HeaderContent>
            <h1>{subjectName}</h1>
            <p>
              <span>Marco </span>- {milestone.name}
            </p>
          </Styled.HeaderContent>

          <Styled.MainContent>
            <Styled.EmbedContainer>
              <iframe
                title="video"
                src="https://www.youtube.com/embed/QILiHiTD3uc"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </Styled.EmbedContainer>

            <Styled.TabControls>
              <Styled.ButtonTab
                onClick={() => handleShowTab("Details")}
                tab={showTabDetails}
              >
                Detalhes
              </Styled.ButtonTab>
              <Styled.ButtonTab
                onClick={() => handleShowTab("Resources")}
                tab={showTabResources}
              >
                Recursos
              </Styled.ButtonTab>
              <Styled.ButtonTab
                onClick={() => handleShowTab("Comments")}
                tab={showTabComments}
              >
                Comentários
              </Styled.ButtonTab>

              <Styled.ActionBar>
                <Styled.ActionButtons>
                  <button onClick={handleResourcesModal}>
                    <Edit />
                  </button>
                </Styled.ActionButtons>
              </Styled.ActionBar>
            </Styled.TabControls>

            <Styled.ContentWrapper show={showTabDetails}>
              <p>
                Aliquam sit cursus in purus mauris netus vel purus turpis.
                Laoreet blandit consequat dignissim diam nibh aliquet mattis.
                Mattis velit in facilisis diam vitae et nisi, in at. Vitae in
                non aliquet ac. Risus tellus accumsan hac sem morbi vitae
                rhoncus praesent eleifend. Dui sagittis velit a aliquet erat
                nunc.
              </p>
              <p>
                Elit eu pellentesque id velit. Neque eget neque nisi lobortis
                amet, aliquam rhoncus eu commodo. Rutrum cras massa integer
                viverra vestibulum quis in. Venenatis ac tellus vitae nisi
                libero elit justo orci praesent. Enim massa fusce nibh magnis
                pellentesque pellentesque.Tristique tincidunt consectetur purus
                ac suspendisse. Vel quam tincidunt praesent at justo, eget. Eu
                nunc nulla vitae odio. Et sit fames maecenas sed suspendisse.
              </p>
              <p>
                Ullamcorper elementum dui felis magnis gravida et, placerat.
                Risus leo massa tincidunt fermentum ultricies. Feugiat turpis
                consectetur phasellus lorem pellentesque nec. Ornare eu eu,
                mauris vulputate aenean pellentesque.
              </p>
              <p>
                Velit dolor sit metus, leo, consequat libero, sem. Mauris morbi
                ligula ornare elementum lacus, libero. Elit lectus urna purus
                pellentesque elit, posuere. Netus mauris interdum pellentesque
                lacus magna ac maecenas aliquam sodales. Iaculis dignissim id
                urna, sed cras laoreet ornare. Velit, pharetra tortor habitant
                commodo nulla aenean. Pellentesque condimentum vel convallis
                amet. Tempus eu rhoncus malesuada sagittis.
              </p>
              <p>
                Ut malesuada tempor consequat lobortis. Ipsum consequat congue
                fringilla et facilisis tellus tempus nulla sit. Aliquam
                malesuada vitae lectus amet, mauris vestibulum. Integer integer
                phasellus tristique nec ullamcorper nunc nunc sodales augue.
              </p>
              <p>
                Aliquam sit cursus in purus mauris netus vel purus turpis.
                Laoreet blandit consequat dignissim diam nibh aliquet mattis.
                Mattis velit in facilisis diam vitae et nisi, in at. Vitae in
                non aliquet ac. Risus tellus accumsan hac sem morbi vitae
                rhoncus praesent eleifend. Dui sagittis velit a aliquet erat
                nunc.
              </p>
              <p>
                Elit eu pellentesque id velit. Neque eget neque nisi lobortis
                amet, aliquam rhoncus eu commodo. Rutrum cras massa integer
                viverra vestibulum quis in. Venenatis ac tellus vitae nisi
                libero elit justo orci praesent. Enim massa fusce nibh magnis
                pellentesque pellentesque.Tristique tincidunt consectetur purus
                ac suspendisse. Vel quam tincidunt praesent at justo, eget. Eu
                nunc nulla vitae odio. Et sit fames maecenas sed suspendisse.
              </p>
              <p>
                Ullamcorper elementum dui felis magnis gravida et, placerat.
                Risus leo massa tincidunt fermentum ultricies. Feugiat turpis
                consectetur phasellus lorem pellentesque nec. Ornare eu eu,
                mauris vulputate aenean pellentesque.
              </p>
              <p>
                Velit dolor sit metus, leo, consequat libero, sem. Mauris morbi
                ligula ornare elementum lacus, libero. Elit lectus urna purus
                pellentesque elit, posuere. Netus mauris interdum pellentesque
                lacus magna ac maecenas aliquam sodales. Iaculis dignissim id
                urna, sed cras laoreet ornare. Velit, pharetra tortor habitant
                commodo nulla aenean. Pellentesque condimentum vel convallis
                amet. Tempus eu rhoncus malesuada sagittis.
              </p>
              <p>
                Ut malesuada tempor consequat lobortis. Ipsum consequat congue
                fringilla et facilisis tellus tempus nulla sit. Aliquam
                malesuada vitae lectus amet, mauris vestibulum. Integer integer
                phasellus tristique nec ullamcorper nunc nunc sodales augue.
              </p>
            </Styled.ContentWrapper>

            <Styled.ContentWrapper show={showTabResources}>
              <p>Content Resources</p>
            </Styled.ContentWrapper>
            <Styled.ContentWrapper show={showTabComments}>
              <p>Content Comments</p>
            </Styled.ContentWrapper>
          </Styled.MainContent>
        </Col>

        <Col lg={3} md={4} sm={3} xs={3}>
          <Styled.ActionBar>
            <Styled.ActionButtons>
              <button disabled onClick={() => {}}>
                <Inbox />
              </button>
              <button onClick={handleClassModal}>
                <Plus />
              </button>
              <button onClick={() => {}}>
                <Edit />
              </button>
            </Styled.ActionButtons>
          </Styled.ActionBar>

          {blocks.map((item) => (
            <Styled.WrapCollabsible>
              <input
                id={"collapsible-" + item.id}
                className="toggle"
                type="checkbox"
                style={{ display: "none" }}
              />
              <label htmlFor={"collapsible-" + item.id} className="lbl-toggle">
                {item.name}
              </label>
              <div className="collapsible-content">
                <div className="content-inner">
                  <span>
                    <input type="checkbox" name="class" id="class-id" />
                    <label htmlFor="class-id">Aula - Método de Acesso</label>
                  </span>
                  <br />
                  <br />
                  <span>
                    <input
                      type="checkbox"
                      name="class"
                      id="class-id-1"
                      onClick={handleClassActivate}
                    />
                    <label htmlFor="class-id-1">
                      Aula - Usos de Memória Cache
                    </label>
                  </span>
                </div>
              </div>
            </Styled.WrapCollabsible>
          ))}
        </Col>

        {/* modais */}
        <InternModal onClose={handleClassModal} show={show}>
          <Header>
            <h1>Criar Aula</h1>
          </Header>

          <Body>
            <Form onSubmit={handleCreateClass}>
              <Text
                name="name"
                // value={name}
                placeholder="Título da aula"
                // onChange={(e) => setName(e.target.value)}
                required
              >
                Título
              </Text>

              <Textarea
                name="description"
                // value={description}
                placeholder="Escreva aqui..."
                rows="5"
                cols="33"
                // onChange={(e) => setDescription(e.target.value)}
                required
              >
                Descrição
              </Textarea>

              <Text
                name="link"
                // value={link}
                placeholder="www.youtube.com/exemplo"
                // onChange={(e) => setLink(e.target.value)}
                required
              >
                Vídeo externo (opcional)
              </Text>

              <ButtomBar>
                <ButtomCTA secondary onClick={handleClassModal}>
                  Cancelar
                </ButtomCTA>
                <ButtomCTA type="submit">Continuar</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>

        <InternModal onClose={handleResourcesModal} show={showResources}>
          <Header>
            <h1>Adicionar Recursos</h1>
          </Header>

          <Body>
            <Form onSubmit={handleCreateResources}>
              <Upload
                name="download"
                // value={image}
                accept="*"
                placeholder="Arquivo"
                // onChange={(e) => setImage("null")}
                // onChange={(e) => setImage(e.target.value)}
                // required
              >
                Download
              </Upload>

              <Badge
                name="links"
                value={link}
                placeholder="exemplo.com;"
                onChange={(e) => setLink(e.target.value)}
                required
              >
                Links
              </Badge>

              <ButtomBar>
                <ButtomCTA secondary onClick={handleResourcesModal}>
                  Pular
                </ButtomCTA>
                <ButtomCTA type="submit">Concluir</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>
      </Styled.PageWrapper>
    </Layout>
  );
}

export default MilestoneDetail;
