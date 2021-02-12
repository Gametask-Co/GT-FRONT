import styled from 'styled-components';
import { DEFAULT_THEME as theme } from '../../styles/constants';

import { Link } from 'react-router-dom';

import { ReactComponent as ArrowLeftIconSvg } from '../../assets/icons/arrow-ios-left.svg';

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  max-height: ${theme.spacing.xxl};
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  margin-bottom: ${theme.spacing.xl};

  color: ${theme.color.txtHigh};
  background-color: ${theme.color.bgLow};
  border-bottom: 2px solid ${theme.color.bgHigh};
`;

export const LeftSide = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperTitle = styled(Link)`
  display: flex;
  align-items: center;
`;

export const ArrowLeftIcon = styled(ArrowLeftIconSvg)`
  width: ${theme.spacing.md};
  height: ${theme.spacing.md};
  margin-right: ${theme.spacing.xs};

  cursor: pointer;
  color: ${theme.color.txtHigh};
`;

export const Title = styled.span`
  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.semiBold};
`;

export const RightSide = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  height: ${theme.spacing.lg};
  width: ${theme.spacing.lg};

  border-radius: 50%;

  background-image: url('https://w7.pngwing.com/pngs/349/288/png-transparent-teacher-education-student-course-school-avatar-child-face-heroes.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
