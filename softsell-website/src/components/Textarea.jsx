import React from "react";
import "../styles/Textarea.css";

export const Textarea = ({ className, ...props }) => {
  return <textarea className={`textarea ${className}`} {...props} />;
};