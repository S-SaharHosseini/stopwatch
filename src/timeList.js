import React, { useContext } from "react";
import Item from "./timeItem";
import { colorContext } from "./testContext";
const TimeListComp = () => {
  const times = useContext(colorContext);
  return (
    <div className="timeList">
      {times.timeArr.map((c, index) => (
        <Item key={index} c={c} index={index}>
        </Item>
      ))}
    </div>
  );
};

export default TimeListComp;
