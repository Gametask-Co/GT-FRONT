import React from "react";

import * as Styled from "./styled";

const CardSubjectList = ({ name, teacher, percentage }) => {
  return (
    <Styled.Wrapper>
      <img src="#" alt={name} />
      <div>
        <h3>{name}</h3>
        <div>
          <Styled.CircleProfile />
          <span> {teacher}</span>
        </div>
        <Styled.Percentage percentage={percentage} />
        <span>{percentage}% Completo</span>
      </div>
    </Styled.Wrapper>
  );
};

export default CardSubjectList;
