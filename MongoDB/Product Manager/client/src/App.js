import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
// import {useEffect, useState} from 'react';
import {BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import AllProducts from './views/AllProducts';
import SingleProductbyId from './views/SingleProductById';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      {/* <Link to="/api/productManagers/:_id">Single Product</Link> */}
      <Switch>

        <Route exact path="/">
        <h1>Product Manager</h1>
          <Create/>
          <AllProducts/>
        </Route>

        <Route exact path="/api/productManagers/:_id">
          <SingleProductbyId/>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
