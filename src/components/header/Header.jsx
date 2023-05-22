import React from 'react'
import './header.css'
import Logo from '../../assets/nib_logo.png'

const Header = () => {
  return (
    <header>
        <div className="container">
            <nav>
                <div className="logo">
                    <img src={Logo} alt="logo" />
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header
