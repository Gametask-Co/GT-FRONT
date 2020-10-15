import styled from "styled-components";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* -webkit-filter: blur(8px);
  filter: blur(8px); */
`;

export const ModalMain = styled.section`
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;

  background: #282a31;

  box-shadow: 0px 16px 48px rgba(63, 66, 77, 0.25);
  border-radius: 16px;

  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
