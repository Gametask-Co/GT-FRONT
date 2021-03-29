import React from 'react';

import * as Styled from './styled';

import Gametask from '../../assets/icons/logotype.svg';
import Message from '../../assets/icons/message-circle.svg';
import Bell from '../../assets/icons/bell.svg';
import ArrowDown from '../../assets/icons/arrow-ios-down.svg';

// Logo Gametask
export const GametaskLG = (props) => {
  return <Styled.IconLG src={Gametask} {...props} />;
};
export const GametaskXL = (props) => {
  return <Styled.IconXL src={Gametask} {...props} />;
};

// Icone Message
export const MessageMD = (props) => {
  return <Styled.IconMD src={Message} {...props} />;
};
export const MessageSM = (props) => {
  return <Styled.IconSM src={Message} {...props} />;
};

// Icone Bell
export const BellMD = (props) => {
  return <Styled.IconMD src={Bell} {...props} />;
};

// Icone ArrowDown
export const ArrowDownSM = (props) => {
  return <Styled.IconSM src={ArrowDown} {...props} />;
};
