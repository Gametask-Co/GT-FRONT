import styled from 'styled-components';
import { IconXXL, IconLG } from '../Icons/styled';
import { DEFAULT_THEME as theme } from '../../styles/constants';

export const ImgLG = styled(IconLG)`
  border: 2px solid ${theme.color.txtHigh};
  border-radius: 50%;
`;

export const ImgXXL = styled(IconXXL)`
  border: 3px solid ${theme.color.txtHigh};
  border-radius: 50%;
`;
