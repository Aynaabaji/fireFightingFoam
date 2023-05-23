import React from 'react'
import './banner.css'
import './responsiveBanner.css'

const Banner = () => {
  return (
    <div className='banner'>
        <div className="container">
            <div className="banner_content">
                <h1>Firefighting Foam</h1>
                <h2 className='colorHover'>Lifesaving or Lethal?</h2>
                <p>Just because civilians &amp; service members use foam to save lives and property does not mean the substance itself is safe.</p>
                <br />
                <p className='banner_if'>If that ‘acceptable risk’ causes you harm, you may be able to do something about it.</p>
            </div>
        </div>
      
    </div>
  )
}

export default Banner
