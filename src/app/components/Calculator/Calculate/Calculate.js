import React, { Component } from 'react';
import './calculte.less';

class Calculate extends Component {
  render() {
    const { value } = this.props;

    return (
      <button className="calculate">{value}</button>
    );
  }
}

export default Calculate;