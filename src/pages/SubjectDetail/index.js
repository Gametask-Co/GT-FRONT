import React, { useEffect, useState } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';

import * as Styled from './styled';

import Layout from '../../components/Layout';
import { Container } from '../../components/Grid/Index';
import CardMilestoneList from '../../components/CardMilestoneList';
import CardSubjectList from '../../components/CardSubjectList';
import { Header, Body } from '../../components/Modais/styled';

import Form from '../../components/Form/Index';
import { Text, Textarea, RadioGroup } from '../../components/Inputs/Index';
import { ButtomBar, ButtomCTA } from '../../components/Buttons/Index';

import Layout from '../../components/Layout';
import Container from '../../components/Container';
import CardMilestoneList from '../../components/CardMilestoneList';
import CardSubjectList from '../../components/CardSubjectList';
import { InternModal } from '../../components/Modais';

import { useAuth } from '../../contents/auth';

import api from '../../services/api';

import { ReactComponent as Remove } from '../../assets/icons/close.svg';
import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Message } from '../../assets/icons/message-circle.svg';

import { ReactComponent as Award } from '../../assets/icons/award.svg';
import { ReactComponent as Calendar } from '../../assets/icons/calendar.svg';

function SubjectDetail() {
  const { signed, loading } = useAuth();

  const [show, setShow] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [showTask, setShowTask] = useState(false);
  const [showBlock, setShowBlock] = useState(false);

  //student
  const [students, setStudents] = useState([]);
  const [studentActive, setStudentActive] = useState('');
  //const [studentEmail, setStudentEmail] = useState('');

  //subject
  //const [subjectName, setSubjectName] = useState('');

  // subject class
  const [block, setBlock] = useState('');
  const [blocks, setBlocks] = useState([]);

  //milestone
  const [milestones, setMilestones] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [visibility, setVisibility] = useState(true);
  const [milestoneActive, setMilestoneActive] = useState('');

  // task
  //const [tasks, setTasks] = useState([]);
  const [nameTask, setNameTask] = useState('');
  const [descriptionTask, setDescriptionTask] = useState('');
  const [dueTask, setDueTask] = useState('');
  const [selectMilestoneTask, setSelectMilestoneTask] = useState('');
  const [selectBlockTask, setSelectBlockTask] = useState('');

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push('/signin');
      } else {
        api.get('/subjects').then(function (res) {
          res.data.teacher_user.map((item) => {
            if (item.id === id) {
              //setSubjectName(item.name);
              setStudents(item.students);
              setMilestones(item.milestones);

              item.milestones.map((item) => {
                return setBlocks(item.blocks);
              });
            }

            return null;
          });
        });
      }
    }

    return;
    // }, [signed, history, milestones, students, loading]);
  }, [signed, history, loading, id]);

  function handleMilestoneModal(e) {
    setShow(!show);
  }
  function handleTaskModal(e) {
    setShowTask(!showTask);
  }
  function handleShowTab(e) {
    setShowTab(!showTab);
  }
  function handleBlockModal(e) {
    setShowBlock(!showBlock);
  }

  function handleStudentModal(student_id) {
    setShowStudent(!showStudent);
    setStudentActive(student_id);
  }

  // adds student on subject
  /* async function handleAddStudent(e) {
    e.preventDefault();

    await api
      .post('/subjects/students/email', {
        subject_id: id,
        student_email: studentEmail,
      })
      .then(function (res) {
        console.log(res, 'add Student on Subject ok!');
      })
      .catch(function (error) {
        console.log(error, 'Error Student on Subject error!');
      });
  } */

  async function handleRemoveStudent(e) {
    e.preventDefault();

    await api({
      method: 'delete',
      url: '/subjects/students/',
      data: {
        subject_id: id,
        student_id: studentActive,
      },
    })
      .then(function (res) {
        setShowStudent(!showStudent);
        setStudentActive('');
      })
      .catch(function (error) {
        console.log(error, 'Error Student on Subject error!');
      });
  }

  async function handleCreateMilestone(e) {
    e.preventDefault();

    await api
      .post('/subjects/milestones', {
        name,
        description,
        subject_id: id,
        // visibility,
      })
      .then(function (res) {
        console.log(res.data, 'Create Milestone ok!');

        setShow(!show);
        setNameTask('');
        setDescriptionTask('');
        setDueTask('');
        setSelectMilestoneTask('');
        setMilestoneActive(res.data.id);

        setShowBlock(!showBlock);
      })
      .catch(function (error) {
        console.log(error, 'Error Milestone error!');
      });
  }

  async function handleMilestoneBlock(e) {
    e.preventDefault();

    await api
      .post('/subjects/blocks', {
        name: block,
        subject_id: id,
        milestone_id: milestoneActive,
      })
      .then(function (res) {
        console.log(res, 'add Block ok!');
        // setLink("");
        // setStudents("");
        setMilestoneActive('');

        setShowBlock(!showBlock);
      })
      .catch(function (error) {
        console.log(error, 'Error Block error!');
      });
  }

  async function handleCreateTask(e) {
    e.preventDefault();

    await api
      .post('/subjects/tasks', {
        name: nameTask,
        description: descriptionTask,
        due: dueTask,
        subject_id: id,
        block_id: selectBlockTask,
        // milestone_id: selectMilestoneTask,
      })
      .then(function (res) {
        console.log(res.data, 'Create Task ok!');

        setShowTask(!showTask);
        setName('');
        setDescription('');
      })
      .catch(function (error) {
        console.log(error, 'Error Task error!');
      });
  }

  return (
    <Layout pageTitle="Marcos">
      <Container>
        <Styled.MenuWrapper>
          <div>
            <h1>ALUNOS</h1>
            <span>{students.length}</span>
          </div>

          {students.map((item) => (
            <div key={item.id}>
              <div>
                <Styled.CircleProfile />
                <span>{item.name}</span>
              </div>
              <div>
                <button onClick={() => handleStudentModal(item.id)}>
                  <Remove />
                </button>
                <button>
                  <Message />
                </button>
              </div>
            </div>
          ))}
        </Styled.MenuWrapper>
        <Styled.SubjectWrapper>
          <div>
            <Styled.ButtonTab onClick={handleShowTab} tab={showTab}>
              Detalhes
            </Styled.ButtonTab>
            <Styled.ButtonTab onClick={handleShowTab} tab={showTab}>
              Atividades
            </Styled.ButtonTab>
          </div>
          <div>
            <div>
              {showTab ? (
                <>
                  <button onClick={handleTaskModal}>
                    <Plus />
                  </button>
                  <button>
                    <Award />
                  </button>
                  <button>
                    <Calendar />
                  </button>
                </>
              ) : (
                <>
                  <button onClick={handleMilestoneModal}>
                    <Plus />
                  </button>
                  <button>
                    <Edit />
                  </button>
                </>
              )}
            </div>
          </div>

          <Styled.MilestoneWrapper tab={showTab}>
            {milestones.map((item, index) => (
              <Link key={item.id} to={`/milestone/${item.id}`}>
                <CardMilestoneList
                  number={index}
                  name={item.name}
                  deadline="Termina em 11/06/21"
                  percentage="55"
                  visibility={true}
                />
              </Link>
            ))}
          </Styled.MilestoneWrapper>

          {/* state show to view tasks.map */}
          {[0, 1, 2, 3].map((item) => (
            <Link key={item} to={`/task/${item}`}>
              <CardSubjectList
                name="Atividade APOO"
                description="Descrição da tarefa..."
                milestone="Gerência de memória"
                percentage="55"
                tab={showTab}
              />
            </Link>
          ))}
        </Styled.SubjectWrapper>

        <InternModal onClose={handleStudentModal} show={showStudent}>
          <Header>
            <h1>Remover Aluno</h1>
          </Header>
          <Body>
            <Form onSubmit={handleRemoveStudent}>
              <p>Deseja realmente resolver o aluno da disciplina?</p> <br />
              <br />
              <ButtomBar>
                <ButtomCTA secondary onClick={handleStudentModal}>
                  Cancelar
                </ButtomCTA>
                <ButtomCTA type="submit">Confirmar</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>

        <InternModal onClose={handleMilestoneModal} show={show}>
          <Header>
            <h1>Adicionar Marco</h1>
          </Header>
          <Body>
            <Form onSubmit={handleCreateMilestone}>
              <Text
                type="text"
                id="name"
                placeholder="Titulo do marco"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              >
                Título
              </Text>

              <Textarea
                type="text"
                id="description"
                placeholder="Escreva aqui..."
                rows="5"
                cols="33"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              >
                Descrição
              </Textarea>

              <span>Visível para os alunos</span>
              <RadioGroup>
                <input
                  type="radio"
                  id="yes"
                  name="visible"
                  defaultValue={visibility}
                  onChange={(e) => setVisibility(true)}
                />
                <label htmlFor="yes">Sim</label>

                <input
                  type="radio"
                  id="no"
                  name="visible"
                  defaultValue={visibility}
                  onChange={(e) => setVisibility(false)}
                />
                <label htmlFor="no">Não</label>
              </RadioGroup>

              <ButtomBar>
                <ButtomCTA onClick={handleMilestoneModal}>Cancelar</ButtomCTA>
                <ButtomCTA type="submit">Continuar</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>

        <InternModal onClose={handleBlockModal} show={showBlock}>
          <Header>
            <h2>Adicionar Blocos</h2>
          </Header>
          <Body>
            <Form onSubmit={handleMilestoneBlock}>
              <Text
                type="text"
                id="blocks"
                placeholder="Nome da Disciplina"
                value={block}
                onChange={(e) => setBlock(e.target.value)}
                required
              >
                Insira o nome do bloco
              </Text>
              {/* <span>{block}</span> */}

              <ButtomBar>
                <ButtomCTA onClick={handleBlockModal}>Pular</ButtomCTA>
                <ButtomCTA type="submit">Concluir</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>

        <InternModal onClose={handleTaskModal} show={showTask}>
          <Header>
            <h1>Adicionar Atividade</h1>
          </Header>
          <Body>
            <Form onSubmit={handleCreateTask}>
              {/* task 
              - milestone_id
              - name
              - description
              - due
              - attachment_url
              - total_score */}

              <label htmlFor="name">Nome</label>
              <input
                type="text"
                id="name"
                placeholder="Nome da atividade"
                value={nameTask}
                onChange={(e) => setNameTask(e.target.value)}
                required
              />

              <label htmlFor="description">Descrição</label>
              <textarea
                type="text"
                id="description"
                placeholder="Escreva aqui..."
                rows="5"
                cols="33"
                value={descriptionTask}
                onChange={(e) => setDescriptionTask(e.target.value)}
                required
              />

              <label htmlFor="milestone">Marco</label>
              <select
                name="select"
                id="milestone"
                value={selectMilestoneTask}
                onChange={(e) => setSelectMilestoneTask(e.target.value)}
                required
              >
                <option value="" selected>
                  Selecione um marco
                </option>
                {milestones.map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              <label htmlFor="milestone">Bloco</label>
              <select
                name="select"
                id="milestone"
                value={selectBlockTask}
                onChange={(e) => setSelectBlockTask(e.target.value)}
                required
              >
                <option value="" selected>
                  Selecione um bloco
                </option>
                {blocks.map((item) => (
                  <option key={item} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </select>

              <label htmlFor="due">Prazo</label>
              <input
                type="date"
                name="due"
                id="due"
                value={dueTask}
                onChange={(e) => setDueTask(e.target.value)}
                required
              />

              <ButtomBar>
                <ButtomCTA onClick={handleTaskModal}>Cancelar</ButtomCTA>
                <ButtomCTA type="submit">Continuar</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>

        <InternModal onClose={handleTaskModal} show={showTask}>
          <Header>
            <h1>Editar Marco</h1>
          </Header>
          <Body>
            <Form onSubmit={() => {}}>
              <Text
                type="text"
                id="title"
                placeholder="Nome da Disciplina"
                value={nameTask}
                onChange={(e) => setNameTask(e.target.value)}
                required
              >
                Título
              </Text>

              <Textarea
                type="text"
                id="description"
                placeholder="Escreva aqui..."
                rows="5"
                cols="33"
                value={descriptionTask}
                onChange={(e) => setDescriptionTask(e.target.value)}
                required
              >
                Descrição
              </Textarea>

              <span>Visível para os alunos</span>
              <RadioGroup>
                <input
                  type="radio"
                  id="yes"
                  name="visible"
                  defaultValue={visibility}
                  onChange={(e) => setVisibility(true)}
                />
                <label htmlFor="yes">Sim</label>

                <input
                  type="radio"
                  id="no"
                  name="visible"
                  defaultValue={visibility}
                  onChange={(e) => setVisibility(true)}
                />
                <label htmlFor="no">Não</label>
              </RadioGroup>

              <ButtomBar>
                <ButtomCTA onClick={handleTaskModal}>Cancelar</ButtomCTA>
                <ButtomCTA type="submit">Salvar</ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>

        <InternModal>
          <Header>
            <h1>Excluir Marco</h1>
          </Header>

          <Body>
            <Form onSubmit={() => {}}>
              <span>
                Cuidado! Essa é uma ação permanente, para confirmar a exclusão
                do marco Introdução digite abaixo o nome do marco:
              </span>

              <Text
                name="name"
                value={name}
                placeholder="Digite o nome do marco"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <ButtomBar>
                <ButtomCTA secondary>Cancelar</ButtomCTA>
                <ButtomCTA danger type="submit">
                  Excluir
                </ButtomCTA>
              </ButtomBar>
            </Form>
          </Body>
        </InternModal>
      </Container>
    </Layout>
  );
}

export default SubjectDetail;
