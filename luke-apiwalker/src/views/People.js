import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const People = (props) => {
    const {id} = useParams();
    const [people, setPeople] = useState([])

    useEffect(()=> {
        axios.get("https://swapi.dev/api/people/" + id)
            .then(res => {
                setPeople(res.data);
                console.log(res);
            })
            .catch(err => console.log(err))
    }, [id])



    return (
        <div>
            <br />
            <h1>{people.name}</h1>
            <p><b>Height:</b> {people.height} cm</p>
            <p><b>Mass:</b> {people.mass} kg</p>
            <p><b>Hair Color:</b> {people.hair_color}</p>
            <p><b>Skin Color:</b> {people.skin_color}</p>
            
        </div>
    )
}

export default People;