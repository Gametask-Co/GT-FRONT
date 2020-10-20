import styled from "styled-components";

import { KeyboardArrowLeft, KeyboardArrowDown } from "styled-icons/material";

import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";

export const Header = styled.div`
  padding: 1rem;
  margin-bottom: 3rem;
  color: white;

  background: #1c1e23;
  border-bottom: 2px solid #3f424d;

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

export const MessageIcon = styled(Message)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;

  position: relative;
  cursor: pointer;
  width: 24px;
  height: 24px;

  &::before {
    width: 9px;
    height: 9px;
    position: absolute;
    left: -17px;
    top: calc(50% - 4.5px);
    background-color: white;
    border-radius: 50%;
    content: "";
  }

  &::after {
    background-color: red;
    width: auto;
    height: 16px;
    padding: 0 4px;
    position: absolute;
    bottom: -4px;
    right: -4px;
    border-radius: 12px;
    border: 4px solid gray;
    text-align: right;
    font-size: 13px;
    font-weight: bold;
    color: white;
    content: "123";
  }
`;

export const CircleProfile = styled.span`
  height: 30px;
  width: 30px;

  margin: 1rem;

  background-color: #3f424d;
  border-radius: 50%;
`;
