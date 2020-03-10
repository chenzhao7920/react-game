/*heroku website https://nameless-everglades-14725.herokuapp.com
*/
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { renderIntoDocument } from 'react-dom/test-utils';
import { Switch, Route } from 'react-router-dom';
import HomePage from './HomePage'
import Game from './Game'
import Knight from './Knight'
import About from './About'
import PageHeader from './PageHeader'
import Music from './Music'

function App() {
  return (
    <div>
      <PageHeader />
      <div className="container">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/game" component={Game} />
          <Route path= "/knight" component = {Knight} />
          <Route path="/About" component={About} />
        </Switch>
        
      </div>
      <Music />
    </div>
  );
}
export default App;
