import React from "react";
const ActionBtn = (props) => {


    return (
      <div className="action">
        <div onClick={ ()=>{props.stopTimer();props.handeNewTime()} }>
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
