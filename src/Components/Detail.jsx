import React from 'react'
import classes from '../css/detail.module.css';
import lungCancer1 from '../images/lung-cancer1.jpg';
import lungCancer2 from '../images/lung-cancer2.png';

export default function Detail() {
  return (
    <div className='container'>
        <div className="row">
            <h1 className={`${classes.heading} py-4 mt-4 px-5`}>Lung Cancer</h1>
            <div className={`${classes.left_side} col-sm-8 px-5`}>

                <h2 className='py-2' id='overview'>Overview</h2>
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
                <h3 className='py-2'>When to see a doctor?</h3>
                <p>Make an appointment with your doctor if you have any persistent signs or symptoms that worry you. <br /><br />If you smoke and have been unable to quit, make an appointment with your doctor. Your doctor can recommend strategies for quitting smoking, such as counseling, medications and nicotine replacement products.</p>

                <h2 className='py-2' id='causes'>Causes</h2>
                <p>Smoking causes the majority of lung cancers — both in smokers and in people exposed to secondhand smoke. But lung cancer also occurs in people who never smoked and in those who never had prolonged exposure to secondhand smoke. In these cases, there may be no clear cause of lung cancer.</p>

                <h3 className='py-2'>How smoking causes lung cancer</h3>
                <p>Doctors believe smoking causes lung cancer by damaging the cells that line the lungs. When you inhale cigarette smoke, which is full of cancer-causing substances (carcinogens), changes in the lung tissue begin almost immediately. <br /><br />At first your body may be able to repair this damage. But with each repeated exposure, normal cells that line your lungs are increasingly damaged. Over time, the damage causes cells to act abnormally and eventually cancer may develop. <br /></p>
                <h3>Types of lung cancer</h3> 
                <p>Doctors divide lung cancer into two major types based on the appearance of lung cancer cells under the microscope. Your doctor makes treatment decisions based on which major type of lung cancer you have.<br /><br />
                The two general types of lung cancer include: <br /><br />
                <ul>
                    <li className='py-2'><b>Small cell lung cancer.</b> Small cell lung cancer occurs almost exclusively in heavy smokers and is less common than non-small cell lung cancer.</li>
                    <li className='py-2'><b>Non-small cell lung cancer.</b> Non-small cell lung cancer is an umbrella term for several types of lung cancers. Non-small cell lung cancers include squamous cell carcinoma, adenocarcinoma and large cell carcinoma.</li>
                </ul>
                </p>

                <h2 className='py-2' id='risk_factors'>Risk Factors</h2>
                <p>A number of factors may increase your risk of lung cancer. Some risk factors can be controlled, for instance, by quitting smoking. And other factors can't be controlled, such as your family history.<br /><br />Risk factors for lung cancer include: <br /><br />
                <ul>
                    <li className='py-2'><b>Smoking.</b> Your risk of lung cancer increases with the number of cigarettes you smoke each day and the number of years you have smoked. Quitting at any age can significantly lower your risk of developing lung cancer.</li>
                    <li className='py-2'><b>Exposure to secondhand smoke.</b> Even if you don't smoke, your risk of lung cancer increases if you're exposed to secondhand smoke.</li>
                    <li className='py-2'><b>Previous radiation therapy.</b> If you've undergone radiation therapy to the chest for another type of cancer, you may have an increased risk of developing lung cancer.</li>
                    <li className='py-2'><b>Exposure to radon gas.</b> Radon is produced by the natural breakdown of uranium in soil, rock and water that eventually becomes part of the air you breathe. Unsafe levels of radon can accumulate in any building, including homes.</li>
                    <li className='py-2'><b>Exposure to asbestos and other carcinogens.</b> Workplace exposure to asbestos and other substances known to cause cancer — such as arsenic, chromium and nickel — can increase your risk of developing lung cancer, especially if you're a smoker.</li>
                    <li className='py-2'><b>Family history of lung cancer.</b> People with a parent, sibling or child with lung cancer have an increased risk of the disease.</li>
                    
                </ul></p>
                <h2 className='py-2' id='complications'>Complications</h2>
                <p>Lung cancer can cause complications, such as: <br /><br />
                <ul>
                    <li className='py-2'><b>Shortness of breath.</b>People with lung cancer can experience shortness of breath if cancer grows to block the major airways. Lung cancer can also cause fluid to accumulate around the lungs, making it harder for the affected lung to expand fully when you inhale.</li>
                    <li className='py-2'><b>Coughing up blood</b> Lung cancer can cause bleeding in the airway, which can cause you to cough up blood (hemoptysis). Sometimes bleeding can become severe. Treatments are available to control bleeding.</li>
                    <li className='py-2'><b>Pain.</b> Advanced lung cancer that spreads to the lining of a lung or to another area of the body, such as a bone, can cause pain. Tell your doctor if you experience pain, as many treatments are available to control pain.</li>
                    <li className='py-2'><b>Fluid in the chest (pleural effusion).</b> Lung cancer can cause fluid to accumulate in the space that surrounds the affected lung in the chest cavity (pleural space). <br /><br />Fluid accumulating in the chest can cause shortness of breath. Treatments are available to drain the fluid from your chest and reduce the risk that pleural effusion will occur again.</li>
                    <li className='py-2'><b>Cancer that spreads to other parts of the body (metastasis).</b>  Lung cancer often spreads (metastasizes) to other parts of the body, such as the brain and the bones. <br /><br />Cancer that spreads can cause pain, nausea, headaches, or other signs and symptoms depending on what organ is affected. Once lung cancer has spread beyond the lungs, it's generally not curable. Treatments are available to decrease signs and symptoms and to help you live longer.</li>
                    
                </ul></p>
                <h2 className='py-2' id='prevention'>Prevention</h2>
                <p>There's no sure way to prevent lung cancer, but you can reduce your risk if you: <br /><br />
                <ul>
                    <li className='py-2'><b>Don't smoke. </b>If you've never smoked, don't start. Talk to your children about not smoking so that they can understand how to avoid this major risk factor for lung cancer. Begin conversations about the dangers of smoking with your children early so that they know how to react to peer pressure.</li>
                    <li className='py-2'><b>Stop smoking. </b> Stop smoking now. Quitting reduces your risk of lung cancer, even if you've smoked for years. Talk to your doctor about strategies and stop-smoking aids that can help you quit. Options include nicotine replacement products, medications and support groups.</li>
                    <li className='py-2'><b>Avoid secondhand smoke. </b> If you live or work with a smoker, urge him or her to quit. At the very least, ask him or her to smoke outside. Avoid areas where people smoke, such as bars and restaurants, and seek out smoke-free options.</li>
                    <li className='py-2'><b>Test your home for radon. </b> Have the radon levels in your home checked, especially if you live in an area where radon is known to be a problem. High radon levels can be remedied to make your home safer. For information on radon testing, contact your local department of public health or a local chapter of the American Lung Association.</li>
                    <li className='py-2'><b>Avoid carcinogens at work. </b> Take precautions to protect yourself from exposure to toxic chemicals at work. Follow your employer's precautions. For instance, if you're given a face mask for protection, always wear it. Ask your doctor what more you can do to protect yourself at work. Your risk of lung damage from workplace carcinogens increases if you smoke.</li>
                    <li className='py-2'><b>Eat a diet full of fruits and vegetables. </b> Choose a healthy diet with a variety of fruits and vegetables. Food sources of vitamins and nutrients are best. Avoid taking large doses of vitamins in pill form, as they may be harmful. For instance, researchers hoping to reduce the risk of lung cancer in heavy smokers gave them beta carotene supplements. Results showed the supplements actually increased the risk of cancer in smokers.</li>
                    <li className='py-2'><b>Exercise most days of the week. </b> If you don't exercise regularly, start out slowly. Try to exercise most days of the week.</li>
                </ul></p>
            </div>


            <div className={`${classes.right_side} col-sm-4 px-5`}>
                <h2 className={`${classes.timeline} py-3`}>Timeline</h2>
                <ul>
                    <li className='py-2'><a href='#overview'>Overview</a></li>
                    <li className='py-2'><a href='#symptoms'>Symptoms</a></li>
                    <li className='py-2'><a href='#causes'>Causes</a></li>
                    <li className='py-2'><a href='#risk_factors'>Risk Factors</a></li>
                    <li className='py-2'><a href='#complications'>Complications</a></li>
                    <li className='py-2'><a href='#prevention'>Prevention</a></li>
                </ul>
                <img src={lungCancer1} className='py-3' height="300" alt="lung-cancer" />
                <img src={lungCancer2} className='py-5 my-5' height="400" alt="lung-cancer" />
            </div>
        </div>
    </div>
  )
}
