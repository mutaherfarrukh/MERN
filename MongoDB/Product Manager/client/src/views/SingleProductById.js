import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const SingleProductbyId = (props) => {
    const {_id} = useParams();


    const [product, setProduct] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/productManagers/"+ _id)
            .then(res => setProduct(res.data.results))
            .catch(err => console.log(err))
        },[])

    return (
        <div>
            <div>
                <h1>{product.title}</h1>
                <h4>Price: {product.price}</h4>
                <h4>Description: {product.description}</h4>
            </div>
        </div>
    )
}

export default SingleProductbyId;
