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

      {/* <h3>Modal Window</h3> */}
      {/* <div className="content">{props.children}</div> */}
      {/* <div className="actions">
        <button className="toggle-button" onClick={onClose}>
          close
        </button>
      </div> */}
    </section>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Modal;
