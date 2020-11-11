import React, { useEffect, useState } from "react";
import { useHistory, useParams, Link } from "react-router-dom";

import * as Styled from "./styled";

import Layout from "../../components/Layout";
import CardMilestoneList from "../../components/CardMilestoneList";
import CardSubjectList from "../../components/CardSubjectList";
import Modal from "../../components/Modal";

import { useAuth } from "../../contents/auth";

import api from "../../services/api";

import { ReactComponent as Remove } from "../../assets/icons/close.svg";
import { ReactComponent as Plus } from "../../assets/icons/plus.svg";
import { ReactComponent as Edit } from "../../assets/icons/edit.svg";
import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";

import { ReactComponent as Award } from "../../assets/icons/award.svg";
import { ReactComponent as Calendar } from "../../assets/icons/calendar.svg";

function SubjectDetail() {
  const { signed, loading } = useAuth();

  const [show, setShow] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showTab, setShowTab] = useState(false);
  const [showTask, setShowTask] = useState(false);

  //student
  const [students, setStudents] = useState([]);
  const [studentActive, setStudentActive] = useState("");

  //subject
  const [subjectName, setSubjectName] = useState("");

  //milestone
  const [milestones, setMilestones] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // task
  const [nameTask, setNameTask] = useState("");
  const [descriptionTask, setDescriptionTask] = useState("");
  const [dueTask, setDueTask] = useState("");
  const [selectMilestone, setSelectMilestoneTask] = useState("");

  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push("/signin");
      } else {
        api.get("/subjects").then(function (res) {
          res.data.map((item) => {
            if (item.id === id) {
              setSubjectName(item.name);
              setStudents(item.students);
            }
          });
        });

        api.get("/milestones").then(function (res) {
          setMilestones(res.data);
        });
      }
    }
  }, [signed, history, milestones, students, loading]);

  function handleMilestoneModal(e) {
    setShow(!show);
  }
  function handleTaskModal(e) {
    setShowTask(!showTask);
  }
  function handleShowTab(e) {
    setShowTab(!showTab);
  }

  function handleStudentModal(student_id) {
    setShowStudent(!showStudent);
    setStudentActive(student_id);
  }

  async function handleRemoveStudent(e) {
    e.preventDefault();

    await api({
      method: "delete",
      url: "/subjects/students/",
      data: {
        subject_id: id,
        student_id: studentActive,
      },
    })
      .then(function (res) {
        setShowStudent(!showStudent);
        setStudentActive("");
      })
      .catch(function (error) {
        console.log(error, "Error Student on Subject error!");
      });
  }

  async function handleCreateMilestone(e) {
    e.preventDefault();

    await api
      .post("/milestones", {
        name,
        description,
      })
      .then(function (res) {
        console.log(res.data, "Create Milestone ok!");

        setShow(!show);
        setNameTask("");
        setDescriptionTask("");
        setDueTask("");
        setSelectMilestoneTask("");
      })
      .catch(function (error) {
        console.log(error, "Error Milestone error!");
      });
  }

  async function handleCreateTask(e) {
    e.preventDefault();

    await api
      .post("/tasks", {
        nameTask,
        descriptionTask,
        dueTask,
        selectMilestone,
      })
      .then(function (res) {
        console.log(res.data, "Create Task ok!");

        setShowTask(!showTask);
        setName("");
        setDescription("");
      })
      .catch(function (error) {
        console.log(error, "Error Task error!");
      });
  }

  return (
    <Layout pageTitle="Disciplinas">
      <Styled.MenuWrapper>
        <div>
          <h1>ALUNOS</h1>
          <span>{students.length}</span>
        </div>

        {students.map((item) => (
          <div key={item.id}>
            <div>
              <Styled.CircleProfile />
              <span>Name</span>
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
          {/* milestones.map */}
          {[0, 1, 2, 3].map((item) => (
            <Link key={item.id} to={`/milestone/${item.id}`}>
              <CardMilestoneList
                number={item}
                name="Introdução"
                deadline="Termina em 11/06/20"
                percentage="55"
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

      <Modal onClose={handleStudentModal} show={showStudent}>
        <form onSubmit={handleRemoveStudent}>
          <h2>Remover Aluno</h2>
          <p>Deseja realmente resolver o aluno da disciplina?</p> <br />
          <br />
          <div>
            <button onClick={handleStudentModal}>Cancelar</button>
            <button type="submit">Confirmar</button>
          </div>
        </form>
      </Modal>

      <Modal onClose={handleMilestoneModal} show={show}>
        <form onSubmit={handleCreateMilestone}>
          <h2>Adicionar Marco</h2>

          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            placeholder="Nome do marco"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label htmlFor="description">Descrição</label>
          <textarea
            type="text"
            id="description"
            placeholder="Escreva aqui..."
            rows="5"
            cols="33"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <div>
            <button onClick={handleMilestoneModal}>Cancelar</button>
            <button type="submit">Continuar</button>
          </div>
        </form>
      </Modal>

      <Modal onClose={handleTaskModal} show={showTask}>
        <form onSubmit={handleCreateTask}>
          <h2>Adicionar Atividade</h2>
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
            placeholder="Nome do marco"
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

          <label htmlFor="milestone">Milestone</label>
          <select
            name="select"
            id="milestone"
            value={selectMilestone}
            onChange={(e) => setSelectMilestoneTask(e.target.value)}
            required
          >
            <option value="" selected>
              Selecione um milestone
            </option>
            {/* map on milestones */}
            {[0, 1, 2, 3].map((item) => (
              <option key={item} value="item.id">
                item.name
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

          <div>
            <button onClick={handleTaskModal}>Cancelar</button>
            <button type="submit">Continuar</button>
          </div>
        </form>
      </Modal>
    </Layout>
  );
}

export default SubjectDetail;
