import React from 'react'
import { Link } from 'react-scroll'
import Navbar from './Navbar'

function Header() {
    return (
        <div id="main">
            <Navbar />
            <div className="name">
                <h1><span>Launch Your App</span>With Confidence and Creativity</h1>
                <p className="details">Lorem Ipsum is simply dummy text of the printing and typesetting industr</p>
                <Link to="#" className="cv-btn">Download</Link>
            </div>
        </div>
    )
}

export default Header
