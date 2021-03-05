import React from 'react';
import * as Styled from './styled';
import { DEFAULT_THEME as theme } from '../../styles/constants';

import { ReactComponent as Checkmark } from '../../assets/icons/checkmark.svg';
import { ReactComponent as Prize } from '../../assets/icons/award.svg';
import { ReactComponent as Lock } from '../../assets/icons/lock.svg';

const MilestoneCard = ({ number, name, deadline, percentage, visibility }) => {
  const isOpen = visibility;
  const isComplete = percentage === '100';

  return isOpen ? (
    <Styled.Wrapper visibility>
      <Styled.Text>
        <Styled.Subtitle>Marco {number}</Styled.Subtitle>
        <Styled.DueDate>
          {isComplete ? 'Concluído em ' : 'Termina em '}
          {deadline}
        </Styled.DueDate>
        <Styled.Title>{name}</Styled.Title>
      </Styled.Text>
      {isComplete ? (
        <Styled.PrizeBar>
          <span>
            <Checkmark width={theme.spacing.sm} height={theme.spacing.sm} />
            Completo
          </span>
          <Prize width={theme.spacing.md} height={theme.spacing.md} />
        </Styled.PrizeBar>
      ) : (
        <Styled.ProgressBar>
          <span>{percentage}% Completo</span>
          <Styled.Percentage percentage={percentage} />
        </Styled.ProgressBar>
      )}
    </Styled.Wrapper>
  ) : (
    <Styled.Wrapper block>
      <Lock width={theme.spacing.md} height={theme.spacing.md} />
      <Styled.Text>
        <Styled.Subtitle visibility>Marco {number}</Styled.Subtitle>
        <Styled.Title>{name}</Styled.Title>
      </Styled.Text>
      <Styled.ProgressBar>
        <span>0% Completo</span>
        <Styled.Percentage percentage={percentage} />
      </Styled.ProgressBar>
    </Styled.Wrapper>
  );
};

export default MilestoneCard;
