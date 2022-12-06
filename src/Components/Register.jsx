import React from 'react'
import classes from '../css/login.module.css';
import doctor from '../images/doctor.png';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';

function Register() {
    
  return (
    <div className={`${classes.login} d-flex my-auto`}>
        <div className="container d-flex py-5 align-items-center" style={{backgroundColor:'white'}}>
            <div className={`${classes.box} m-auto row`}>
                <div className={`col-sm-3 ${classes.left}`}>
                    <h1 className="my-5 mx-auto d-flex justify-content-center">Register</h1>
                    <img src={doctor} alt="doctor" />
                </div>
                <div className={`col-sm-9 ${classes.right} p-5`}>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Label className={classes.label}>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" className={`${classes.input}`} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label className={classes.label}>Blood Group</Form.Label>
                            <Form.Select className={classes.input}>
                                <option>Select</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className={classes.label}>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className={`${classes.input}`} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className={classes.label}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className={`${classes.input}`} />
                        </Form.Group>
                        <button className={`px-4 py-2 mt-4 ${classes['login-btn']}`}>Register</button>
                    </Form>
                    <h6 className='m-auto py-4 text-center'>OR</h6>
                    <p className='text-center'>Already have an account? <Link to="/login" className={`${classes['register-login-link']}`}>Login here</Link></p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Register