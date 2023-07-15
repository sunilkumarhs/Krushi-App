import React from "react";
import "./Buttons.css";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

const STYLES = ["btn--primary", "btn--outline"];

const SIZES = ["btn--medium", "btn--large"];

export const Buttons = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const navigate = useNavigate();
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];
  const signButton = async () => {
    {
      auth.currentUser ? logOut() : navigate("/Login");
    }
  };

  const logOut = async () => {
    await signOut(auth);
    navigate("/");
  };

  return (
    <button
      className={`btn ${checkButtonStyle} ${checkButtonSize} rounded-[20px]`}
      onClick={signButton}
      type={type}
    >
      {children}
    </button>
  );
};
