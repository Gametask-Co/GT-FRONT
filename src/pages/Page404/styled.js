import styled from "styled-components";

import { DEFAULT_THEME as theme } from "../../styles/variables";
import { ReactComponent as LogoGametask } from "../../assets/icons/logotype.svg";
import { ReactComponent as LogoFacebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as LogoGoogle } from "../../assets/icons/google.svg";

import bg from "../../assets/img/bg-login.gif";
import { Row } from "../../components/Grid/Index";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: url(${bg}) no-repeat center center fixed;
  background-size: cover;
`;

export const RowStyled = styled(Row)`
  height: 100%;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;

  padding: ${theme.spacing.lg};
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.spacing.sm};
`;

export const Header = styled(Row)`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: ${theme.fontSize.lg};
    font-weight: 700;
    line-height: 130%;
    margin-bottom: ${theme.spacing.sm};
  }

  > p {
    margin-bottom: ${theme.spacing.xl};
  }

  a {
    color: ${theme.color.txtHigh};
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const BodyPage404 = styled(Row)`
  display: flex;
  align-items: center;
  text-align: left;

  > div {
    margin-left: 3rem;
    width: 100%;

    > h1 {
      color: ${theme.color.txtHigh};
      font-size: ${theme.fontSize.xl};
      font-weight: 700;
      line-height: 130%;
    }

    > span {
      display: block;
      color: ${theme.color.txtHigh};
      margin-bottom: ${theme.spacing.md};
    }
  }

  > div a {
    color: ${theme.color.txtHigh} !important;
    margin-bottom: ${theme.spacing.xl};
  }
`;

export const Body = styled(Row)`
  margin-bottom: ${theme.spacing.lg};

  form {
    display: flex;
    flex-direction: column;
    align-items: stretch;

    > label {
      margin-bottom: ${theme.spacing.xs};

      color: ${theme.color.txtMedium};
      font-size: ${theme.fontSize.xs};
    }

    > input,
    select {
      height: 46px;
      padding: ${theme.spacing.sm};
      margin-bottom: ${theme.spacing.md};

      border-radius: ${theme.spacing.xs};
      border: 2px solid ${theme.color.bgHigh};
      box-shadow: ${theme.boxShadow.l0};

      color: ${theme.color.txtMedium};
      background-color: ${theme.color.bgMedium};

      outline: none;
      font-size: ${theme.fontSize.sm};
      transition: border 0.15s ease;

      &:focus {
        border-color: ${theme.color.txtMedium};
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    > input::placeholder {
      font-family: "Poppins", sans-serif;
      font-size: ${theme.fontSize.sm};
    }

    > button {
      padding: ${theme.spacing.sm} ${theme.spacing.md};
      color: ${theme.color.txtHigh};
      font-size: ${theme.fontSize.xs};
      border: none;
      background: ${theme.color.bgHigh};
      border-radius: ${theme.spacing.xs};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;

export const Remember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${theme.spacing.xl};

  > a {
    text-align: right;
    color: ${theme.color.txtHigh};
  }
`;

export const Footer = styled.div`
  border-top: 1px solid ${theme.color.bgHigh};
  padding-top: ${theme.spacing.lg};

  > p {
    text-align: center;
    font-size: ${theme.fontSize.xs};
    margin-bottom: ${theme.spacing.lg};
  }
`;

export const SocialButtons = styled.div`
  display: flex;
  justify-content: center;

  > button {
    padding: 12px;
    border: none;
    color: ${theme.color.txtHigh};
    background: ${theme.color.bgHigh};
    border-radius: ${theme.spacing.xs};

    > span {
      display: block;
      height: 0;
      width: 0;
      color: transparent;
    }

    &:not(:last-of-type) {
      margin-right: ${theme.spacing.lg};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Gametask = styled(LogoGametask)`
  width: 56px;
  height: 56px;
  margin: 0 auto;
  margin-bottom: ${theme.spacing.lg};
  color: ${theme.color.txtHigh};
`;

export const Google = styled(LogoGoogle)`
  width: 24px;
  height: 24px;
  color: ${theme.color.txtHigh};
`;

export const Facebook = styled(LogoFacebook)`
  width: 24px;
  height: 24px;
  color: ${theme.color.txtHigh};
`;

//Para excluir dps

export const LoginWrapperFooter = styled.div`
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
  }
`;

export const FilterRadio = styled.section`
  display: flex;
  justify-content: center;
  border: 2px solid #3f424d;

  input {
    display: none;
  }

  label {
    width: 100%;
    display: inline-block;
    padding: 10px 20px;
    font-size: 1em;
    text-align: center;
    cursor: pointer;
  }

  #featured-radio:checked ~ .featured,
  #personal-radio:checked ~ .personal,
  #tech-radio:checked ~ .tech {
    background-color: #3f424d;
  }
`;
