import React, {Component} from 'react';
import './app.less';
import {Route, BrowserRouter} from "react-router-dom";
// import Home from "./components/Home/Home";
import Header from "./components/Header/Header";

class App extends Component {
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header />
          {/* <Route exact path='/' component={Home}/> */}
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
