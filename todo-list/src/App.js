import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Task from './Task';
import Input from './components/Input';
import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([])

  const displayTask = (item, i) => {
    return <Task text={item.text} checked={item.checked} idx={i} deleteTask={deleteTask} checkTask={checkTask} key={i}/>
  }

  const deleteTask = (id) => {
    console.log(id);
    setTasks([
      ...tasks.slice(0, id),
      ...tasks.slice(id + 1 )
    ])
  }

  const checkTask = (id) => {
    console.log(id);

    const updatedTask = tasks[id];
    updatedTask.checked = !updatedTask.checked;

    setTasks([
      ...tasks.slice(0, id),
      updatedTask,
      ...tasks.slice(id + 1 )
    ])
  }

  return (
    <div className="App">
      <h1><i>ToDo List</i></h1>

      <Input tasks={tasks} setTasks={setTasks} />
      <div id="tasks">
      {
        tasks.map(displayTask)
      }
      </div>
    </div>
  );
}

export default App;
