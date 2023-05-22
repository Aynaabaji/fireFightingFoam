import React from 'react'
import './sideEffects.css'
import SideEffect from '../../assets/sideEffects.jpeg'
import {FaHandPointRight} from 'react-icons/fa'

const SideEffects = () => {
  return (
    <div id='sideEffects'>
      <div className="container">
        <div className="grid_content">
            <div className="sideEffects_image">
                <div className="side_img">
                    <img src={SideEffect} alt="sideEffects" className='image_common_settings'/>
                </div>
            </div>
            <div className="sideEffects_text">
                <div className="common_heading side_main_heading">
                    <h3>
                        Side Effects
                    </h3>
                </div>
                <div className="common_text">
                    <p>Firefighting foam contains substances called PFAS. Certain types of PFAS, such as PFOA and PFOS, can be toxic. There are two primary reasons why:</p>

                    <p className='sideEffects_point'>
                        <div className='side_icons'><FaHandPointRight /></div> 
                        <div className='side_point'>
                            <h5 className="common_heading side_point_heading">Forever Chemicals</h5>
                            <p>These types of PFAS are often known as 'forever chemicals' because they do not break down in the environment or human bodies. The ramifications for health could be life-long.
                            </p>
                        </div>
                    </p>

                    <p className='sideEffects_point'>
                        <div className='side_icons'><FaHandPointRight /></div> 
                        <div className='side_point'>
                            <h5 className="common_heading side_point_heading">Carcinogens</h5>
                            <p>
                                These chemicals have also been proven to be carcinogenic.
                            </p>
                        </div>
                    </p>
                    <p>Carcinogens cause many cancers by affecting your DNA on a cellular level. These chemicals can also weaken your immune system. Aside from cancers, PFAS have also been shown to cause other conditions, such as fertility and pregnancy issues, liver damage, increased cholesterol, asthma, thyroid disease, and more.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default SideEffects
