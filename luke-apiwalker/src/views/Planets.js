import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Planets = (props) => {
        const {id} = useParams();
        const [planet, setPlanets] = useState([])
    
        useEffect(()=> {
            axios.get("https://swapi.dev/api/planets/" + id)
                .then(res => {
                    setPlanets(res.data);
                    console.log(res);
                })
                .catch(err => console.log(err))
        }, [id])
    return (
        <div>
            <br />
            <h1>{planet.name}</h1>
            <p><b>Climate:</b> {planet.climate}</p>
            <p><b>Terrain:</b> {planet.terrain}</p>
            <p><b>Surface Water:</b> {planet.surface_water}</p>
            <p><b>Population:</b> {planet.population}</p>
        </div>
    )
}

export default Planets;