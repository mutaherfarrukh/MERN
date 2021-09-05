import react, { useState } from 'react';
    
    
const MessageForm = (props) => {
    const [msg, setMsg] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewMessage( msg );
    };

    
    return (
        <form onSubmit={ handleSubmit }>
            <div className="form">
            <h1>Set Message</h1>
            <textarea 
                rows="4"
                cols="50"
                placeholder="Enter your message here"
                onChange={ (e) => setMsg(e.target.value) }
                value={ msg }
            ></textarea>
            <br/>
            <input type="submit" className="btn btn-primary btn-sm" value="Send Message" />
            </div>
        </form>
    );
};
    
export default MessageForm;