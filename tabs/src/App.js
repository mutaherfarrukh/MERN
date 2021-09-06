import './App.css';
import Tabs from './components/Tabs';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      {/* //we can also make array instead of objects. */}
      <Tabs tabItems={[
        {label: "Tab1", content: "Tab1 Content"}, 
        {label: "Tab2", content: "Tab2 Content"},
        {label: "Tab3", content: "Tab3 Content"},
      ]} />
    </div>
  );
}

export default App;
