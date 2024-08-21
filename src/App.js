import React from "react";
import TimerComp from "./timer";
class AppComp extends React.Component {
  render() {
    return (
      <div className="main">
        <TimerComp />
      </div>
    );
  }
}
export default AppComp;
