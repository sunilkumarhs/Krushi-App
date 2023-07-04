import React from "react";
import "./Buttons.css";
import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to="/Login" className="btn-mobile">
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize} rounded-[20px]`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};
