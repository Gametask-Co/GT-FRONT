import React from "react";
import "./Modal.sass";
import PropTypes from "prop-types";

function Modal(props) {
  console.log(props);

  function onClose(e) {
    props.onClose && props.onClose(e);
  };

  if (!props.show) {
    return null;
  }

  return (
    <section className="modal structure">
      {props.children}
    </section>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
