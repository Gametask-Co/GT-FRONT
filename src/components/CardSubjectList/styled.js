import { rem, ellipsis } from "polished";
import styled from "styled-components";
import { DEFAULT_THEME as theme } from "../../styles/constants";

export const Wrapper = styled.div`
  display: ${(props) => !props.tab && "none"};
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-bottom: ${theme.spacing.xl};
`;

export const RightSide = styled.div`
  height: ${rem(160)};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Thumbnail = styled.div`
  width: ${rem(280)};
  height: ${rem(160)};

  margin-right: ${theme.spacing.lg};
  border-radius: ${theme.borderRadius.sm};

  background-image: url('https://picsum.photos/400/300');
  /* background-image: url(${(props) =>
    props.src ? props.src : "https://picsum.photos/400/300"}); */
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Text = styled.div``;

export const Title = styled.h3`
  ${ellipsis(rem(457), 2)}
  margin-bottom: ${theme.spacing.sm};
  color: ${theme.color.txtMedium};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.sm};
`;

export const Description = styled.p`
  display: none;
  color: ${theme.color.txtMedium};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  line-height: ${theme.lineHeight.sm};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
`;

export const Teacher = styled.span`
  margin-left: ${theme.spacing.xs};
  color: ${theme.color.txtMedium};
  font-size: ${theme.fontSize.xs};
  line-height: ${theme.lineHeight.md};
`;

export const ProgressBar = styled.div`
  > span {
    font-size: ${theme.fontSize.xs};
    color: ${theme.color.turquoise};
  }
`;

export const Percentage = styled.div.attrs((props) => ({
  percentage: props.percentage,
}))`
  --progress: ${(props) => (props.percentage ? props.percentage : "0")};
  height: ${theme.spacing.xs};
  width: ${rem(287)};
  display: flex;
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.borderRadius.xxs};

  &::before {
    ${({ percentage }) => percentage && "content: '';"}
    width: calc(var(--progress) * 1%);
    padding: ${theme.spacing.xxs};
    border-radius: ${theme.borderRadius.xxs};
    background-color: ${theme.color.turquoise};
    transition: all 0.2s ease;
  }
`;
