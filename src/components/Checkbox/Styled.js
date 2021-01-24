import styled from 'styled-components';
import { ReactComponent as IconCheckmark } from '../../assets/icons/checkmark.svg';
import { DEFAULT_THEME as theme } from '../../styles/variables';

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const Checkmark = styled(IconCheckmark)`
  width: 16px;
  height: 16px;

  color: ${theme.color.txtHigh};
  display: ${(props) => (props.checked ? 'flex' : 'none')};
`;

export const Text = styled.label`
  color: ${(props) =>
    props.checked ? theme.color.txtHigh : theme.color.txtMedium};
  font-weight: ${(props) => (props.checked ? 500 : 400)};
`;

export const StyledCheckbox = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 24px;
  height: 24px;
  margin-right: ${theme.spacing.xs};
  box-shadow: ${theme.boxShadow.l0};
  border-radius: ${theme.spacing.xxs};
  background: ${theme.color.bgMedium};
  transition: all 150ms;

  border: ${(props) =>
    props.checked
      ? `2px solid ${theme.color.txtMedium}`
      : `2px solid ${theme.color.bgHigh}`};

  img {
    display: ${(props) => (props.checked ? 'flex' : 'none')};
    width: 16px;
    height: 16px;
    color: ${theme.color.txtHigh};
  }
`;

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;
