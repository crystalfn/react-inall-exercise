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
    calcultes: [" + ", " - ", " x "],
    numbers: ["7", "8", "9", "4", "5", "6", "1", "2", "3", "0"],
  };

  handleCalculte = (event) => {
    const { state } = this;
    const { resultShow, symbol } = state;

    if (symbol !== "") {
      this.handleClear();
    } else {
      this.setState({
        symbol: event.target.value,
        resultShow: resultShow + event.target.value,
      });
    }
  };

  handleAddNumber = (event) => {
    const { state } = this;
    const { resultShow, numberFirst, numberSecond, symbol } = state;

    if (resultShow === "0") {
      this.setState({
        resultShow: event.target.value,
      });
    } else {
      this.setState({
        resultShow: resultShow + event.target.value,
      });
    }

    if (symbol === "") {
      this.changeNumber("numberFirst", numberFirst, event.target.value);
    } else {
      this.changeNumber("numberSecond", numberSecond, event.target.value);
    }
  };

  changeNumber = (field, number, value) => {
    let temp = number === 0 ? value : number + value;
    if (temp.length > 2) {
      this.handleClear();
    } else {
      this.setState({
        [field]: parseInt(temp),
      });
    }
  };

  handleClear = () => {
    this.setState({
      resultShow: "0",
      numberFirst: 0,
      numberSecond: 0,
      symbol: "",
    });
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
                  value={item}
                  calculate={this.handleCalculte.bind(this)}
                />
              ))}

              {this.state.numbers.map((item, index) => (
                <Number
                  key={index}
                  value={item}
                  addNumber={this.handleAddNumber.bind(this)}
                />
              ))}

              <button className="clear" onClick={this.handleClear}>
                clear
              </button>

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
