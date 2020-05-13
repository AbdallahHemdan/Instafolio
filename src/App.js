import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

import Home from './pages/Home/Home';
import Project from './pages/Project/Project';
import NoMatch from './pages/NoMatch/NoMatch';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      light: localStorage.getItem('theme') !== null ? (localStorage.getItem('theme') === 'true') : true,
    };
  }

  componentDidMount() {
    if (this.state.light) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }

  handleStoreTheme = () => {
    localStorage.setItem('theme', !this.state.light);
  }

  handleChangeTheme = () => {
    this.setState({ light: !this.state.light });
    if (this.state.light) {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }
    this.handleStoreTheme();
  };

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home
              onThemeChange={this.handleChangeTheme}
              light={this.state.light}
            />
          </Route>
          <Route path="/project">
            <Project
              onThemeChange={this.handleChangeTheme}
              light={this.state.light}
            />
          </Route>
          <Route path="*">
            <NoMatch onThemeChange={this.handleChangeTheme}
              light={this.state.light}
            />
          </Route>
        </Switch>
      </Router >
    );
  }
}

export default App;
