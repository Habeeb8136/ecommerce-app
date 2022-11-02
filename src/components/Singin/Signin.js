import './signin.css'
import React from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

const Signin = () => {
    return (
        <div className='signin-page'>
        <div className='signin-container'>
            <h2>SIGNIN</h2>
            <input placeholder='username'></input><br></br><br></br>
            <input placeholder='password' type='password'></input><br></br><br></br>
            <Button>LOGIN</Button>
        </div>
        </div>
    );
}

export default Signin;
