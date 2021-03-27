import React from "react";
import * as Styled from "./styled";

// const image = "https://picsum.photos/200/300";

const image = JSON.parse(localStorage.getItem("@RNAuth:user")).avatar_url;

export const AvatarMD = (props) => {
  return <Styled.ImgMD src={image} {...props} />;
};

export const AvatarLG = (props) => {
  return <Styled.ImgLG src={image} {...props} />;
};

export const AvatarXXL = (props) => {
  return <Styled.ImgXXL src={image} {...props} />;
};
