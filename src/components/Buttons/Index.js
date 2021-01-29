import React from 'react';
import * as Styled from './Styled';

export const ButtomCTA = ({ children, ...props }) => {
  return <Styled.Buttom {...props}>{children}</Styled.Buttom>;
};

export const ButtomBar = ({ children, ...props }) => {
  return <Styled.Bar {...props}>{children}</Styled.Bar>;
};
