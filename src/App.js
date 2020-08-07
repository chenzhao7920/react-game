import React from 'react';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import { Switch, Route,Redirect} from 'react-router-dom';
import HomePage from './containers/HomePage'
import Game from './containers/Game'
import About from './containers/About'
import Navigation from './components/Navigation'
import Music from './components/Music/Music'
import Knight from './containers/Knight'
import $ from 'jquery'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/"  render = {()=>{return(<Redirect to="/game1" /> )}} /> 
            <Route exact path="/home" component={HomePage} /> 
            <Route exact path="/About" component={About} />
            <Route exact path="/game1" component={Game}  />
            <Route exact path="/game2" component={Knight} />
          </Switch>
        </div>
        <Music />
      </div>
    );
  }

}

export default App;
