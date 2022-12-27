import React from "react";
import classes from '../css/home.module.css';
import {Link } from 'react-router-dom';

function Home() {
    return(
        <>
        <div className={classes.head}>
            <div className={classes.bg_text}>
                <h2>Be a HERO. Save LIVES. <br />FIRST AID is for everyone, everywhere.</h2>
            </div>
        </div>

        <div className={`col-12 ${classes['consult-our-doctor']}`}>
            <div className="row">
                <div className="col-sm-6 pt-5 mt-5">                
                    <h1 className={`${classes.consult_heading} pt-5 px-5` }>Consult a Doctor</h1>
                    <Link to="/hospitals"><button className={`${classes.consult_button} py-2 px-3 my-3 mx-5`}>Click here</button></Link>
                </div>
                <div className={`col-sm-6 px-5 mx-5 ${classes['consult-img']}`}>
                    {/* <img src={img2} alt="consult-our-doctor" /> */}
                </div>
            </div>
        </div>        
        </>
    );
}

export default Home;