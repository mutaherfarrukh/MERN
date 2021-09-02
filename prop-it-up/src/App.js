
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard firstname = {"Jane"} lastname = {"Doe"} age = {45} haircolor = {"Black"} likes={0}/>
      <PersonCard firstname = {"John"} lastname = {"Smith"} age = {88} haircolor = {"Brown"} likes={0}/>
      <PersonCard firstname = {"Millard"} lastname = {"Fillmore"} age = {50} haircolor = {"Brown"} likes={0}/>
      <PersonCard firstname = {"Maria"} lastname = {"Smith"} age = {62} haircolor = {"Brown"} likes={0}/>    
    </div>
  );
}

export default App;
