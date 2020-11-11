import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  font-size: 1rem;
  padding-right: 3rem;

  div {
    display: flex;

    span {
      color: #65cba0;
    }

    &:first-child {
      width: 100%;
      align-items: center;

      justify-content: space-between;

      div {
        flex-direction: column;
        align-items: start;
      }
    }

    > button {
      padding: 1rem;
      background-color: #282a31;
      color: white;
      border: none;
      border-radius: 0.6rem;
      font-size: 1rem;

      &:hover {
        cursor: pointer;
        background-color: gray;
      }
    }
  }
`;

export const EmbedContainer = styled.div`
  display: flex;
  position: relative;
  padding-bottom: 56.25%;
  height: 0;
  overflow: hidden;
  max-width: 100%;

  iframe,
  object,
  embed {
    padding-top: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

export const Block = styled.div`
  display: flex;

  > div:first-child {
    display: flex;
    align-items: right;

    span {
      padding: 1rem;
    }
  }
`;
