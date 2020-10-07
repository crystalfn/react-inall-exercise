import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./timer.less";

class Timer extends Component {
  render() {
    return (
      <div className="timer">
        <section className="timer-content">
          <h1>在线倒计时器</h1>
          <section className="timer-board">
            <section className="setting">
              <div className="time-input">
                <label>设置时间</label>
                <input placeholder="请输入设置的倒计时时间！"></input>
              </div>
              <button>Start</button>
            </section>
            <section className="count-down">
              <p><span>Seconds</span></p>
            </section>
          </section>
          <p>
            <Link className="back-home" to="/">
              回到主页
            </Link>
          </p>
        </section>
      </div>
    );
  }
}

export default Timer;
