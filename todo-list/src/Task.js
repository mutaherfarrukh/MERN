import React from 'react';

const Task = (props) => {

    return (
        <div className="task">
            <h2 className={props.checked ? "strikeThrough" : ""} >{props.text}</h2>

            <input type="checkbox" className="form-check" checked={props.checked} onChange={()=>props.checkTask(props.idx)}/>

            <button className="btn btn-danger btn-sm" onClick={() => props.deleteTask(props.idx)}>Remove</button>
        </div>
    )
}

export default Task;