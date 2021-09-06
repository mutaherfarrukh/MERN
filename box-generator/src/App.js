
import './App.css';
import InputBox from './components/InputBox';
import DisplayBox from './components/DisplayBox';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';


function App() {
  const[presentBox, setPresentBox] = useState([]);
  const newBox = (box) => {
    setPresentBox([...presentBox, box]);
  }

  return (
    <div className="App">
      <h1>Generate Box</h1>
      {/* <InputBox /> */}
      {/* <DisplayBox /> */}
      <br />
      <InputBox  boxes={presentBox} />

    </div>
  );
}


export default App;
