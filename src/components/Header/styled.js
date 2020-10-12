import styled from "styled-components";

import media from "styled-media-query";
import { KeyboardArrowLeft, KeyboardArrowDown } from "styled-icons/material";

export const Header = styled.div`
  padding: 2rem;
  color: white;
  background-color: #343a40;

  a {
    text-transform: uppercase;
    font-size: 18px;
    font-weight: 700;
    letter-spacing: 0px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > div {
    display: flex;
    align-items: center;

    > svg:first-child {
      margin-right: 2rem;
    }
  }

  /* & ::before {
    
  } */
`;

export const KeyboardArrowLeftIcon = styled(KeyboardArrowLeft)`
  width: 28px;
  height: 28px;

  color: white;
  cursor: pointer;
`;

export const KeyboardArrowDownIcon = styled(KeyboardArrowDown)`
  width: 28px;
  height: 28px;

  color: white;
  cursor: pointer;
`;
