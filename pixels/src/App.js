import './App.css';
import Test from './components/Test';
import Pixel from './components/Pixel';

function App() {
  return (
    <div className="App">
      <h1>hey it's me</h1>
      <Test message="heloo it me" background={true}/>
      <Test message="morninggggggggggggg" background={false}/>
      <Test message="ellllloooooo" background={true}/>
      
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
      <div className="row">
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
        <Pixel />
      </div>
    </div>
  );
}

export default App;
