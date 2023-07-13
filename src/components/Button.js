import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-1 px-1 font-poppins font-medium text-sm sm:text-xl outline-none ${styles} rounded-[10px] back-button sm:py-4 sm:px-6 sm:text-primary`}
    >
      Get Started
    </button>
  );
};

export default Button;
