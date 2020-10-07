import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calcultor.less";
import Calculate from "./Calculate/Calculate";
import Number from "./Number/Number";

class Calcultor extends Component {
  state = {
    resultShow: "0",
    calcultes: [
      {
        value: "+",
      },
      {
        value: "-",
      },
      {
        value: "x",
      },
    ],
    numbers: [
      {
        value: 7,
      },
      {
        value: 8,
      },
      {
        value: 9,
      },
      {
        value: 4,
      },
      {
        value: 5,
      },
      {
        value: 6,
      },
      {
        value: 1,
      },
      {
        value: 2,
      },
      {
        value: 3,
      },
      {
        value: 0,
      },
    ],
  };

  render() {
    return (
      <div className="calculator">
        <section className="calculator-content">
          <h1>在线计算器</h1>
          <section className="calculator-board">
            <div className="result-show">{this.state.resultShow}</div>
            <section className="buttons">
              {this.state.calcultes.map((item, index) => (
                <Calculate key={index} value={item.value} />
              ))}
              {this.state.numbers.map((item, index) => (
                <Number key={index} value={item.value} />
              ))}
              <button className="clear">clear</button>
              <button className="output">=</button>
            </section>
          </section>
          <p>
            <Link className="back-home" to="/">回到主页</Link>
          </p>
        </section>
      </div>
    );
  }
}

export default Calcultor;
