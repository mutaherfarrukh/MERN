import React, {useState} from 'react';

const HookForm = (props) => {
    const [form, setForm] = useState({
        FirstName: "",
        LastName: "",
        Email: "",
        Password: "",
        ConfirmPassword: "",
    })

    const onChangeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.type === "checkbox" ? event.target.checked : event.target.value
        });
    }


    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(form);
    }

    return(
        <div className="form">
            <form onSubmit={onSubmitHandler}>

                <div className="form-group">
                    <label>First Name</label>
                    <input type="text" className="form-control"  name="FirstName" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control"  name="LastName" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"  name="Email" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="text" className="form-control"  name="Password" onChange={onChangeHandler}/>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control"  name="ConfirmPassword" onChange={onChangeHandler}/>
                </div>

                </form>

            <div className="form">
                <h3>YOUR FORM DATA</h3>
                <h4>First Name: <i>{form.FirstName}</i></h4>
                <h4>Last Name: <i>{form.LastName}</i></h4>
                <h4>Email: <i>{form.Email}</i></h4>
                <h4>Password: <i>{form.Password}</i></h4>
                <h4>Confirm Password: <i>{form.ConfirmPassword}</i></h4>
            </div>

        </div>
    )
}

export default HookForm;