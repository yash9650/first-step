import React from 'react'
import classes from '../css/login.module.css';
import doctor from '../images/doctor.png';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

function Login() {
    
  return (
    <div className={`${classes.login} py-5 my-5`}>
        <div className={`${classes.box} row`}>
            <div className={`col-sm-3 ${classes.left}`}>
                <h1 className={`my-5 mx-auto px-2`}>Login</h1>
                
                <img src={doctor} alt="doctor" />
            </div>
            <div className={`col-sm-9 ${classes.right} p-5`}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className={classes.label}>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" className={`${classes.input}`} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className={classes.label}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" className={`${classes.input}`} />
                    </Form.Group><br />
                    <button className={`px-4 py-2 ${classes['login-btn']}`}>Login</button>
                </Form>
                <h6 className='m-auto py-4 text-center'>OR</h6>
                <p className='text-center'>Don't have an account? <Link to="/register" className={`${classes['register-login-link']}`}>Register here</Link></p>
            </div>

        </div>
    </div>
  )
}

export default Login