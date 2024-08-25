import React, { useContext } from "react";
import { colorContext } from "./testContext";
const Item = (props) => {
  const times = useContext(colorContext);
  const deleteItem = (e) => {
    times.setTimeArr(
      times.timeArr.filter((f) => f != e.target.innerHTML)
    );
  };
  return (
    <div className="timeItem">
      <p id="time" onClick={deleteItem}>
        {props.c}
      </p>
    </div>
  );
};
export default Item;
