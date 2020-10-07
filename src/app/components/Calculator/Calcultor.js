import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./calcultor.less";
import Calculate from "./Calculate/Calculate";
import Number from "./Number/Number";

class Calcultor extends Component {
  state = {
    resultShow: "0",
    numberFirst: 0,
    numberSecond: 0,
    symbol: "",
    calcultes: [
      {
        value: " + ",
      },
      {
        value: " - ",
      },
      {
        value: " x ",
      },
    ],
    numbers: [
      {
        value: "7",
      },
      {
        value: "8",
      },
      {
        value: "9",
      },
      {
        value: "4",
      },
      {
        value: "5",
      },
      {
        value: "6",
      },
      {
        value: "1",
      },
      {
        value: "2",
      },
      {
        value: "3",
      },
      {
        value: "0",
      },
    ],
  };

  handleCalculte = (event) => {
    const { state } = this;
    const { resultShow } = state;

    this.setState({
      symbol: event.target.value,
      resultShow: resultShow + event.target.value,
    });
  };

  handleAddNumber = (event) => {
    const { state } = this;
    const { resultShow, numberFirst, numberSecond, symbol } = state;

    if (symbol === "") {
      const temp = parseInt(numberFirst + event.target.value);
      this.setState({
        numberFirst: temp,
      });
    } else {
      const temp = parseInt(numberSecond + event.target.value);
      this.setState({
        numberSecond: temp,
      });
    }

    if (resultShow === "0") {
      this.setState({
        resultShow: event.target.value,
      });
    } else {
      this.setState({
        resultShow: resultShow + event.target.value,
      });
    }
  };

  handleOutput = () => {
    const { state } = this;
    const { numberFirst, numberSecond, symbol } = state;

    if (symbol === " + ") {
      this.setState({
        resultShow: (numberFirst + numberSecond).toString(),
      });
    }
    if (symbol === " - ") {
      this.setState({
        resultShow: (numberFirst - numberSecond).toString(),
      });
    }
    if (symbol === " x ") {
      this.setState({
        resultShow: (numberFirst * numberSecond).toString(),
      });
    }
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
                <Calculate
                  key={index}
                  value={item.value}
                  calculate={this.handleCalculte.bind(this)}
                />
              ))}
              {this.state.numbers.map((item, index) => (
                <Number
                  key={index}
                  value={item.value}
                  addNumber={this.handleAddNumber.bind(this)}
                />
              ))}
              <button className="clear">clear</button>
              <button className="output" onClick={this.handleOutput}>
                =
              </button>
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

export default Calcultor;
