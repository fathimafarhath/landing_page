import React from 'react'
import logo from '../images/logo.png'
import { useState } from 'react'
import {Link} from 'react-scroll'


function Navbar() {

    const [nav, setNav] = useState(false)

    const changeBackground = () => {
        if(window.scrollY >= 50) {
            setNav(true)
        }
        else{
            setNav(false)
        }
    }
    
    window.addEventListener('scroll', changeBackground)
    return (
        <nav className={nav ? 'nav active' : 'nav'}>
            <Link to="#" className="logo">
                <img src={logo} alt="" />
            </Link>
            <input type="checkbox" className="menu-btn" id="menu-btn" />
            <label className="menu-icon" htmlFor="menu-btn">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li><Link to="main" className="active" smooth={true} duration={1000}>Home</Link></li>
              
                <li><Link to="#">Features</Link></li>
                <li><Link to="#">About</Link></li>
                <li><Link to="#">UI SS</Link></li>
                <li><Link>Download</Link></li>
            </ul>            
            
        </nav>
    )
}

export default Navbar
