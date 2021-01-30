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

  h1 {
    font-weight: bold;
    font-size: 1.2rem;
  }
  h3 {
    color: #a2a2a2;
    font-size: 0.9rem;
    padding-top: 0.8rem;
    padding-bottom: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
      text-transform: uppercase;
      font-weight: bold;
      color: #a2a2a2;
      padding: 1rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: left;
    }
  }
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

export const CircleProfile = styled.div`
  height: 100px;
  width: 100px;

  margin: 1rem;
  border-radius: 50%;

  background-image: url("https://w7.pngwing.com/pngs/349/288/png-transparent-teacher-education-student-course-school-avatar-child-face-heroes.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Insignia = styled.p`
  color: ${(props) => props.color};
  display: flex;
  align-items: center;
  padding: 0.5rem;

  svg {
    fill: ${(props) => props.color};
    margin-right: 0.3rem;
  }

  span {
    color: #a2a2a2;
    margin-left: 0.3rem;
  }
`;
