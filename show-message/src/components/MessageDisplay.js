import react, { useState } from 'react';
    
    
const MessageDisplay = (props) => {
    return (
        <div className="form">
            <h1>Current Message</h1>
            <h4><i>{ props.message }</i></h4>
        </div>
    );
};
    
export default MessageDisplay;