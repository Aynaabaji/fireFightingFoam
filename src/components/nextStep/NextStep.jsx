import React from 'react'
import './nextStep.css'
import NextImage from '../../assets/rot.jpeg'
import './responsiveNext.css'

const NextStep = () => {
  return (
    <div id='next'>
      <div className="container">
        <div className="next_content">
            <div className="grid_content">
                <div className="next_image">
                    <div className="next_img">
                      <img src={NextImage} alt="next_step" className="image_common_settings" />
                    </div>
                </div>
                <div className="next_text">
                    <div className="common_heading next_heading">
                        <h3>Your Next Steps</h3>
                    </div>
                    <div className="nextStep_paragraph">
                        <p>The Agency for Toxic Substances and Disease Registry (a division of the CDC) states that exposure to PFAS is a public health concern. The CDC is currently investigating the downstream health effects of PFAS and firefighting foam. Despite this, many companies continue to sell and use PFOA products.</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default NextStep
