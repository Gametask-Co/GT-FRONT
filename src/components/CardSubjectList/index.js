import React from 'react';
import * as Styled from './styled';
import { AvatarMD } from '../Avatar';

const CardSubjectList = ({ name, teacher, percentage, tab, description }) => {
  return (
    <Styled.Wrapper tab={tab}>
      <Styled.Thumbnail />
      <Styled.RightSide>
        <Styled.Text>
          <Styled.Title>{name}</Styled.Title>
          <Styled.Description>{description}</Styled.Description>
          <Styled.Flex>
            <AvatarMD />
            <Styled.Teacher>{teacher}</Styled.Teacher>
          </Styled.Flex>
        </Styled.Text>
        {percentage && (
          <Styled.ProgressBar>
            <Styled.Percentage percentage={percentage} />
            <span>{percentage}% Completo</span>
          </Styled.ProgressBar>
        )}
      </Styled.RightSide>
    </Styled.Wrapper>
  );
};

export default CardSubjectList;
