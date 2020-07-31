import React from 'react';
import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import Game from './Game'
import About from './About'
import PageHeader from './PageHeader'
import Music from './Music'
import Knight from './Knight'
import $ from 'jquery'

class App extends React.Component {
  render() {
    return (
      <div>
        <PageHeader />
        <div className="container">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/About" component={About} />
            <Route path="/game1" component={Game} />
            <Route path="/game2" component={Knight} />
          </Switch>
        </div>
        <Music />
      </div>
    );
  }

}

export default App;
