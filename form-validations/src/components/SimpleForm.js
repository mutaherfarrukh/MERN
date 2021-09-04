import React, { useState } from 'react';

const SimpleForm = (props) => {
    const [form, setForm] = useState({
        name : "",
        flavor : "",
        topping : "",
        numScoops : 0,
        sauce : "",
        whipped : false,
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name] : event.target.type === "checkbox" ? event.target.checked : event.target.value
        })
    }

    return (
        <div className="form">
            <h1>Build a Sundae (<i>Simple Form  ~easier way~</i>)!</h1>
            <form>

                <div className="form-group">
                    <label>Name</label>
                    <input type="text" className="form-control" name="name" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <label>Flavor</label>
                    <input type="text" className="form-control" name="flavor" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Topping</label>
                    <input type="text" className="form-control" name="topping" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Number of Scoops</label>
                    <input type="number" className="form-control" name="numScoops" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Sauce</label>
                    <input type="text" className="form-control" name="sauce" onChange={onChangeHandler}/>
                </div>

                <div className="form-check">
                    <label>Whipped Cream and Cherry?</label>
                    <input type="checkbox" name="whipped"  onChange={onChangeHandler}/>
                </div>

                <input type="submit" className="btn btn-primary btn-lg"/>
            </form>

            <div>
                <h1>Name: <i>{form.name}</i></h1>
            </div>
        </div>
    )
}


export default SimpleForm;