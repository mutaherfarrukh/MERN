import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Main from './views/Main';
import People from './views/People';
import Planets from './views/Planets';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
