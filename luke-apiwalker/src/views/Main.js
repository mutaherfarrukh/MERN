import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Main = (props) => {
    const [option, setOption]  = useState("people");
    const [id, setId] = useState("");
    const history = useHistory();


    const onSubmitHandler = (event) => {
        event.preventDefault();
        history.push(`/${option}/${id}`)
    }

    return (
        <form onSubmit={onSubmitHandler} >
        <div className="form-group">
            <label>Search for: </label>
            <select id="dropdown" onChange ={(event)=> setOption(event.target.value)} value={option}>
            <option value="people">People</option>
            <option value="planets">Planets</option>
            </select>
        </div>

        <div className="form-group">
            <label>ID: </label>
            <input type="number" className="form-control" onChange={(event)=> setId(event.target.value)}/>
            <button type="submit" className="btn btn-primary btn-lg">Search</button>
        </div>
        </form>
    )
}

export default Main;