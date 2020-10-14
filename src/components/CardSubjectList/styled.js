import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;

  > img {
    margin-right: 1rem;
  }

  > div {    
    > span {
      font-size: 0.8rem;
      color: #65cba0;
    }

    > div {
      display: flex;
      align-items: center;
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

export const Percentage = styled.div.attrs((props) => ({
  percentage: props.percentage,
}))`
  --progress: ${(props) => (props.percentage ? props.percentage : "0")};
  height: 20px;
  display: flex;

  margin-top: 1rem;

  background-color: #282a31;
  border-radius: 50px;

  &::before {
    content: "";
    padding: 0.5rem;

    width: calc(var(--progress) * 1%);
    /* background-color: hsl(calc(var(--progress) * 1.2), 80%, 50%); */
    background-color: #65cba0;
    transition: all 0.2s ease;
    border-radius: 50px;
  }
`;
