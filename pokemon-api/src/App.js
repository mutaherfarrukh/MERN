import {useState} from 'react';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [pokemon, setPokemon] = useState([]);

  const fetchPokemon = () => {
    console.log("clicked!");
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
      .then(res => res.json())
      .then(res => {
        setPokemon(res.results)
    }).catch(err=>{
        console.log(err)
    })
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
