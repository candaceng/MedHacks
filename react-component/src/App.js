import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css';

import LogIn from './Views/LogIn'
import SignUp from './Views/SignUp'
import Results from './Views/Results'
import FileUpload from './Views/FileUpload'


function App() {
  return (
    <div>

      <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <FileUpload/>
        </Route>

        <Route exact path="/login">
          <LogIn/>
        </Route>

        <Route exact path="/signup">
          <SignUp/>
        </Route>

        <Route exact path="/results">
          <Results/>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
