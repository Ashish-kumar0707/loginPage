import React, { useState } from 'react';
// import axios from 'axios';

const Create = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    console.log('submit button clicked');
    // e.preventDefault();

    // try {
    //   const response = await axios.post('/login', {
    //     username,
    //     password,
    //     email
    //   });
    //   console.log(response.data);
    //   // Redirect to main page or perform other actions after successful login
    // } catch (error) {
    //   setErrorMessage(error.response.data);
    // }
  };

  return (
    <div >
      
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div style={{marginInline:"auto", border:"1px solid purple", marginBlockStart:"100px", width:"400px", display:"flex", flexDirection:"column", gap:"20px", padding:"10px"}}>

        
        <div  style={{display:"flex", justifyContent:"flex-start", gap:"20px"}}>
          <label htmlFor="username" style={{width:"20%"}}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div style={{display:"flex", justifyContent:"flex-start", gap:"20px"}}>
          <label htmlFor="password" style={{width:"20%"}}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div style={{display:"flex", justifyContent:"flex-start", gap:"20px"}}>
          <label htmlFor="email" style={{width:"20%"}}>Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
        </div>
      </form>
    </div>
  );
};

export default Create;
