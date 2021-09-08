import {useState} from 'react';
import './App.css';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    console.log("clicked!");
    axios.get("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => {
        console.log(res)
        setPokemon(res.data.results)
      })
      .catch(err=>{console.log(err)})
  }

  return (
    <div className="App">
      <button onClick={fetchPokemon} className="btn btn-warning btn-lg mt-5 mb-5">Fetch Pokemon</button>
      <ul>
        {
          pokemon.map((item, i) => {
            return <li key={i}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;
