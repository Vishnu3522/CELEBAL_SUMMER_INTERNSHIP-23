import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';

import "./Login.css"
 
function Login() {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [emailError, setEmailError] = useState('');

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
  };

  return (
    <>
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
              />
               <FontAwesomeIcon className='icon' icon={faUser} />

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
              />
              <FontAwesomeIcon icon={faLock} />
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
