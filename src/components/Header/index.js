import React from "react";
import PropTypes from "prop-types";

import { useAuth } from "../../contents/auth";

import * as Styled from "./styled";

import { ReactComponent as Logo } from "../../assets/icons/logotype.svg";
import { ReactComponent as Message } from "../../assets/icons/message-circle.svg";
import { ReactComponent as Bell } from "../../assets/icons/bell.svg";

const Header = ({ siteTitle }) => {
  const { signed, signOut } = useAuth();

  return (
    <Styled.Header>
      <Styled.Container>
        <div>
          <Logo />
          {siteTitle ? (
            <>
              <a href="/">
                <Styled.KeyboardArrowLeftIcon />
                <span>{siteTitle}</span>
              </a>
            </>
          ) : (
            ""
          )}
        </div>
        {signed ? (
          <div>
            <Message />
            <Bell />

            <Styled.CircleProfile />
            <Styled.Dropdown>
              <Styled.KeyboardArrowDownIcon />
              <Styled.DropDownContent>
                <a href="#">Perfil</a>
                <a href="#" onClick={signOut}>
                  Sair
                </a>
              </Styled.DropDownContent>
            </Styled.Dropdown>
          </div>
        ) : (
          ""
        )}
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
