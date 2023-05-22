import React from 'react'
import './foooter.css'

const Footer = () => {
  return (
    <footer>
        <div className="container">
            <div className="footer_content">
                <div className="copyright">
                    <center>
                        Copyright &copy; 2023 FireFoamWarning.com - All Rights Reserved.
                    </center>
                </div>
                <div className="terms">
                    <center>
                        <a href="#">Terms of Service | </a>
                        <a href="#">Privacy Policy | </a>
                        <a href="#">CCPA Notice | </a>
                        <a href="#">Do Not Sell My Info | </a>
                        <a href="#">Accessible View | </a>
                        <a href="#">Contact Us</a>
                    </center>
                </div>
                <div className="last">
                    <center>
                        <small>
                        PAID ATTORNEY ADVERTISEMENT: This Website is a group advertisement. It is not a lawyer referral service. FireFoamWarning.com is owned and operated by National Injury Bureau and is not a law firm. We connect people to legal service and there is no charge to be connected with an attorney. You are under no obligation to retain any services of those connected through our website. We try our best to keep things fair and balanced to help you make the best choice for you. This information does not constitute legal or medical advice and it should not be relied upon as such. Results are not guaranteed and past performance is not an indication of future success. Always consult with your doctor before modifying your medication or regular medical regimen.
                        </small>
                    </center>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
