import PropTypes from "prop-types";
import React, { useEffect } from "react";

import Container from "../Container";
import * as Styled from "./styled";

const Header = ({ siteTitle }) => {
  return (
    <Styled.Header>
      <Container>
        <h1>{siteTitle}</h1>
      </Container>
    </Styled.Header>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
