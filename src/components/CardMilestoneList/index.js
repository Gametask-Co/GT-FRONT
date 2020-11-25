import React from "react";

import * as Styled from "./styled";

const CardMilestoneList = ({
  number,
  name,
  deadline,
  percentage,
  visibility,
}) => {
  return (
    <Styled.Wrapper visibility={visibility}>
      <div>
        <h2>Marco {number}</h2>
        {visibility ? <p>{deadline}</p> : ""}
        <h3>{name}</h3>
        {visibility ? (
          <>
            <Styled.Percentage percentage={percentage} />
            <span>{percentage}% Completo</span>
          </>
        ) : (
          <>
            <Styled.Percentage percentage={0} />
            <span>{0}% Completo</span>
          </>
        )}
      </div>
    </Styled.Wrapper>
  );
};

export default CardMilestoneList;
