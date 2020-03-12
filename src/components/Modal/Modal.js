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

  return (
    <>
      {(() => {
        switch (props.type) {
          case "modal":
            return <section className="modal">{props.children}</section>;
          case "message":
            return (
              <section className="modal_message">{props.children}</section>
            );
          case "alert":
            return <section className="modal_alert">{props.children}</section>;
          case "prompt":
            return <section className="modal_prompt">{props.children}</section>;
          default:
            return null;
        }
      })()}
    </>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
