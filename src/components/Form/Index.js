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

  > span {
    margin-bottom: ${theme.spacing.xs};

    color: ${theme.color.txtMedium};
    font-size: ${theme.fontSize.xs};
  }
`;

export default Form;
