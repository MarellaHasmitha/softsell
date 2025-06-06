import React from "react";
import "../styles/Input.css";

export const Input = ({ type = "text", className, ...props }) => {
  return <input type={type} className={`input ${className}`} {...props} />;
};