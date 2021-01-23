import styled from 'styled-components';
import media from 'styled-media-query';

function getWidthGrid(value) {
  if (!value) return;

  let width = (value / 12) * 100;
  return `width: ${width}%`;
}

export const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 15px;
  box-sizing: border-box;

  &:after,
  &:before {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

export const Row = styled.div`
  width: 100%;
  height: auto;
  float: left;
  box-sizing: border-box;

  &:after,
  &:before {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }
`;

export const Col = styled.div`
  width: 100%;
  min-height: 1px;
  padding: 0.25rem;
  float: left;
  box-sizing: border-box;

  ${media.lessThan('medium')} {
    width: ${({ sm }) => sm && getWidthGrid(sm)}%;
  }

  ${media.lessThan('large')} {
    width: ${({ md }) => md && getWidthGrid(md)}%;
  }

  ${media.greaterThan('large')} {
    width: ${({ lg }) => lg && getWidthGrid(lg)}%;
  }
`;
