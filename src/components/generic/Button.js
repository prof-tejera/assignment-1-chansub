import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const startColor = "#90EE90";

const BButton = styled.button`
    //background-color: ${startColor};
    cursor: pointer;
`;

const Button = ({ active, text='start', ...props }) => {
  return (
    <BButton
      className={active ? ".button-active" : "button-regular"}
    >
      {text}
    </BButton>
  );
};

Button.propTypes = {
    color: PropTypes.string,
  };
  

export default Button;
