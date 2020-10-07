import React, { Component } from 'react';
import './calculte.less';

class Calculate extends Component {
  render() {
    const { value, calculate } = this.props;

    return (
      <button className="calculate" value={value} onClick={calculate}>{value}</button>
    );
  }
}

export default Calculate;