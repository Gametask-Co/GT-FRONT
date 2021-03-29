import React from "react";
import * as Styled from "./styled";

const auth_user = JSON.parse(localStorage.getItem("@RNAuth:user"));

const image =
  auth_user !== null
    ? auth_user.avatar_url !== null
      ? auth_user.avatar_url
      : "https://picsum.photos/200/300"
    : "https://picsum.photos/200/300";

export const AvatarMD = (props) => {
  return <Styled.ImgMD src={image} {...props} />;
};

export const AvatarLG = (props) => {
  return <Styled.ImgLG src={image} {...props} />;
};

export const AvatarXXL = (props) => {
  return <Styled.ImgXXL src={image} {...props} />;
};
