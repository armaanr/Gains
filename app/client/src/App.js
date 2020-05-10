import React from 'react';
import './App.css';
import Main from './components/pages/main';
import ExerciseList from './components/exerciseList';
import {
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gains</h1>
      </header>
      <Switch>
        <Route path={'/workout/:id'}>
          <ExerciseList/>
        </Route>
        <Route path={'/'}>
          <Main/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
