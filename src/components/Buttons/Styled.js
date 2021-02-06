import styled from "styled-components";
import { DEFAULT_THEME as theme } from "../../styles/constants";

export const Buttom = styled.button`
  margin-top: ${(props) => (props.top ? theme.spacing.xl : 0)};
  padding: ${theme.spacing.sm} ${theme.spacing.md};

  color: ${(props) =>
    props.danger ? theme.color.txtDanger : theme.color.txtHigh};
  font-family: "Poppins", sans-serif;
  font-size: ${theme.fontSize.xs};

  background: ${(props) =>
    props.secondary || props.danger
      ? theme.color.bgMedium
      : theme.color.bgHigh};

  border: ${(props) =>
    props.danger ? `2px solid ${theme.color.txtDanger}` : "none"};
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
