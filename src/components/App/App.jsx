import React from 'react';
import './App.css';
// import this guy below V
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import Animals from '../Animals/Animals.jsx';
import Plants from '../Plants/Plants.jsx';
import Home from '../Home/Home.jsx';
import AnimalDetail from '../Animals/AnimalDetail';

function App() {
  return (
    <div className="App">
      <h1>SPAs!</h1>
      <Router>
        {/* Navigation Pane as Unordered List
        Needs to be inside the Router but before the Routes*/}
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/plants'>Plants</Link>
            </li>
            <li>
              <Link to='/animals'>Animals</Link>
            </li>
          </ul>
        </nav>

        {/* Routes go here!!! */}
        {/* You CAN have multiple components in a route */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/animals">
          <Animals />
        </Route>

        {/* Detail page or detail view */}
        <Route exact path="/animals/:id">
          <AnimalDetail />
        </Route>

        <Route exact path="/plants">
          <Plants />
        </Route>
      </Router>

    </div>
  );
}

export default App;
