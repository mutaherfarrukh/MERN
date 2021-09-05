import React, {useState} from 'react';

const Form = (props) => {
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
            [event.target.name]: event.target.type === "checkbox" ? event.target.checkbox : event.target.value
        });
    }

    const lengthError = (value, length) => {
        if(value.length >= length){
            return false;
        }
        return true;
    }

    const allValid = (allForm) => {
        return  !lengthError(allForm.FirstName, 2) &&
                !lengthError(allForm.LastName, 2) &&
                !lengthError(allForm.Email, 2) &&
                !lengthError(allForm.Password, 8) &&
                !lengthError(allForm.ConfirmPassword, 8);
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
                    <input type="text" className="form-control" name="FirstName" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.FirstName, 2) && form.FirstName.length !== 0 && "First Name must have at least 2 characters!"}</span>
                </div>

                <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" className="form-control" name="LastName" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.LastName, 2) && form.LastName.length !== 0 && "Last Name must have at least 2 characters!"}</span>
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" name="Email" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.Email, 2) && form.Email.length !== 0 && "Email must have at least 2 characters!"}</span>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" name="Password" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.Password, 8) && form.Password.length !== 0 && "Password must have at least 8 characters!"}</span>
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="text" className="form-control" name="ConfirmPassword" onChange={onChangeHandler}/>
                    <span className="alert-danger">{lengthError(form.ConfirmPassword, 8) && form.ConfirmPassword.length !== 0 && "Password must match!"}</span>

                </div>

            </form>
        </div>
    )
}

export default Form;