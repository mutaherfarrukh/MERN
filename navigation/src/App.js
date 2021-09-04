import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Step from './components/Step';
import { useState } from 'react';


function App() {
  const [steps, setSteps] = useState([
    {instructions:"do a thing", direction:"left"},
    {instructions:"blah", direction:"right"},
    {instructions:"fghfhdfh", direction:"forward"},
    {instructions:"eeeeeeeeeeeeeeee", direction:"right"},
  ]);

  const [form, setForm] = useState({
    direction:"left",
    instructions:"",
  })

  const onChangeHandler = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

    const onSubmitHandler = (event) => {
      event.preventDefault();
      
      const newStep = {
        direction: form.direction,
        instructions: form.instructions
      }

      setSteps([...steps, newStep]);
    }

  return (
    <div className="App">

      <form onSubmit={onSubmitHandler}>
        <div className="form-group">
          <select name= "direction" className="form-select" onChange={onChangeHandler}>
            <option value="Left">left</option>
            <option value="Right">right</option>
            <option value="forward">Forward</option>
          </select>
          <input name="instructions" type="text" placeholder="write directions here" className="form-control" onChange={onChangeHandler}/>
          <input type="submit" className="btn btn-primary btn-sm"/>
        </div>
      </form>

      <div id ="allSteps">
      {
        steps.map((item, i)=> {
          return <Step direction={item.direction} instructions={item.instructions} key={i}/>
        })
      }
      </div>
    </div>
  );
}

export default App;
