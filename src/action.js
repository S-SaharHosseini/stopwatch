import React, { useContext } from "react";
// import { colorContext } from "./testContext";
const ActionBtn = (props) => {
  // const test = useContext(colorContext);
  return (
    <div className="action">
      <div onClick={props.stopTimer}>
        <i className="fi fi-br-ban "></i>
      </div>
      <div className="btn-play" onClick={props.startTimer}>
        <i className="fi fi-sc-play "></i>
      </div>
      <div onClick={props.resetTimer}>
        <i className="fi fi-br-rotate-left"></i>
      </div>
    </div>
  );
};
export default ActionBtn;
