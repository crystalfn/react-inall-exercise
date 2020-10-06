import React, { Component } from "react";
import { Link } from "react-router-dom";

class Calcultor extends Component {
  render() {
    return (
      <div className="calculator">
        This is a calcultor page
        <p>
          <Link to="/">
            回到主页
          </Link>
        </p>
      </div>
    );
  }
}

export default Calcultor;
