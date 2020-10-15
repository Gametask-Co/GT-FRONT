import React from "react";
import PropTypes from "prop-types";

import * as Styled from "./styled";

function Modal({ show, children }) {
  if (!show) {
    return null;
  }

  return (
    <Styled.ContainerModal>
      <Styled.ModalMain>{children}</Styled.ModalMain>
    </Styled.ContainerModal>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
};

export default Modal;
