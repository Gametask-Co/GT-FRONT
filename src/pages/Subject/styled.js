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
`;

export const SubjectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  > div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      margin-left: 1rem;
      background-color: #282a31;
      border: none;
      padding: 0.8rem;
      border-radius: 0.6rem;

      &:hover {
        cursor: pointer;
        background-color: gray;
      }
    }
  }
`;
