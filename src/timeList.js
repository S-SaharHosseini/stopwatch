import React from "react";
import Item from "./timeItem";
const TimeListComp = (props) => {
  return (
    <div className="timeList">
      {props.children.map((c, index) => (
        <Item key={index}>{c}</Item>
      ))}
    </div>
  );
};

export default TimeListComp;
