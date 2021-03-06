import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/constants';

import { Row } from '../../components/Grid/Index';
import bg from '../../assets/img/bg-login.gif';

import { ReactComponent as LogoGametask } from '../../assets/icons/logotype.svg';
import { ReactComponent as LogoFacebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as LogoGoogle } from '../../assets/icons/google.svg';

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
  border-radius: ${theme.borderRadius.sm};

  > span {
    color: ${theme.color.txtLow};
  }
`;

export const Header = styled(Row)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${theme.spacing.xl};

  > h1 {
    font-size: ${theme.fontSize.lg};
    font-weight: 700;
    line-height: 130%;
  }

  > p {
    margin-top: ${theme.spacing.sm};
  }

  a {
    color: ${theme.color.txtHigh};
  }
`;

export const Body = styled(Row)`
  margin-bottom: ${theme.spacing.lg};
`;

export const Remember = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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
    border-radius: ${theme.borderRadius.xs};

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
  width: ${theme.spacing.md};
  height: ${theme.spacing.md};
  color: ${theme.color.txtHigh};
`;

export const Facebook = styled(LogoFacebook)`
  width: ${theme.spacing.md};
  height: ${theme.spacing.md};
  color: ${theme.color.txtHigh};
`;

export const PageError = styled(Row)`
  display: flex;
  align-items: center;
  text-align: left;

  > div {
    padding-left: 3rem;

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

// Intern Modal

export const ContainerModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background: rgba(0, 0, 0, 0.5);
  transition: all ease 4s;
`;

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
`;
