import styled from 'styled-components';
import { rem } from 'polished';
import { DEFAULT_THEME as theme } from '../../styles/constants';

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  &:hover > div {
    display: block;
    left: ${rem(-96)};
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  z-index: 1;

  min-width: 120px;
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.borderRadius.xs};

  a {
    display: block;
    padding: ${theme.spacing.sm};

    &:hover {
      background-color: ${theme.color.bgHigh};
    }

    &:first-of-type {
      border-radius: ${theme.spacing.xs} ${theme.spacing.xs} 0 0;
    }
    &:last-of-type {
      border-radius: 0 0 ${theme.spacing.xs} ${theme.spacing.xs};
    }
  }
`;
