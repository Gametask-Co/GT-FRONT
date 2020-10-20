import styled from "styled-components";

export const Box = styled.div`
  margin: 3vh 18.75vw;
  padding: 4vh auto;
  height: 92vh;
  width: 62.5vw;
  background-color: rgba(255, 255, 255, 0.02);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  > h1 {
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    font-family: jaf-bernina-sans-comp, sans-serif;
    font-weight: 400;
    font-style: normal;
    font-size: 6rem;
    line-height: 7rem;
  }

  > h2 {
    color: rgba(255, 255, 255, 0.6);
    text-transform: uppercase;
    font-family: jaf-bernina-sans-narrow, sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 2rem;
    line-height: 2rem;
  }
`;

export const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
