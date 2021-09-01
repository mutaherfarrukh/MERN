import logo from './logo.svg';
import './App.css';
import NewReact from './components/newReact';

function App() {
  return (
    <div className="App">
      <NewReact message="Hello Dojo!"/>
      <NewReact msg="Things I need to do:"/>
      <NewReact list="Learn React"/>
      <NewReact list="Climb Mt Everest"/>
      <NewReact list="Run a marathon"/>
      <NewReact list="Feed the dogs"/>
      
    </div>
  );
}

export default App;
