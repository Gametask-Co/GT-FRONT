import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/constants';

export const IconSM = styled.img`
  width: ${theme.spacing.sm};
  height: ${theme.spacing.sm};
  color: ${theme.color.txtHigh};

  margin-right: ${({ right }) => (right ? right : '0')};
  margin-left: ${({ left }) => (left ? left : '0')};
  margin-top: ${({ top }) => (top ? top : '0')};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : '0')};
`;

export const IconMD = styled.img`
  width: ${theme.spacing.md};
  height: ${theme.spacing.md};
  color: ${theme.color.txtHigh};

  margin-right: ${({ right }) => (right ? right : '0')};
  margin-left: ${({ left }) => (left ? left : '0')};
  margin-top: ${({ top }) => (top ? top : '0')};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : '0')};
`;

export const IconLG = styled.img`
  width: ${theme.spacing.lg};
  height: ${theme.spacing.lg};
  color: ${theme.color.txtHigh};

  margin-right: ${({ right }) => (right ? right : '0')};
  margin-left: ${({ left }) => (left ? left : '0')};
  margin-top: ${({ top }) => (top ? top : '0')};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : '0')};
`;

export const IconXL = styled.img`
  width: ${theme.spacing.xl};
  height: ${theme.spacing.xl};
  color: ${theme.color.txtHigh};

  margin-right: ${({ right }) => (right ? right : '0')};
  margin-left: ${({ left }) => (left ? left : '0')};
  margin-top: ${({ top }) => (top ? top : '0')};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : '0')};
`;

export const IconXXL = styled.img`
  width: ${theme.spacing.xxl};
  height: ${theme.spacing.xxl};
  color: ${theme.color.txtHigh};

  margin-right: ${({ right }) => (right ? right : '0')};
  margin-left: ${({ left }) => (left ? left : '0')};
  margin-top: ${({ top }) => (top ? top : '0')};
  margin-bottom: ${({ bottom }) => (bottom ? bottom : '0')};
`;
