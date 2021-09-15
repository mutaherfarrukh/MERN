import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SingleProduct = (props) => {
    const {_id,title} = props.data;


    const onDeleteHandler = (_id) => {
        console.log(_id);

        axios.delete(`http://localhost:8000/api/productManagers/${_id}/delete`)
            .then(res => {
                console.log(res);
                // props.setLoaded(false);
                props.setLoaded(prevState=>!prevState);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <div>
                {/* <h3>{title}</h3> */}
                <h3><Link to={`/api/productManagers/${_id}`}>{title}</Link> <button className="btn btn-danger btn-sm" onClick={()=> onDeleteHandler(props.data._id)}>Delete</button></h3>
            </div>
        </div>
    )
}

export default SingleProduct;