import React from "react";

const Input = ({
  lable,
  type,
  name,
  value,
  placeholder,
  error,
  onHandleChange,
}) => {
  return (
    <div className="relative">
      <div className="text-sm text-dark-blue font-medium py-1">{lable}</div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onHandleChange}
        className="border rounded-md px-3 py-2 w-full focus:outline-none placeholder:text-[rgba(13, 60, 109, 0.5)] placeholder:text-sm"
      />
    </div>
  );
};

export default Input;
