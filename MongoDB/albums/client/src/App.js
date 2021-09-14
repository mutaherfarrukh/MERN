import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import {useEffect, useState} from 'react';
import AllAlbums from './views/AllAlbums';
import Create from './views/Create';
import {BrowserRouter, Link, Switch, Route } from 'react-router-dom';

function App() {
  

  return (
    <div className="App">
      <BrowserRouter>
      <div className="header">
        <Link to="/albums/new">Add New Album</Link>
        <Link to="/">All Albums</Link>
        </div>
      <Switch>

        <Route exact path="/">
          <AllAlbums/>
        </Route>

        <Route exact path="/albums/new">
          <Create/>
        </Route>

      </Switch>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
