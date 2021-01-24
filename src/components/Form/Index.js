import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/variables';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;

  a {
    line-height: 130%;
    color: ${theme.color.txtHigh};
  }

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
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.sm};
  }

  > button {
    margin-top: ${theme.spacing.xl};
    padding: ${theme.spacing.sm} ${theme.spacing.md};
    color: ${theme.color.txtHigh};
    font-family: 'Poppins', sans-serif;
    font-size: ${theme.fontSize.xs};
    border: none;
    background: ${theme.color.bgHigh};
    border-radius: ${theme.spacing.xs};

    &:hover {
      cursor: pointer;
    }
  }
`;

export default Form;
