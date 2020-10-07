import React from "react";
import "./home.less";
import hero_image from "../../../images/hero-image.png";
import calculator from "../../../images/calculator.png";
import timer from "../../../images/timer.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <img src={hero_image} alt="hero-image.png" />
      <section className="menu">
        <section className="submenu">
          <img src={calculator} alt="calculator.png" />
          <Link className="home-link" to="/calcultor">计算器</Link>
        </section>
        <section className="submenu">
          <img src={timer} alt="timer.png" />
          <Link className="home-link" to="/timer">倒计时器</Link>
        </section>
      </section>
    </div>
  );
};

export default Home;
