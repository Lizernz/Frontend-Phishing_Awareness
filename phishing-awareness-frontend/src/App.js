import React, { useState } from 'react';
import './App.css';

function App() {
 const [email, setEmail] = useState('');
 const [response, setResponse] = useState('');

 const sendPhishingEmail = async () => {
  const res = await fetch('/api/phishing/send/${email}', { method: 'POST' });
  const text = await res.text();
  setResponse(text);
 };

 return (
  <div>
    <h1>Phishing Awareness Simulator</h1>
    <input 
    type="email"
    value={email}
    onChange={e => setEmail(e.target.value)}
    placeholder="Enter employee email"
    />
    <button onClick={sendPhishingEmail}>Send Phishing Email</button>
    <p>{response}</p>
    </div>
 );
}

export default App;
