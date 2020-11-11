import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  width: 1140px;
  max-width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-left: auto;
  margin-right: auto;

  ${media.lessThan("medium")`
    padding-right: 0px;
    padding-left: 0px;  
  `}
`;

export const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  background-color: #282a31;
  border-radius: 0.9rem;
  align-items: center;
  height: 100%;

  h1,
  span {
    font-size: 1rem;
    color: #434343;
  }

  > div {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    width: 13rem;

    > div {
      display: flex;
      align-items: center;
    }

    button {
      margin-left: 1rem;
      background-color: #3f424d;
      border: none;
      padding: 0.4rem;
      border-radius: 0.6rem;

      &:hover {
        cursor: pointer;
        background-color: gray;
      }
    }
  }
`;

export const CircleProfile = styled.div`
  height: 30px;
  width: 30px;

  margin-right: 1rem;

  background-color: #3f424d;
  border-radius: 50%;
`;

export const SubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  h2 {
    font-size: 1.5rem;
    color: #a2a2a2;
  }

  > div:nth-child(2) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: end;

    button {
      margin-left: 1rem;
      background-color: #282a31;
      border: none;
      padding: 0.8rem;
      border-radius: 0.6rem;
      align-items: center;
      &:hover {
        cursor: pointer;
        background-color: gray;
      }
    }
  }
`;

export const MilestoneWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem;
  display: ${(props) => (props.tab ? "none" : "grid")};
`;

export const ButtonTab = styled.button`
  border: none;
  background: transparent;
  color: white;
  margin-left: 1rem;

  border-bottom: 2px solid ${(props) => (props.tab ? "white" : "transparent")};

  &:first-child {
    border-bottom: 2px solid ${(props) => (props.tab ? "transparent" : "white")};
  }

  &:hover {
    cursor: pointer;
    color: gray;
    border-bottom: 2px solid gray;
  }
`;
