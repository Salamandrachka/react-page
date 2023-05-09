import React from "react";
import PropTypes from 'prop-types';

function Button(props) {
  const { className, id, backgroundColor, text = "new modal", onClick } = props;

  return (
    <button
      className={className}
      id={id}
      style={{ backgroundColor }}
      onClick={onClick}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

export default Button;