import PropTypes from "prop-types";
import React from "react";

import * as Styled from "./styled";
import { ReactComponent as Logo } from "../../assets/icons/logotype.svg";

const Header = ({ siteTitle }) => {
  return (
    <Styled.Header>
      <Styled.Container>
        <div>
          <Logo />
          <Styled.KeyboardArrowLeftIcon />
          <h1>{siteTitle}</h1>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <Styled.KeyboardArrowDownIcon />
        </div>
      </Styled.Container>
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
