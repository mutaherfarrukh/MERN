import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import {useEffect, useState} from 'react';
import {BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Create from './views/Create';


function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <BrowserRouter>
      <Switch>

        <Route exact path="/">
          <Create/>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
