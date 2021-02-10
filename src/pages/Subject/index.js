import React, { useEffect, useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

import * as Styled from './styled';
import { DEFAULT_THEME as theme } from '../../styles/constants';

import Layout from '../../components/Layout';
import { Col } from '../../components/Grid/Index';
import CardSubjectList from '../../components/CardSubjectList';
import Modal from '../../components/Modal';

import { useAuth } from '../../contents/auth';

import api from '../../services/api';

import { ReactComponent as Plus } from '../../assets/icons/plus.svg';
import { ReactComponent as Edit } from '../../assets/icons/edit.svg';
import { ReactComponent as Award } from '../../assets/icons/award.svg';
import { ReactComponent as Star } from '../../assets/icons/star.svg';
import { AvatarXXL } from '../../components/Avatar';

function Subject() {
  const { signed, user, loading } = useAuth();

  const [show, setShow] = useState(false);
  const [showStudent, setShowStudent] = useState(false);
  const [showEditSubject, setShowEditSubject] = useState(false);

  // subject
  const [subjects, setSubjects] = useState([]);
  const [idSubject, setIdSubject] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  //student
  const [link, setLink] = useState('');
  const [students, setStudents] = useState(''); // []

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userFlag, setUserFlag] = useState(false);

  const history = useHistory();

  useEffect(() => {
    if (loading === false) {
      if (signed === false) {
        history.push('/signin');
      } else {
        setUserName(user.name);
        setUserEmail(user.email);

        // VERIFY user is teacher or students
        // // user.teacher
        // api.get("/teacher/subjects").then(function (res) {
        api
          .get('subjects')
          .then(function (res) {
            /* console.log('res ------', res);
            console.log('res ------', res.status); */

            if (user.student_id !== null) {
              setSubjects(res.data.student_user);
              setUserFlag(false);
            } else {
              setSubjects(res.data.teacher_user);
              setUserFlag(true);
            }

            // if (res.status != "error") {
            //   setSubjects(res.data);
            // }

            // if (res.data.student_user.length) {
            //   // setSubjects[res.data.student_user];
            //   console.log(
            //     "res.data.student_user.length",
            //     res.data.student_user.length
            //   );
            // } else {
            //   // setSubjects[res.data.teacher_user];
            //   console.log(
            //     "res.data.teacher_user.length",
            //     res.data.teacher_user.length
            //   );
            // }
          })
          .catch((error) => {
            // user student
            console.log('error ------', error);
            setSubjects([]);
          });
      }
    }
    // }, [signed, subjects, history, loading]);
  }, [signed, history, loading, user]);

  function handleSubjectModal(e) {
    setShow(!show);
  }
  function handleStudentModal(e) {
    setShowStudent(!showStudent);
  }

  function handleEditSubjectModal(e) {
    setShowEditSubject(!showEditSubject);
  }

  async function handleCreateSubject(e) {
    e.preventDefault();

    await api
      .post('/subjects', {
        name,
        description,
        image,
      })
      .then(function (res) {
        console.log(res.data, 'Create Subject ok!');

        setShow(!show);
        setName('');
        setDescription('');

        setIdSubject(res.data.id);
        setLink('https://gametask.com.br/subject/' + res.data.id);
        setShowStudent(!showStudent);
      })
      .catch(function (error) {
        console.log(error, 'Error Subject error!');
      });
  }

  async function handleStudentSubject(e) {
    e.preventDefault();

    await api
      .post('/subjects/student/email', {
        subject_id: idSubject,
        student_email: students,
      })
      .then(function (res) {
        console.log(res, 'add Student on Subject ok!');
        setLink('');
        setStudents('');

        setShowStudent(!showStudent);
      })
      .catch(function (error) {
        console.log(error, 'Error Student on Subject error!');
      });
  }

  return (
    <Layout>
      <Styled.PageWrapper>
        <Col lg={3} md={4} sm={3} xs={3}>
          <Styled.MenuWrapper>
            <Styled.Header>
              <AvatarXXL bottom={theme.spacing.md} />
              <Styled.Name>
                {userName} <span>{userFlag ? 'Pro' : 'Alu'}</span>
              </Styled.Name>
              <Styled.Email>{userEmail}</Styled.Email>
            </Styled.Header>

            <Styled.Body>
              <h4>Medalhas</h4>
              <Styled.Insignia color="#CCAF4E">
                <Award />
                02 <span> - Ouro</span>
              </Styled.Insignia>
              <Styled.Insignia color="#F0F0F0">
                <Award />
                04 <span> - Prata</span>
              </Styled.Insignia>
              <Styled.Insignia color="#E2673E">
                <Award />
                00 <span> - Bronze</span>
              </Styled.Insignia>

              <h4>Troféus</h4>
              <Styled.Insignia color="#CCAF4E">
                <Star />
                09 <span> - Ouro</span>
              </Styled.Insignia>
              <Styled.Insignia color="#F0F0F0">
                <Star />
                11 <span> - Prata</span>
              </Styled.Insignia>
              <Styled.Insignia color="#E2673E">
                <Star />
                03 <span> - Bronze</span>
              </Styled.Insignia>
            </Styled.Body>
          </Styled.MenuWrapper>
        </Col>

        <Col off={1} lg={8} md={7} sm={8} xs={8}>
          <Styled.ActionBar>
            <h1>Disciplinas</h1>
            <Styled.ActionButtons>
              <button onClick={handleSubjectModal}>
                <Plus />
              </button>
              <button onClick={handleEditSubjectModal}>
                <Edit />
              </button>
            </Styled.ActionButtons>
          </Styled.ActionBar>

          <Styled.ContentWrapper>
            <CardSubjectList
              name="Sistemas Operacionais"
              teacher="Fulano de Tal"
              percentage="55"
              tab
            />
            <CardSubjectList
              name="Análise e Projeto Orientado a Objetos"
              teacher="Fulano de Tal"
              percentage="55"
            />
            <CardSubjectList
              name="Seminário de Orientação ao Projeto de Desenvolvimento de Sistema Web"
              teacher="Fulano de Tal"
              percentage="55"
              tab
            />
            <CardSubjectList
              name="Desenvolvimento para Dispositivos Móveis"
              teacher="Fulano de Tal"
              percentage="55"
              tab
            />
            <CardSubjectList
              name="Teste"
              teacher="Fulano de Tal"
              percentage="55"
              tab
            />
            <CardSubjectList
              name="Teste"
              teacher="Fulano de Tal"
              percentage="55"
              tab
            />

            {subjects.map((item) => (
              <Link key={item.id} to={`/subject/${item.id}`}>
                <CardSubjectList
                  key={item.id}
                  name={item.name}
                  teacher="Fulano de Tal"
                  percentage="55"
                  tab={true}
                />
              </Link>
            ))}
          </Styled.ContentWrapper>
        </Col>

        <Modal onClose={handleSubjectModal} show={show}>
          <form onSubmit={handleCreateSubject}>
            <h2>Criar Disciplina</h2>

            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Nome da Disciplina"
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

            <label htmlFor="image">Imagem</label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              value={image}
              onChange={(e) => setImage('null')}
              // onChange={(e) => setImage(e.target.value)}
              // required
            />

            <div>
              <button onClick={handleSubjectModal}>Cancelar</button>
              <button type="submit">Continuar</button>
            </div>
          </form>
        </Modal>

        <Modal onClose={handleStudentModal} show={showStudent}>
          <form onSubmit={handleStudentSubject}>
            <h2>Adicionar Alunos</h2>

            <label htmlFor="link">Compartilhar link</label>
            <input
              type="text"
              id="link"
              placeholder="Nome da Disciplina"
              value={link}
              disabled
            />

            <label htmlFor="students">Inserir alunos por email</label>
            <input
              type="text"
              id="students"
              placeholder="Nome da Disciplina"
              value={students}
              onChange={(e) => setStudents(e.target.value)}
              required
            />
            {/* <span>{students}</span> */}

            <div>
              <button onClick={handleStudentModal}>Pular</button>
              <button type="submit">Concluir</button>
            </div>
          </form>
        </Modal>

        <Modal onClose={handleEditSubjectModal} show={showEditSubject}>
          <h2>Editar Disciplinas</h2>

          {subjects.map((item) => (
            <button key={item.id}>{item.name}</button>
          ))}
          <span onClick={handleEditSubjectModal}>Cancelar</span>
        </Modal>
      </Styled.PageWrapper>
    </Layout>
  );
}

export default Subject;
