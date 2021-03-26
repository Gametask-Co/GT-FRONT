import styled, { css } from 'styled-components';
import { ellipsis } from 'polished';
import { DEFAULT_THEME as theme } from '../../styles/constants';
import { Container } from '../../components/Grid/Index';

export const PageWrapper = styled(Container)`
  position: relative;
  height: calc(100% - 106px); // header
  width: 100%;

  ::-webkit-scrollbar {
    width: ${theme.spacing.xs};
  }
  ::-webkit-scrollbar-track {
    background: ${theme.color.bgMedium};
    border-radius: ${theme.borderRadius.xxs};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.bgHigh};
    border-radius: ${theme.borderRadius.xxs};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.txtMedium};
  }
`;

export const MenuWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: ${theme.spacing.sm};
  padding: ${theme.spacing.md} ${theme.spacing.sm};
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.borderRadius.sm};

  h3 {
    text-transform: uppercase;
    color: ${theme.color.txtLow};
    font-size: ${theme.fontSize.xs};
    font-family: ${theme.fontFamily.secondary};
    font-weight: ${theme.fontWeight.bold};
    margin-bottom: ${theme.spacing.md};
  }
`;

export const Link = styled.a(
  ({ selected }) => css`
    font-weight: ${theme.fontWeight.semiBold};
    padding-bottom: ${theme.spacing.xs};
    margin-right: ${theme.spacing.md};
    color: ${selected ? theme.color.txtHigh : theme.color.txtMedium};
    border-bottom: 2px solid ${selected ? theme.color.txtHigh : 'transparent'};

    &:hover {
      cursor: ${selected ? 'default' : 'pointer'};
      color: ${theme.color.txtHigh};
    }
  `,
);

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    margin-bottom: ${theme.spacing.md};
  }

  > img {
    margin-right: ${theme.spacing.sm};
  }

  > p {
    ${ellipsis('', 1)}
    color: ${theme.color.txtMedium};
    font-size: ${theme.fontSize.xs};
  }

  + button {
    margin-left: ${theme.spacing.xs};
    padding: ${theme.spacing.xs};
    border: none;
    background-color: ${theme.color.bgHigh};
    border-radius: ${theme.borderRadius.xs};

    &:hover {
      cursor: pointer;
      background-color: ${theme.color.bgHigh};
    }
  }
`;

export const ProfileWithButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    margin-bottom: ${theme.spacing.md};
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: ${theme.spacing.xl};
`;

export const ActionButtons = styled.div`
  > button {
    margin-left: ${theme.spacing.xs};
    padding: ${theme.spacing.xs};
    border: none;
    background-color: ${theme.color.bgMedium};
    border-radius: ${theme.borderRadius.xs};

    &:hover {
      cursor: pointer;
      background-color: ${theme.color.bgHigh};
    }

    > * {
      width: ${theme.spacing.md};
      height: ${theme.spacing.md};
    }
  }
`;

export const SubjectName = styled.h1`
  color: ${theme.color.txtMedium};
  font-size: ${theme.fontSize.md};
  font-weight: ${theme.fontWeight.bold};
  margin-bottom: ${theme.spacing.lg};
`;

export const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: ${theme.spacing.md};
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NewMilestone = styled.h2`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin-top: ${theme.spacing.huge};
  color: ${theme.color.txtMedium};
  font-weight: ${theme.fontWeight.bold};

  > a {
    margin-top: ${theme.spacing.sm};
    color: ${theme.color.txtHigh};
  }
`;

export const ProgressBar = styled.div`
  margin-bottom: ${theme.spacing.xl};

  p {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.txtMedium};
  }

  span {
    font-size: ${theme.fontSize.sm};
    color: ${theme.color.txtLow};
  }

  > div {
    margin-bottom: ${theme.spacing.xs};
  }
`;

export const Percentage = styled.div.attrs((props) => ({
  percentage: props.percentage,
}))`
  --progress: ${(props) => (props.percentage ? props.percentage : '0')};
  height: ${theme.spacing.sm};
  width: 100%;
  display: flex;
  background-color: ${theme.color.bgMedium};
  border-radius: ${theme.borderRadius.xs};
  box-shadow: ${theme.boxShadow.l0};

  &::before {
    ${({ percentage }) => percentage && "content: '';"}
    width: calc(var(--progress) * 1%);
    padding: ${theme.spacing.xs};
    border-radius: ${theme.borderRadius.xs};
    background-color: ${theme.color.bgHigh};
    transition: all 0.2s ease;
  }
`;
