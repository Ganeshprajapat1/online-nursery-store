import React, { useState } from 'react'
import './CSS/Loginsignup.css'
import axios from 'axios';
import { Link } from 'react-router-dom';

const Loginsignup = () => {
  const [values, setValues]=useState({
    name: '',
    mob: '',
    add: '',
    mail: '',
    pass: '',
  })
  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(data => {
        alert('Registered successfully!');
      })
      .catch(err => {
        alert('Registration failed!');
        console.log(err);
      });
  }

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
              <form method="POST" onSubmit={handleSubmit}>
                <h2>SIGNUP</h2>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="mail"></ion-icon>
                  </span>
                  <input type="text" name='name' onChange={handleChange} required />
                  <label>NAME</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="call"></ion-icon>
                  </span>
                  <input type="tel" name='mob' onChange={handleChange} required />
                  <label>Mobile Number</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="add"></ion-icon>
                  </span>
                  <input type="text" name='add' onChange={handleChange} required />
                  <label>Address</label>
                </div>

                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="mail"></ion-icon>
                  </span>
                  <input type="email" name='mail' onChange={handleChange} required />
                  <label>Email</label>
                </div>

              
                <div className="input-box">
                  <span className="icon">
                    <ion-icon name="lock-closed"></ion-icon>
                  </span>
                  <input type="password" name='pass' onChange={handleChange} required />
                  <label>Password</label>
                </div>

                

                
              
                <div className="register-link">
                 
                <button type="submit">SIGNUP</button>
                  <p>Already have an account? Please <Link to="/login">Login</Link></p>

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  </div>
  )
}

export default Loginsignup
