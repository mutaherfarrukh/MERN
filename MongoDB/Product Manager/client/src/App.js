import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import axios from 'axios';
import {useState} from 'react';
import {BrowserRouter,Link, Switch, Route } from 'react-router-dom';
import Create from './views/Create';
import AllProducts from './views/AllProducts';
import SingleProductbyId from './views/SingleProductById';
import Edit from './views/Edit';


function App() {
  const [loaded, setLoaded] = useState(false);


  return (

    <div className="App">
      
      <BrowserRouter>
      <Link to="/">Main</Link>
      <Switch>

        <Route exact path="/">
        <h1>Product Manager</h1>
          <Create loaded ={loaded} setLoaded={setLoaded}/>
          <AllProducts loaded ={loaded} setLoaded={setLoaded} />
        </Route>

        <Route exact path="/api/productManagers/:_id">
          <SingleProductbyId/>
        </Route>

        <Route exact path="/api/productManagers/:_id/update">
          <Edit/>
        </Route>

      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
