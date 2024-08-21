import React from "react";
import ActionBtn from "./action";
var interval;
class TimerComp extends React.Component {
  constructor() {
    super();
    this.state = {
      second: 0,
      minute: 0,
      hour: 0,
      title: "stopwatch",
    };
  }
  startTimer = () => {
    this.setState({
      title: "start",
    });
    interval = setInterval(() => {
      this.setState({
        second: this.state.second + 1,
      });
      if (this.state.second === 59) {
        this.setState({
          second: 0,
          minute: this.state.minute + 1,
        });
      }
      if (this.state.minute === 60) {
        this.setState({
          minute: 0,
          hour: this.state.hour + 1,
        });
      }
    }, 1000);
  };
  stopTimer = () => {
    clearInterval(interval);
    this.setState({
      title: "stop",
    });
  };
  resetTimer = () => {
    this.stopTimer();
    this.setState({
      second: 0,
      minute: 0,
      hour: 0,
      title: "stopwatch",
    });
  };

  render() {
    let h = this.state.hour;
    let m = this.state.minute;
    let s = this.state.second;
    return (
      <div className="timer">
        <i class="fi fi-tr-stopwatch"></i>
        <h1>{`${h > 9 ? h : "0" + h}:${m > 9 ? m : "0" + m}:${
          s > 9 ? s : "0" + s
        }`}</h1>

        <p>{this.state.title}</p>
        <ActionBtn
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
        />
      </div>
    );
  }
}
export default TimerComp;
