import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const SingleProductbyId = (props) => {
    const {_id} = useParams();
    const history = useHistory();


    const [product, setProduct] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/productManagers/"+ _id)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
        },[])

        const onDeleteHandler = (_id) => {
            console.log(_id);
    
            axios.delete(`http://localhost:8000/api/productManagers/${_id}/delete`)
                .then(res => {
                    console.log(res);
                    history.push('/');
                    props.setLoaded(prevState=>!prevState);
                })
                .catch(err => console.log(err));
        }

    return (
        <div>
            <div>
                <h1><Link to={`/api/productManagers/${_id}/update`}>{product.title}</Link></h1>
                <h4>Price: $ {product.price}</h4>
                <h4>Description: {product.description}</h4>
                <h4><button className="btn btn-danger btn-sm" onClick={()=> onDeleteHandler(product._id)}>Delete</button></h4>
            </div>
        </div>
    )
}

export default SingleProductbyId;
