import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/constants';
import { ReactComponent as LogoGametask } from '../../assets/icons/logotype.svg';
import { ReactComponent as LogoFacebook } from '../../assets/icons/facebook.svg';
import { ReactComponent as LogoGoogle } from '../../assets/icons/google.svg';
import bg from '../../assets/img/bg-login.gif';
import { Row } from '../../components/Grid/Index';

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
