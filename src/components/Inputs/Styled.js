import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/constants';
import { ReactComponent as IconCheckmark } from '../../assets/icons/checkmark.svg';

export const Input = styled.input`
  height: 54px;
  padding: ${theme.spacing.sm};
  margin-bottom: ${theme.spacing.md};

  border-radius: ${theme.spacing.xs};
  border: 2px solid ${theme.color.bgHigh};
  box-shadow: ${theme.boxShadow.l0};

  color: ${theme.color.txtHigh};
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

  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.sm};
  }
`;

export const Label = styled.label`
  margin-bottom: ${theme.spacing.xs};

  color: ${theme.color.txtMedium};
  font-size: ${theme.fontSize.xs};
`;

// Custom Date Picker
export const Date = styled(Input)``;

// Custom Select
export const Select = styled.select`
  height: 54px;
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

  &::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.sm};
  }
`;

// Custom Radio Button Group
export const RadioGroup = styled.div`
  height: 54px;
  display: flex;
  justify-content: center;
  margin-bottom: ${(props) => (props.margin ? theme.spacing.md : 0)};

  input[type='radio'] {
    width: 0;
    opacity: 0;
    position: fixed;

    &:checked + label {
      font-size: 500;
      color: ${theme.color.txtHigh};

      background-color: ${theme.color.bgMedium};
      box-shadow: ${theme.boxShadow.l0};
    }
  }

  > label {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    padding: ${theme.spacing.sm};
    background-color: ${theme.color.bgHigh};

    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.sm};
    border: 2px solid ${theme.color.bgHigh};

    &:first-of-type {
      border-radius: ${theme.spacing.xs} 0 0 ${theme.spacing.xs};
    }
    &:last-of-type {
      border-radius: 0 ${theme.spacing.xs} ${theme.spacing.xs} 0;
    }
  }
`;

// Custom Checkbox
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

export const CheckboxLabel = styled.label`
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
