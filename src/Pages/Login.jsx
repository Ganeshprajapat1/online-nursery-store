import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './CSS/Loginsignup.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:5000/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email: formData.email, password: formData.password }),
    })
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          alert('Login successful!');
          // Optionally, save user info to localStorage or context
        } else {
          alert(data.message || 'Login failed');
        }
      })
      .catch(error => {
        alert('Login failed!');
        console.error('Error:', error);
      });
  };

  return (
    <div>
      <center>
        <span className="ons">WELCOME TO ONLINE NURSERY STORE</span>
      </center>
      <div className="container">
        <div className="cards">
          <div className="card card-1">
            <div className="card__content">
              <div className="login-box">
                <form method="POST" onSubmit={handleSubmit} action="/api/login/">
                  <h2>Login</h2>

                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="mail"></ion-icon>
                    </span>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                    <label>Email</label>
                  </div>

                  <div className="input-box">
                    <span className="icon">
                      <ion-icon name="lock-closed"></ion-icon>
                    </span>
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                    <label>Password</label>
                  </div>

                  <div className="register-link">
                  <button type="submit">LOGIN</button>
                    <p>New user? <Link to="/Loginsignup">Sign Up</Link></p>
                  </div>
                  
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;