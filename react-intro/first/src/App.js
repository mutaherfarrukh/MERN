import './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const otherClick = () => {
    console.log("you clicked one of the many boxes")
  }

  return (
    <div className="App">
      <h1>Hey it's me</h1>
      <div className="d-flex justify-content-around">
        <div onClick={()=> console.log("Hey from the first box")} className="smallBox"></div>
        <div onClick={otherClick} className="smallBox">
          {8 + 6}
        </div>
        <div onClick={otherClick} className="smallBox"></div>
        <div onClick={otherClick} className="smallBox"></div>
      </div>
    </div>
  );
}

export default App;
