import React from "react";

const PrevArrow = ({className,style,onClick}) => {

  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "white" }}
      onClick={onClick}
    ></div>
  );
};

export default PrevArrow;
