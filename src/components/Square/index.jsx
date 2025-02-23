import React from "react";

export default function Square(props) {
  const { className, color = "bg-green-500", title } = props;

  return (
    <div className={className}>
      <p className={`w-5 h-5 rounded ${color}`}></p>
      <span>{title}</span>
    </div>
  );
}
