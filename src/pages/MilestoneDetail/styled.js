import styled from "styled-components";
import { DEFAULT_THEME as theme } from "../../styles/constants";
import { Container } from "../../components/Grid/Index";

export const PageWrapper = styled(Container)`
  height: calc(100% - 106px);
  width: 100%;
`;

export const HeaderContent = styled.div`
  > p {
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.semiBold};
    color: ${theme.color.txtHigh};

    > span {
      color: ${theme.color.turquoise};
    }
  }
`;

export const ActionBar = styled.div`
  display: flex;
  align-items: right;
  /* justify-content: space-between; */
  justify-content: flex-end;
  width: 100%;

  > h1 {
    color: ${theme.color.txtHigh};
    font-size: ${theme.fontSize.sm};
    font-weight: ${theme.fontWeight.bold};
  }
`;

export const ActionButtons = styled.div`
  > button {
    margin-left: ${theme.spacing.xs};
    padding: ${theme.spacing.xs};
    border: none;
    background-color: ${theme.color.bgMedium};
    border-radius: ${theme.borderRadius.xs};

    &:hover {
      cursor: pointer;
      background-color: ${theme.color.bgHigh};
    }

    > * {
      width: ${theme.spacing.md};
      height: ${theme.spacing.md};
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

export const TabControls = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1rem 1rem;
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
  input {
    margin-right: 0.5rem;
  }
  label {
    font-size: 0.9rem;
  }
`;

export const ButtonTab = styled.button`
  padding: ${theme.spacing.xs};

  font-size: ${theme.fontSize.sm};
  font-weight: ${theme.fontWeight.semiBold};
  margin-left: 1rem !important;
  background: transparent !important;

  border: none !important;
  border-bottom: 2px solid
    ${(props) => (props.tab ? theme.color.txtHigh : "transparent")} !important;
  color: ${(props) =>
    props.tab ? theme.color.txtHigh : theme.color.txtLow} !important;

  &:first-child {
    margin-left: 0rem !important;
  }

  &:hover {
    cursor: pointer;
    color: white !important;
    border-bottom: 2px solid gray;
  }
`;

export const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - 106px - 75px);
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: ${theme.spacing.xs};
  }
  ::-webkit-scrollbar-track {
    background: ${theme.color.bgMedium};
    border-radius: ${theme.borderRadius.xxs};
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.bgHigh};
    border-radius: ${theme.borderRadius.xxs};
  }
  ::-webkit-scrollbar-thumb:hover {
    background: ${theme.color.txtMedium};
  }
`;

export const ContentWrapper = styled.div`
  font-size: ${theme.fontSize.xs};
  color: ${theme.color.txtMedium};
  display: ${(props) => (props.show === true ? "block" : "none")} !important;
`;
