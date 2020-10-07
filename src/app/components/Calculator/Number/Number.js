import React, { Component } from 'react';
import "./number.less"

class Number extends Component {
  render() {
    const { value, addNumber } = this.props

    return (
    <button className="number" value={value} onClick={addNumber}>{value}</button>
    );
  }
}

export default Number;