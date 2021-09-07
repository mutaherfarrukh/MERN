import { useState } from 'react';
import './App.css';

function App() {
  const [meanings, setMeanings] = useState([]);
  const [search, setSearch] = useState("");

  const fetchAPI = (event) => {
    event.preventDefault();

    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        console.log(res[0].meanings);
        setMeanings(res[0].meanings);
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="App">
      <h1><i>Find The Meaning!</i></h1>
      <form onSubmit={fetchAPI}>
        <input onChange={(event)=> setSearch(event.target.value)} type="text" />
      <button className="buttonStyle" type="submit">Click Me!</button>

      </form>

      <h3><ul>
        {
          meanings.map((item, i) => {
            return <li key={i}>{item.definitions[0].definition}</li>
          })
        }
      </ul></h3>
    </div>
  );
}

export default App;
