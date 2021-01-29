import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/constants';

export const Buttom = styled.button`
  margin-top: ${theme.spacing.xl};
  padding: ${theme.spacing.sm} ${theme.spacing.md};

  color: ${theme.color.txtHigh};
  font-family: 'Poppins', sans-serif;
  font-size: ${theme.fontSize.xs};

  background: ${(props) =>
    props.secondary ? theme.color.bgMedium : theme.color.bgHigh};
  border: none;
  border-radius: ${theme.spacing.xs};

  &:hover {
    cursor: pointer;
  }
`;

export const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
