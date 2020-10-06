import React, { Component } from "react";
import "./app.less";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Calcultor from "./components/Calculator/Calcultor";
import Timer from "./components/Timer/Timer";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/calcultor" component={Calcultor} />
            <Route exact path="/timer" component={Timer} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
