import React, { Component } from "react";
import { Link } from "react-router-dom";

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        This is a timer page
        <p>
          <Link to="/">
            回到主页
          </Link>
        </p>
      </div>
    );
  }
}

export default Timer;
