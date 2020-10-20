import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled";

const Container = ({ children }) => {
  return <Styled.Container>{children}</Styled.Container>;
};

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
