import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  align-items: self-start;
  flex-direction: column;

  width: 100%;
  align-content: center;
  align-items: center;

  h1 {
    color: gray;
    font-size: 2rem;
    padding: 1rem;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > input {
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

    > button {
      border-radius: 4px;
      transition: background-color 0.15s ease;
      background: #3f424d;
      color: #fff;
      border: 0;
      padding: 0.5rem 1rem 0.5rem 1rem;
      font-size: 1rem;
      cursor: pointer;

      &:first-child {
        background: transparent;
      }
    }
  }
`;
