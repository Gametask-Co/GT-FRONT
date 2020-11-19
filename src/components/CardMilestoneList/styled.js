import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
  background-color: #282a31;
  border-radius: 20px;
  padding: 1.5rem;

  opacity: ${(props) => (props.visibility ? props.visibility : "0.6")};
  cursor: ${(props) => (props.visibility ? "pointer" : "not-allowed")};

  > img {
    margin-right: 1rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: space-between;

    > h2 {
      color: #a2a2a2;
      font-size: 1.3rem;
    }
    > p {
      color: #434343;
      font-size: 1rem;
      padding-top: 0.5rem;
    }

    > h3 {
      font-size: 1.5rem;
      padding-top: 1rem;
    }

    > span {
      font-size: 0.8rem;
      /* color: #65cba0; */
      color: #434343;
      padding-top: 0.5rem;
    }

    > div {
      display: flex;
      align-items: center;
    }
  }
`;

export const Thumbnail = styled.div`
  width: 250px;
  height: 160px;

  margin-right: 1rem;
  border-radius: 0.9rem;

  background-image: url("https://upload.wikimedia.org/wikibooks/pt/8/81/Introducao_programacao_cover.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
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

  margin-top: 4rem;

  /* background-color: #282a31; */
  background-color: #1c1e23;
  border-radius: 50px;

  &::before {
    content: "";
    padding: 0.5rem;

    width: calc(var(--progress) * 1%);
    /* background-color: hsl(calc(var(--progress) * 1.2), 80%, 50%); */
    /* background-color: #65cba0; */

    background-color: #3f424d;
    transition: all 0.2s ease;
    border-radius: 50px;
  }
`;
