import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./header.less"

class Header extends Component {
  render() {
    return (
      <header className="header">
        <ul>
          <li>
            <NavLink className="link" to="/">HOME</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/calcultor">在线计算器</NavLink>
          </li>
          <li>
            <NavLink className="link" to="/timer">在线倒计时器</NavLink>
          </li>
        </ul>
      </header>
    );
  }
}

export default Header;
