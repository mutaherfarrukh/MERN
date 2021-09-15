import React from 'react';
import { Link } from 'react-router-dom';

const SingleProduct = (props) => {
    const {_id,title} = props.data;
    return (
        <div>
            <div>
                {/* <h3>{title}</h3> */}
                <h3><Link to={`/api/productManagers/${_id}`}>{title}</Link></h3>
            </div>
        </div>
    )
}

export default SingleProduct;