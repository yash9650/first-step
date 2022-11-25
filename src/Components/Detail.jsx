import React from 'react'
import classes from '../css/detail.module.css';
import lungCancer1 from '../images/lung-cancer1.jpg';
import lungCancer2 from '../images/lung-cancer2.png';

export default function Detail() {
  return (
    <div className='container'>
        <div className="row">
            <h1 className={`${classes.heading} py-4 mt-4 px-5`}>D_Name</h1>
            <div className={`${classes.left_side} col-sm-8 px-5`}>

                <h2 className='py-2' id='desc'>Description</h2>
                <p>Lung cancer is a type of cancer that begins in the lungs. Your lungs are two spongy organs in your chest that take in oxygen when you inhale and release carbon dioxide when you exhale. <br /><br />Lung cancer is the leading cause of cancer deaths worldwide. <br /><br />People who smoke have the greatest risk of lung cancer, though lung cancer can also occur in people who have never smoked. The risk of lung cancer increases with the length of time and number of cigarettes you've smoked. If you quit smoking, even after smoking for many years, you can significantly reduce your chances of developing lung cancer.</p>
                
                <h2 className='py-2' id='symptoms'>Symptoms</h2>
                <p>Lung cancer typically doesn't cause signs and symptoms in its earliest stages. Signs and symptoms of lung cancer typically occur when the disease is advanced. <br /><br />Signs and symptoms of lung cancer may include: <br /><br />
                <ul>
                    <li>A new cough that doesn't go away</li>
                    <li>Coughing up blood, even a small amount</li>
                    <li>Shortness of breath</li>
                    <li>Chest pain</li>
                    <li>Hoarseness</li>
                    <li>Losing weight without trying</li>
                    <li>Bone pain</li>
                    <li>Headache</li>
                </ul></p>
                
                
                <h2 className='py-2' id='homeRemedies'>Home Remedies</h2>
                <p>Lung cancer typically doesn't cause signs and symptoms in its earliest stages. Signs and symptoms of lung cancer typically occur when the disease is advanced. <br /><br />Signs and symptoms of lung cancer may include: <br /><br />
                <ul>
                    <li>A new cough that doesn't go away</li>
                    <li>Coughing up blood, even a small amount</li>
                    <li>Shortness of breath</li>
                    <li>Chest pain</li>
                    <li>Hoarseness</li>
                    <li>Losing weight without trying</li>
                    <li>Bone pain</li>
                    <li>Headache</li>
                </ul></p>
                <h2 className='py-2' id="type">Type</h2>
                <p>Make an appointment with your doctor if you have any persistent signs or symptoms that worry you. <br /><br />If you smoke and have been unable to quit, make an appointment with your doctor. Your doctor can recommend strategies for quitting smoking, such as counseling, medications and nicotine replacement products.</p>

                <h2 className='py-2' id="healthEffects">Health Effects</h2>
                <p>Doctors believe smoking causes lung cancer by damaging the cells that line the lungs. When you inhale cigarette smoke, which is full of cancer-causing substances (carcinogens), changes in the lung tissue begin almost immediately. <br /><br />At first your body may be able to repair this damage. But with each repeated exposure, normal cells that line your lungs are increasingly damaged. Over time, the damage causes cells to act abnormally and eventually cancer may develop. <br /></p>
                
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
        </div>
    </div>
  )
}
