import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import "./Login.css"
 
function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');
  const [welcome, setWelcome] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleLogin = () => {
    if (!email.trim()) {
      setEmailError('Email is required');
      return;
    }

    const regex = /^\S+@\S+\.\S+$/;
    if (!regex.test(email)) {
      setEmailError('Invalid email format');
      return;
    }

    // Email is valid, proceed with login
    console.log(`Logged in with email: ${email} and name: ${name}`);
    alert(`Logged in with email: ${email} and name: ${name}`);
    setWelcome(`hello!!   ${name}`);
    setEmail('');
    setName('');
  };

  return (
    <>
     <h2><FontAwesomeIcon className='icon' icon={faUser} />{welcome}</h2>
      <div className="login-container">
        <h1>Login</h1>
        <hr />
        <form>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                required/>

            </div>
            {emailError && <p className="error">{emailError}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <div className="input-wrapper">
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleNameChange}
                required/>
            </div>
          </div>
          <button
            className="login-button mb-2"
            type="button"
            onClick={handleLogin}
          >
            Login
          </button>
        </form>
      </div>
    </>
  );
}

export default Login;
