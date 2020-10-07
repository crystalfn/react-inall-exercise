import React, { Component } from 'react';
import "./number.less"

class Number extends Component {
  render() {
    const { value } = this.props

    return (
    <button className="number">{value}</button>
    );
  }
}

export default Number;