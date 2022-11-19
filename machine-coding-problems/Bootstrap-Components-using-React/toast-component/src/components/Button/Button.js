import React from "react";

const Button = ({ label, className, handleClick, type }) => {
  //   console.log(className, type);
  return (
    <>
      <button className={className} onClick={handleClick} type={type}>
        {label}
      </button>
    </>
  );
};

export default Button;
