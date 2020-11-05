import styled from "styled-components";

import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";
import { ReactComponent as KeyboardArrowLeftIconSvg } from "../../assets/icons/arrow-ios-left.svg";
import { ReactComponent as KeyboardArrowDownIconSvg } from "../../assets/icons/arrow-ios-down.svg";

export const Header = styled.div`
  padding: 1rem;
  margin-bottom: 3rem;
  color: white;

  background: #1c1e23;
  border-bottom: 2px solid #3f424d;

  a {
    /* text-transform: uppercase; */
    /* font-size: 18px;
    font-weight: 700; */
    letter-spacing: 0px;
    display: flex;
    align-items: center;
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

export const KeyboardArrowLeftIcon = styled(KeyboardArrowLeftIconSvg)`
  width: 28px;
  height: 28px;

  color: white;
  cursor: pointer;
`;

export const KeyboardArrowDownIcon = styled(KeyboardArrowDownIconSvg)`
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

export const CircleProfile = styled.div`
  height: 40px;
  width: 40px;

  margin: 1rem;
  border-radius: 50%;

  background-image: url("https://w7.pngwing.com/pngs/349/288/png-transparent-teacher-education-student-course-school-avatar-child-face-heroes.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Dropdown = styled.div`
  position: relative;
  display: inline-block;

  /* .dropdown:hover .dropdown-content {display: block;}

  .dropdown:hover .dropbtn {background-color: #3e8e41;} */

  &:hover {
    div {
      display: block;
      left: -3rem;
    }
  }
`;

export const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  /* min-width: 160px; */
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;

  a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  a:hover {
    background-color: #ddd;
  }
`;
