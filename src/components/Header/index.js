import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled";

import { ReactComponent as Logo } from "../../assets/icons/logotype.svg";
import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";

const Header = ({ siteTitle }) => {
  return (
    <Styled.Header>
      <Styled.Container>
        <div>
          <Logo />
          {siteTitle ? (
            <>
              <a href="/subject">
                <Styled.KeyboardArrowLeftIcon />
                <span>{siteTitle}</span>
              </a>
            </>
          ) : (
            ""
          )}
        </div>
        <div>
          <Message />
          <Bell />
          <Styled.CircleProfile />
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
