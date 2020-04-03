import React from "react";
import PropTypes from "prop-types";

import "../../../src/styles/css/message.css";

function Message(props) {
  function onClose(e) {
    props.onClose && props.onClose(e);
  }

  if (!props.show) {
    return null;
  }

  return <section className="modal">{props.children}</section>;
}

Message.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired
};

export default Message;
