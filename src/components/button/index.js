/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import SendIcon from '@mui/icons-material/Send';

const Button = ({
  type, text, onClick, email
}) => {
  const handleClick = () => {
    onClick();
  };
  return (
    <div>
      {email
        ? (
          <button className="button-container--email" type="submmit" onClick={handleClick}>
            <SendIcon className="button-container__send" />
          </button>
        )

        : <button className="button-container" type={type} onClick={handleClick}>{text}</button>}
    </div>
  );
};

Button.propTypes = {
  type: PropTypes.string,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  email: PropTypes.bool
};

Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  email: false
};
export default Button;
