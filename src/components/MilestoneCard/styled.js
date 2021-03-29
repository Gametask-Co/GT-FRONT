import styled from 'styled-components';
import { ellipsis, rem } from 'polished';
import { DEFAULT_THEME as theme } from '../../styles/constants';

export const Wrapper = styled.div`
  position: relative;
  min-width: ${rem(272)};
  max-width: ${rem(297)};
  height: ${rem(272)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  padding: ${theme.spacing.md};
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.borderRadius.sm};
  cursor: ${(props) => (props.visibility ? 'pointer' : 'default')};

  &:hover {
    ${({ block }) => !block && `box-shadow: ${theme.boxShadow.l2};`}
  }

  > svg {
    position: absolute;
    top: calc(50% - ${theme.spacing.md} / 2);
    left: calc(50% - ${theme.spacing.md} / 2);
    path {
      fill: ${theme.color.txtMedium};
    }
    rect {
      fill: none;
    }
  }

  &::before {
    ${({ block }) => block && "content: '';"}
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.25;
    background: ${theme.color.bg};
    border-radius: ${theme.borderRadius.sm};
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Title = styled.h2`
  ${ellipsis('', 2)}
  color: ${theme.color.txtHigh};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.semiBold};
  line-height: ${theme.lineHeight.md};
`;

export const Subtitle = styled.h3`
  color: ${theme.color.txtMedium};
  font-family: ${theme.fontFamily.secondary};
  font-size: ${theme.fontSize.xs};
  font-weight: ${theme.fontWeight.bold};
  text-transform: uppercase;
  margin-bottom: ${({ visibility }) =>
    !visibility ? theme.spacing.xs : theme.spacing.sm};
`;

export const DueDate = styled.p`
  color: ${theme.color.txtLow};
  font-size: ${theme.fontSize.xs};
  margin-bottom: ${theme.spacing.md};
`;

export const PrizeBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  > svg path {
    fill: ${theme.color.bgLow};
  }

  > span {
    display: flex;
    align-items: center;

    > svg {
      rect {
        fill: ${theme.color.turquoise};
      }
      margin-right: ${theme.spacing.xs};
    }

    color: ${theme.color.turquoise};
    font-family: ${theme.fontFamily.secondary};
    font-size: ${theme.fontSize.xs};
    font-weight: ${theme.fontWeight.bold};
    text-transform: uppercase;
  }
`;

export const ProgressBar = styled.div`
  > span {
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.txtLow};
  }
`;

export const Percentage = styled.div.attrs((props) => ({
  percentage: props.percentage,
}))`
  --progress: ${(props) => (props.percentage ? props.percentage : '0')};
  height: ${theme.spacing.xs};
  width: 100%;
  display: flex;
  background-color: ${theme.color.bgLow};
  border-radius: ${theme.borderRadius.xxs};

  &::before {
    ${({ percentage }) => percentage && "content: '';"}
    width: calc(var(--progress) * 1%);
    padding: ${theme.spacing.xxs};
    border-radius: ${theme.borderRadius.xxs};
    background-color: ${theme.color.bgHigh};
    transition: all 0.2s ease;
  }
`;
