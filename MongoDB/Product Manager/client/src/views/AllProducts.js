import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { useHistory } from 'react-router-dom';
import SingleProduct from '../components/SingleProduct';

const AllProducts = (props) => {
    const [product, setProduct] = useState([]);


    useEffect(()=> {
        axios.get("http://localhost:8000/api/productManagers/all")
            .then(res => {
                setProduct(res.data.results);

            })
            .catch(err => console.log(err))
        },[props.loaded])


    return (
        <div >
            <h1 className="mb-3"><b>All Products:</b></h1>
            {
                product.map((item, i)=> {
                    return <SingleProduct key={i} data={item} setLoaded={props.setLoaded}/>
                })
            }
        </div>
        )
}

export default AllProducts;
