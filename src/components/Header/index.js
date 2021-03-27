import React from "react";
import PropTypes from "prop-types";
import { useAuth } from "../../contents/auth";
import { Link, useHistory } from "react-router-dom";

import * as Styled from "./styled";
import { DEFAULT_THEME as theme } from "../../styles/constants";

import DropdownMenu from "../DropdownMenu";
import { GametaskLG, MessageMD, BellMD } from "../Icons";
import { AvatarLG } from "../Avatar";

const Header = ({ Title }) => {
  const { signOut } = useAuth();
  const history = useHistory();

  return (
    <Styled.Header>
      <Styled.LeftSide>
        <GametaskLG right={theme.spacing.lg} />
        {Title && (
          // <Styled.WrapperTitle onClick={() => pageBack}>
          <Styled.WrapperTitle
            onClick={() => {
              history.push("/");
            }}
          >
            <Styled.ArrowLeftIcon />
            <Styled.Title>{Title}</Styled.Title>
          </Styled.WrapperTitle>
        )}
      </Styled.LeftSide>

      <Styled.RightSide>
        <MessageMD right={theme.spacing.lg} />
        <BellMD right={theme.spacing.lg} />
        <AvatarLG />
        <DropdownMenu>
          <Link to="/profile">Perfil</Link>
          <Link to="/" onClick={signOut}>
            Sair
          </Link>
        </DropdownMenu>
      </Styled.RightSide>
    </Styled.Header>
  );
};

Header.propTypes = {
  Title: PropTypes.string,
};
Header.defaultProps = {
  Title: ``,
};

export default Header;
