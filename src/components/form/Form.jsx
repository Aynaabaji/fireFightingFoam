import React from 'react'
import './form.css'
import About from '../../assets/about.jpeg'
import './responsiveForm.css'

const Form = () => {

    const exposedOptions = [
        {
            value:"Civilian Firefighter"
        },
        {
            value:"Military Firefighter"
        },
        {
            value:"Other Military Servicemember"
        },
        {
            value:"Airport Personnel"
        },
        {
            value:"Other Exposure"
        },
        {
            value:"No Exposure"
        }
    ]

    const cancerOptions = [
        {
            value:"Kidney Cancer",
        },
        {
            value:"Pancreatic Cancer",
        },
        {
            value:"Testicular Cancer",
        },
        {
            value:"Prostate Cancer",
        },
        {
            value:"Bladder Cancer",
        },
        {
            value:"Thyroid Cancer",
        },
        {
            value:"Thyroid Disease",
        },
        {
            value:"Liver Cancer",
        },
        {
            value:"Ulcerative Colitis",
        },
        {
            value:"Other Cancer Diagnosis",
        },
        {
            value:"No Cancer",
        },
    ]

    const attorneyOptions = [
        {
            value:"Yes"
        },
        {
            value:"No"
        }
    ]

  return (
    <div id='form'>
      <div className="container">
        <div className="form_content">
            

            <div className="about">
                <div className="about_image">
                    <div className="about_img">
                        <img className='image_common_settings' src={About} alt="about" />
                    </div>
                </div>
                <div className="about_content">
                    <div className="common_heading">
                        <h3>
                            About Firefighting Foam
                        </h3>
                    </div>
                    <div className="about_details">
                        <p>Firefighting foam is a specialized substance used to suppress and extinguish fires. It is designed to smother the fire by creating a thick blanket that separates the fuel source from oxygen, preventing its sustenance.

The composition of firefighting foam typically includes water, foam concentrate, and air. Foam concentrate contains surfactants that reduce the surface tension of water, allowing it to spread more effectively. Other additives, such as stabilizers and corrosion inhibitors, may also be included to enhance performance.

There are two main types of firefighting foam: Class A foam and Class B foam. Class A foam is primarily used for fires involving ordinary combustible materials like wood, paper, and cloth. It works by penetrating the porous structure of these materials, suppressing the fire and reducing the chance of re-ignition. Class B foam, on the other hand, is specifically formulated for fires involving flammable liquids such as gasoline, oil, and chemicals. It forms a barrier that prevents the release of flammable vapors and suppresses the fire.

Firefighting foam is applied using specialized equipment like foam nozzles, monitors, or proportioning systems. These systems ensure the proper mixing of foam concentrate and water, creating the required foam solution. The foam solution is then discharged onto the fire, either as a foam spray or as expanded foam.</p>
                    </div>
                </div>
                <div className="about_text"></div>
            </div>

            <div className="form_field">
                <form action="#" method='post'>
                    <div className="form_heading">
                        <hr />
                        <center>
                            <h5>YOU MAY QUALIFY FOR SIGNIFICANT COMPENSATION</h5>
                        </center>
                        <hr />
                    </div>

                    <div className="form_data">
                        <label htmlFor="#">How were you exposed to firefighting foam (AFFF)?</label>
                        <select name="exposed" id="exposed" className='form-select form_input'>
                            <option disabled selected>-- Select --</option>
                            {
                                exposedOptions.map((ex)=>(
                                    <option key={Math.random()} value={ex.value}>{ex.value}</option>
                                ))
                            }
                        </select>
                        <br />

                        <label htmlFor="#">Did you or a loved one develop any of the these cancers following the exposure?</label>
                        <select name="cancer" id="cancer" className='form-select form_input'>
                            <option disabled selected>-- Select --</option>
                            {
                                cancerOptions.map((option)=>(
                                    <option key={Math.random()} value={option.value}>{option.value}</option>
                                ))
                            }
                        </select>

                        <br />
                        <label htmlFor="#">Did you or a loved one develop any of the these cancers following the exposure?</label>
                        <select name="cancer" id="cancer" className='form-select form_input'>
                            <option disabled selected>-- Select --</option>
                            {
                                attorneyOptions.map((option)=>(
                                    <option key={Math.random()} value={option.value}>{option.value}</option>
                                ))
                            }
                        </select>
                        <br />

                        <div className="name_field">
                            <div className="first_name">
                                <label htmlFor="#">First Name</label>
                                <input type="text" className="form-control form_input" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="#">Last Name</label>
                                <input type="text" className="form-control form_input" />
                            </div>
                        </div>
                        <br />

                        <label htmlFor="#">Email Address</label>
                        <input type="email" className="form-control form_input" />

                        <br />

                        <div className="contact_field name_field">
                            <div className="phone">
                                <label htmlFor="#">Phone</label>
                                <input type="text" className="form-control form_input" />
                            </div>
                            <div className="last_name">
                                <label htmlFor="#">Zip Code</label>
                                <input type="text" className="form-control form_input" />
                            </div>
                        </div>
                        <br />

                        <label htmlFor="#">Please describe where the exposure took place & any other details (Optional)</label>
                        <textarea name="details" id="form_details" className='form-control form_input'></textarea>

                        <br />

                        <input type="checkbox" name="agreement" value="Yes" id="agreement" required />&nbsp;&nbsp;
		                <small>By checking this box and clicking the "Agree and Submit" button below, I represent that I am 18+ years of age and have read and agreed to the National Injury Bureau Terms and Conditions and Privacy Policy; I consent to the transfer of information that I provide on this site to third-party legal service providers and non-legal service providers, third party partners and their affiliates and service providers; I agree to be contacted by email & telephone, which may include artificial or pre-recorded calls and/or SMS text messages, delivered via automated technology, to the email and phone number that I have provided.</small>

                        <br />
                        <br />

                        <button type="submit" className="form-control form_submit" >Submit</button>



                        
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Form
