import React, { useState } from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const Create = (props) => {
    const history = useHistory();

    const [form,setForm] = useState({
        tilte: "",
        price: "",
        description: "",
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitHandler= (event) => {
        event.preventDefault();

        axios.post("http://localhost:8000/api/productManagers/create", form)
            .then(res => {
                console.log(res);
                history.push('/');
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="w-50 mx-auto p-3">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <input name="title" className="form-control" type="text" placeholder="title" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="price" className="form-control" type="number" placeholder="price" onChange={onChangeHandler} />
                </div>

                <div className="form-group">
                    <input name="description" className="form-control" type="text" placeholder="description" onChange={onChangeHandler} />
                </div>

                <input type="submit" className="btn btn-primary"/>
            </form>
        </div>
    )

}
export default Create;