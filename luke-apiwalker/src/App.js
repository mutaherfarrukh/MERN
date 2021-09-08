import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";
import Main from './views/Main';
import People from './views/People';
import Planets from './views/Planets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div id="header">

        <Link className="btn btn-info" to="/">Main</Link>
        {/* <Link className="btn btn-info" to="/people/1">People</Link>
        <Link className="btn btn-info" to="/planets/1">Planets</Link> */}

      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>

        <Route exact path="/people/:id">
          <People />
        </Route>

        <Route exact path="/planets/:id">
          <Planets />
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
