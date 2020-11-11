import styled from "styled-components";

import { ReactComponent as LogoSvg } from "../../assets/icons/logotype.svg";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: self-start;
  flex-direction: column;

  background-color: #282a31;
  padding-bottom: 3rem;

  width: 100%;
  align-content: center;
  align-items: center;

  > h1 {
    color: gray;
    font-size: 2rem;
    padding: 1rem;
  }

  > span {
    padding: 1rem;
  }

  .align-center {
    text-align: center;
    padding: 2rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > input,
    select {
      height: 40px;
      padding: 10px;

      border-radius: 3px;
      border: 2px solid #3f424d;
      box-sizing: border-box;

      background-color: transparent;
      color: #f6f6f6;

      margin-top: 1rem;
      margin-bottom: 1rem;

      transition: border 0.15s ease;
      font-size: 16px;

      &:focus {
        border-color: #7289da;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 1rem;

      button,
      a {
        width: 14rem;
      }

      .text-und {
        text-decoration: underline;
      }

      .facebook {
        background-color: blue;
        color: white;
        font-size: 1rem;
      }
      .google {
        background-color: firebrick;
        color: white;
        font-size: 1rem;
      }

      > button {
        align-items: center;
        display: flex;
        align-content: center;
        justify-content: center;

        border-radius: 4px;
        transition: background-color 0.15s ease;
        background: #3f424d;
        color: #fff;
        border: 0;
        padding: 0.5rem 1rem 0.5rem 1rem;
        font-size: 1rem;
        cursor: pointer;

        > span {
          padding-left: 1rem;
        }

        /* &:first-child {
          background: transparent;
        } */
      }
    }
  }
`;

export const LogoIcon = styled(LogoSvg)`
  width: 70px;
  height: 70px;
  color: white;
`;
