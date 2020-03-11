import React from "react";
import "../../../src/styles/css/modal.css";
import PropTypes from "prop-types";

function Modal(props) {
  console.log(props);

  function onClose(e) {
    props.onClose && props.onClose(e);
  }

  if (!props.show) {
    return null;
  }

  return props.text === "complete" ? (
    <section className="modal">{props.children}</section>
  ) : "message" ? (
    <section className="modal_message">{props.children}</section>
  ) : (
    <section className="modal structure">{props.children}</section>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
