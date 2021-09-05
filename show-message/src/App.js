import './App.css';
import React, { useState } from 'react';
import MessageDisplay from './components/MessageDisplay';
import MessageForm from './components/MessageForm';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [currentMsg, setCurrentMsg] = useState("There are no messages");

  const youveGotMail = ( newMessage ) => {
    setCurrentMsg( newMessage );
}

  return (
    <div className="App">
      <MessageForm onNewMessage={ youveGotMail } />
      <MessageDisplay message={ currentMsg } />
    </div>
  );
}

export default App;
