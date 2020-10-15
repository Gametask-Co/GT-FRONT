import styled from "styled-components";

import media from "styled-media-query";

export const Container = styled.div`
  display: flex;

  /* width: 1140px; */
  width: 900px;
  max-width: 100%;

  padding-right: 15px;
  padding-left: 15px;

  margin-left: auto;
  margin-right: auto;

  > div:first-child {
    margin-right: 5rem;
    padding: 3rem;
  }

  ${media.lessThan("medium")`
    padding-right: 0px;
    padding-left: 0px;  
  `}
`;
