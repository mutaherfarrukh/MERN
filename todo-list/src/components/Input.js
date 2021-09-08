import React, { useState } from 'react';

const Input = (props) => {
    const [currentTask, setCurrentTask] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        console.log(currentTask);

        const newTask= {
            text : currentTask,
            checked : false
        }

    props.setTasks([...props.tasks, newTask]);
    }

    return (
        <div className="form-group">
            <form onSubmit={onSubmitHandler}>
            <input type="text" className="form-control" onChange={(event) => setCurrentTask(event.target.value)}/>
            <input type="submit" className="btn btn-primary btn-lg" />
            </form>
        </div>
    )
}

export default Input;