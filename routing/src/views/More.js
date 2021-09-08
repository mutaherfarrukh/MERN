import React from 'react';
import { useParams } from 'react-router-dom';

const More = (props) => {
    const {word, num} = useParams();

    return (
        <div><h1>Your Phrase is: {word}, {isNaN(num) ? 0 : num}</h1></div>
    )
}

export default More;