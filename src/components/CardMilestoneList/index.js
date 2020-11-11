import React from "react";

import * as Styled from "./styled";

const CardMilestoneList = ({ number, name, deadline, percentage }) => {
  return (
    <Styled.Wrapper>
      <div>
        <h2>Marco {number}</h2>
        <p>{deadline}</p>
        <h3>{name}</h3>
        <Styled.Percentage percentage={percentage} />
        <span>{percentage}% Completo</span>
      </div>
    </Styled.Wrapper>
  );
};

export default CardMilestoneList;
