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
  componentDidMount(){
    setTimeout(() => {
      var load = $("#loading");
      load.fadeOut("1000")
    }, 1500);
  }
  render() {
    return (
      <div>
        <div className="load-background" id="loading">
          <div className="load">
            <div className="shadow-wrapper">
              <div className="shadow"></div>
            </div>
            <div className="dragon">
              <div className="body"></div>
              <div className="horn-left"></div>
              <div className="horn-right"></div>
              <div className="eye left"></div>
              <div className="eye right"></div>
              <div className="blush left"></div>
              <div className="blush right"></div>
              <div className="mouth"></div>
              <div className="tail-sting"></div>
            </div>
            <div className="fire-wrapper">
              <div className="fire"></div>
            </div>
            <div className="progress">
              <div className="outer">
                <div className="inner"></div>
              </div>
            </div>
          </div>
        </div>

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
