import styled from 'styled-components';
import { ellipsis } from 'polished';
import { DEFAULT_THEME as theme } from '../../styles/constants';
import { Container } from '../../components/Grid/Index';

export const PageWrapper = styled(Container)`
  height: calc(100% - 106px); // header
  width: 100%;
`;

export const MenuWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;

  padding: ${theme.spacing.md} ${theme.spacing.sm};
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.borderRadius.sm};
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const Email = styled.p`
  ${ellipsis()}
  font-size: ${theme.fontSize.xs};
`;

export const Name = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: ${theme.spacing.sm};

  color: ${theme.color.txtHigh};
  font-weight: ${theme.fontWeight.bold};

  > span {
    display: block;
    margin-left: ${theme.spacing.xs};
    padding: ${theme.spacing.xxs} ${theme.spacing.xs};

    color: ${theme.color.txtMedium};
    font-size: ${theme.fontSize.xxs};
    background-color: ${theme.color.bgHigh};
    border-radius: ${theme.borderRadius.xxs};
  }
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: ${theme.spacing.xs} ${theme.spacing.sm};

  > h4 {
    text-align: center;
    text-transform: uppercase;
    font-size: ${theme.fontSize.xs};
    font-family: ${theme.fontFamily.secondary};
    font-weight: ${theme.fontWeight.bold};
    margin-top: ${theme.spacing.lg};
    margin-bottom: ${theme.spacing.sm};
  }
`;

export const Insignia = styled.p`
  display: flex;
  align-items: center;
  padding: ${theme.spacing.sm} 0;

  color: ${(props) => props.color};
  font-size: ${theme.fontSize.xs};

  &:last-of-type {
    padding-bottom: 0;
  }

  svg {
    width: ${theme.spacing.md};
    height: ${theme.spacing.md};
    fill: ${(props) => props.color};
    margin-right: ${theme.spacing.sm};
  }

  span {
    color: ${theme.color.txtLow};
    margin-left: ${theme.spacing.xs};
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${theme.spacing.lg};

  > h1 {
    color: ${theme.color.txtHigh};
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const ActionButtons = styled.div`
  > button {
    margin-left: ${theme.spacing.xs};
    padding: ${theme.spacing.xs};
    border: none;
    background-color: ${theme.color.bgMedium};
    border-radius: ${theme.borderRadius.xs};

    &:hover {
      cursor: pointer;
      background-color: ${theme.color.bgHigh};
    }

    > * {
      width: ${theme.spacing.md};
      height: ${theme.spacing.md};
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 106px - 75px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: ${theme.spacing.xs};
  }
  ::-webkit-scrollbar-track {
    background: ${theme.color.bgMedium};
    border-radius: ${theme.borderRadius.xxs};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.bgHigh};
    border-radius: ${theme.borderRadius.xxs};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.txtMedium};
  }
`;
