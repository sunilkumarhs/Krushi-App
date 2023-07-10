import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-2 px-2 font-poppins font-medium text-[18px] text-sm outline-none ${styles} rounded-[10px] back-button sm:py-4 sm:px-6 sm:text-primary`}
    >
      Get Started
    </button>
  );
};

export default Button;
