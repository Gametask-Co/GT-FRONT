import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const Content = styled.div`
  width: 100%;
  font-size: 1rem;
  padding-right: 3rem;
  overflow-y: auto;

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
  /* display: flex; */
  width: 40%;

  > div:first-child {
    display: flex;
    align-items: right;
    align-content: right;

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

export const WrapCollabsible = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;

  #collapsible {
    display: none;
  }
  .lbl-toggle {
    display: block;
    font-weight: bold;
    font-family: monospace;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: left;
    padding: 1rem;
    color: #ddd;
    background: #282a31;
    cursor: pointer;
    border-radius: 7px;
    transition: all 0.25s ease-out;
  }
  .lbl-toggle:hover {
    color: #fff;
  }

  /* adds number of block */
  .lbl-toggle::before {
    content: " ";
    display: inline-block;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid currentColor;
    vertical-align: middle;
    margin-right: 0.7rem;
    transform: translateY(-2px);
    transition: transform 0.2s ease-out;
  }
  .toggle:checked + .lbl-toggle::before {
    transform: rotate(90deg) translateX(-3px);
  }

  .collapsible-content {
    max-height: 0px;
    overflow: hidden;
    transition: max-height 0.25s ease-in-out;
  }
  .toggle:checked + .lbl-toggle + .collapsible-content {
    max-height: 350px;
  }
  .toggle:checked + .lbl-toggle {
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .collapsible-content .content-inner {
    background: #1c1e23;
    border: 0.5rem solid #282a31;
    border-bottom-left-radius: 7px;
    border-bottom-right-radius: 7px;
    padding: 0.5rem 1rem;
  }
  .collapsible-content p,
  span {
    margin-bottom: 0;
  }
  label {
    font-size: 0.9rem;
  }
`;
