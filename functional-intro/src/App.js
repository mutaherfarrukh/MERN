
import './App.css';
import ClassBox from './components/ClassBox';
import FunctionBox from './components/FunctionBox';


function App() {
  return (
    <div className="App">
      <div>
        <h1>Class Component Here</h1>
        <ClassBox message="Am I superior Component??" likes={2}/>
      </div>

      <div>
        <h1>Functional Component Here</h1>
        <FunctionBox message="Am I Functional Component!!" likes={5000}/>

      </div>
    </div>
  );
}

export default App;
