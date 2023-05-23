import React from 'react'
import './compensation.css'
import './responsiveCompensation.css'

const Compensation = () => {

    const comp = [
        {
            clsNm:"common_compensation_card compensation_crd1",
            text:"There are many people beyond firefighters who come into daily contact with firefighting foam and similar fire-retardant chemicals. Persons under significant threat of fire may work in an environment laced with carcinogenic preventative measures. This is especially prevalent in the military, aeronautic, or construction industries."
        },
        {
    
            clsNm:"common_compensation_card compensation_crd2",
            text:"Exposure does not have to be job-related. Firefighting foam can affect entire communities through drinking water contaminated by chemical runoff. However, most people with a clear link between the contaminant and their condition experienced prolonged exposure."
        },
        {
            clsNm:"common_compensation_card compensation_crd3",
            text:"To qualify, you need to prove that dangerous chemicals from firefighting foam were in your surroundings at high levels—and that you have a directly related injury."
        },
    ]
  return (
    <div id='compensation'>
      <div className="container">
        <div className="compensation_content">
            <div className="common_heading">
                <h3>Compensation Requirement</h3>
            </div>
            <div className="compensation_text">
                {
                    comp.map((compensate)=>(
                        <div className={compensate.clsNm} key={Math.random()} >
                            <p>{compensate.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
      </div>
    </div>
  )
}

export default Compensation
