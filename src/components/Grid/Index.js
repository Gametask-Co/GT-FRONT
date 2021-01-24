import styled from 'styled-components';

function getWidthGrid(value) {
  if (!value) return 0;
  return `${(value / 12) * 100}%`;
}

export const Container = styled.div`
  height: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0px 15px;
  box-sizing: border-box;
  overflow: auto;

  &:after,
  &:before {
    content: ' ';
    display: table;
  }

  &:after {
    clear: both;
  }

  @media only screen and (max-width: 450px) {
    padding: 0;
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
  max-width: calc(100% - 30px);
  min-height: 1px;
  margin: 0 15px;
  float: left;
  box-sizing: border-box;
  padding-left: ${({ off = 0 }) => off && getWidthGrid(off)};

  @media only screen and (max-width: 450px) {
    max-width: 100%;
    width: ${({ xs = 12 }) => xs && getWidthGrid(xs)};
  }

  @media only screen and (min-width: 451px) and (max-width: 768px) {
    width: ${({ sm = 12 }) => sm && getWidthGrid(sm)};
  }

  @media only screen and (min-width: 769px) and (max-width: 1170px) {
    width: ${({ md = 12 }) => md && getWidthGrid(md)};
  }

  @media only screen and (min-width: 1171px) {
    width: ${({ lg = 12 }) => lg && getWidthGrid(lg)};
  }
`;
