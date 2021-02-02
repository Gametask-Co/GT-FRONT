import styled from "styled-components";
import { DEFAULT_THEME as theme } from "../../styles/constants";

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  transition: all ease 4s;
`;

// export const ModalMain = styled.div`
//   display: flex;
//   flex-direction: column;

//   padding: ${theme.spacing.lg};
//   background-color: ${theme.color.bgMedium};
//   border-radius: ${theme.borderRadius.sm};

//   > span {
//     color: ${theme.color.txtLow};
//   }
// `;

export const ModalMain = styled.section`
  position: fixed;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${theme.spacing.lg};

  background: ${theme.color.bgMedium};

  box-shadow: ${theme.boxShadow.l4};
  border-radius: ${theme.borderRadius.sm};

  width: 30%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: ${theme.color.txtMedium};

  form {
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 0;

      > button {
        border-radius: ${theme.borderRadius.xxs};
        transition: background-color 0.15s ease;
        background: ${theme.color.bgHigh};
        color: ${theme.color.txtHigh};
        border: 0;
        padding: 14px 28px;
        font-size: ${theme.fontSize.sm};
        cursor: pointer;

        &:first-child {
          background: transparent;
        }
      }
    }
  }
`;
