import './signup.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    return (
        <div className='signup-page'>
        <div className='signup-container'>
            <h2>CREATE ACCOUNT</h2>
            <input placeholder='New username'></input><br></br><br></br>
            <input placeholder='enter emailid' ></input><br></br><br></br>
            <input placeholder='New password' type='password'></input><br></br><br></br>
            <input placeholder='Confirm password' type='password'></input><br></br><br></br>
            <Button>CREATE</Button>
        </div>
        </div>
    );
}

export default Signup;
