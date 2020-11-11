import React from "react";

import * as Styled from "./styled";

const CardSubjectList = ({
  name,
  teacher,
  percentage,
  tab,
  milestone,
  description,
}) => {
  return (
    <Styled.Wrapper tab={tab}>
      <Styled.Thumbnail />
      <div>
        <h2>{name}</h2>
        <h3>{description}</h3>

        {milestone ? (
          <div>
            <span> {milestone}</span>
          </div>
        ) : (
          <div>
            <Styled.CircleProfile />
            <span> {teacher}</span>
            <span> {milestone}</span>
          </div>
        )}

        {percentage ? (
          <>
            <Styled.Percentage percentage={percentage} />
            <span>{percentage}% Completo</span>
          </>
        ) : (
          ""
        )}
      </div>
    </Styled.Wrapper>
  );
};

export default CardSubjectList;
