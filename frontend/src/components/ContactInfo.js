import React, { useEffect, useState } from 'react';

function ContactInfo() {
  const [mycontacts, setMycontacts] = useState([]);
  const [password, setPassword] = useState('');
  const [isAuthenticate, setIsAuthenticate] = useState(false);
  const backendurl="https://portfolio-backend-mae6.onrender.com";

  const handleAuth = async () => {
    try {
      const response = await fetch(`${backendurl}/contactinfo?password=${password}`, {
        method: 'GET',
      });
  
      if (response.status === 200) {
        const data = await response.json();
        setMycontacts(data);
        setIsAuthenticate(true);
      } else {
        alert('Incorrect Password or Unauthorized Access!');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };
  
  return (
    <div>
      <h2>Contact Form Submissions</h2>
      
      {!isAuthenticate ? (
        <div>
          <input
            type="password"
            placeholder="Enter Admin Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleAuth}>Authenticate</button>
        </div>
      ) : mycontacts.length > 0 ? (
        <ul>
          {mycontacts.map((list, index) => (
            <li key={index}>
              {list.name} | {list.email} | {list.message}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contact info available</p>
      )}
    </div>
  );
}

export default ContactInfo;
