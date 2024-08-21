import React from "react";
class ActionBtn extends React.Component {
  render() {
    return (
      <div className="action">
        <div onClick={this.props.stopTimer}>
          <i className="fi fi-br-ban "></i>
        </div>
        <div className="btn-play" onClick={this.props.startTimer}>
          <i className="fi fi-sc-play "></i>
        </div>
        <div onClick={this.props.resetTimer}>
          <i className="fi fi-br-rotate-left"></i>
        </div>
      </div>
    );
  }
}
export default ActionBtn;
