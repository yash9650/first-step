import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import classes from '../css/detail.module.css';
import lungCancer1 from '../images/lung-cancer1.jpg';
import lungCancer2 from '../images/lung-cancer2.png';

export default function Detail() {
    const [data, setData] = useState({});
    const [isloading, setIsLoading] = useState(true);
    const {type,id} = useParams();
    useEffect(()=>{

        // (async()=>{
        //     const response = await fetch(`/disease/${location.state.id}`);
        //     await response.json().then(res => {
        //         setData(res);
        //         setIsLoading(false);
        //     })
        // })();

        fetch(`/disease/${id}`).then(response =>{
            if(!response.ok){
                if(response.status === 500) throw new Error("Check your internet connection");
                throw new Error("Something went wrong!!");
            }
            return response.json();
        }).then(result => {
            setData(result);
            setIsLoading(false);
        }).catch(error => {
            window.alert(error.message);
        })

    },[]);


  return (
    <div className='container'>
        {!isloading && <div className="row">
            <h1 className={`${classes.heading} py-4 mt-4 px-5`}>{data.dName}</h1>
            <div className={`${classes.left_side} col-sm-8 px-5`}>

                <h2 className='py-2' id='desc'>Description</h2>
                <p>{data.description}</p>
                
                <h2 className='py-2' id='symptoms'>Symptoms</h2>
                <p>Signs and symptoms of {data.dName && data.dName.toLowerCase()} may include: <br /></p>
                <ul>
                    {data.symptoms && data.symptoms.map((e,i) => <li key={i}>{e}</li>)}
                </ul>
                
                <h2 className='py-2' id='homeRemedies'>Home Remedies</h2>
                <p>Lung cancer typically doesn't cause signs and symptoms in its earliest stages. Signs and symptoms of lung cancer typically occur when the disease is advanced. <br /><br />Signs and symptoms of lung cancer may include: <br /><br />
                </p>
                <ul>
                    {data.remedies && data.remedies.map((e,i) => <li key={i}>{e}</li>)}
                </ul>
                <h2 className='py-2' id="type">Type</h2>
                <p>{data.type}</p>
                <h2 className='py-2' id="healthEffects">Health Effects</h2>
                <p>{data.healthEffect}</p> 
            </div>

            <div className={`${classes.right_side} col-sm-4 px-5`}>
                <h2 className={`${classes.timeline} py-3`}>Timeline</h2>
                <ul>
                    <li className='py-2'><a href='#desc'>Description</a></li>
                    <li className='py-2'><a href='#symptoms'>Symptoms</a></li>
                    <li className='py-2'><a href='#homeRemedies'>Home Remedies</a></li>
                    <li className='py-2'><a href='#type'>Type</a></li>
                    <li className='py-2'><a href='#healthEffects'>Health Effects</a></li>
                </ul>
                
                <img src={lungCancer1} className='py-3' height="300" alt="lung-cancer" />
                <img src={lungCancer2} className='py-5 my-5' height="400" alt="lung-cancer" />
            </div>
        </div>}
    </div>
  )
}
