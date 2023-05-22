import React from 'react'
import './costs.css'
import CostImage from '../../assets/convoy.jpg'

const Costs = () => {
  return (
    <div id='costs'>
      <div className="container">
        <div className="costs_content">
            <div className="grid_content">
                <div className="cost_text">
                    <div className="common_heading cost_heading">
                        <h3>Costs</h3>
                        <p>
                            Treatments for these types of conditions can be extremely expensive. Ultimately, exposure to firefighting foam could mean a lifetime of suffering—and struggling to pay staggering hospital bills. If this is your experience, it’s time to be proactive about compensation for your pain.
                        </p>
                    </div>
                </div>
                <div className="costs_image">
                    <div className="cost_img">
                            <img src={CostImage} alt="costs"  className="image_common_settings"/>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Costs
