import React from "react";

const Button = ({ text, rightIcon, classNames, onHandleClick }) => {
  return (
    <>
      <button
        className={`capitalize flex items-center text-sm font-light active:scale-95 transition duration-150 ${classNames}`}
        onClick={onHandleClick}
      >
        {text}
        {rightIcon && rightIcon}
      </button>
    </>
  );
};

export default Button;
