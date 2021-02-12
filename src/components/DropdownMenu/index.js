import React from 'react';
import * as Styled from './styled';
import { ArrowDownSM } from '../Icons';
import { DEFAULT_THEME as theme } from '../../styles/constants';

const ContextMenu = ({ children }) => {
  return (
    <div>
      <Styled.Dropdown>
        <ArrowDownSM left={theme.spacing.xs} />
        <Styled.DropDownContent>{children}</Styled.DropDownContent>
      </Styled.Dropdown>
    </div>
  );
};

export default ContextMenu;
