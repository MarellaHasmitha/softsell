import React from "react";
import "../styles/Button.css";

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={`button ${className}`} {...props}>
      {children}
    </button>
  );
};