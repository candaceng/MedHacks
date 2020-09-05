import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './Views/Home'
import LogIn from './Views/LogIn'


function App() {
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Home/>
        </Route>

        <Route exact path="/login">
          <LogIn/>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
