import React, { useState } from 'react';

const InputBox = (props) => {
    // const [boxSize, setBoxSize] = useState("");
    const [color, setColor] = useState("");
    const [boxes, setBoxes] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBox = {color : event.target[0].value};
        // props.onNewBox( newBox );
        setBoxes([...boxes, newBox]);
    };

    return(
        <div className="fullForm">
        <form onSubmit={ handleSubmit }>
            <div className="form">
                <label>Color </label>
                <input type="text" onChange={ (event) => setColor(event.target.value) } value={color} />
                <input type="submit" value="Add" />
            </div>
        </form>

        <div style={{display: "flex"}}>
            {boxes.map((item, i) => {
                return (
                    <div key={i} style= {{backgroundColor:color}} className="showBox"></div>
                )
            })}
        </div>
        </div>
    )

}
export default InputBox;
