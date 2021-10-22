import React from 'react'
import { Link } from 'react-scroll'

function Contact() {
    return (
        <div id="contact">
            <h3>Send Me Mail</h3>
            <div className="contact-input">
                <input type="email" placeholder="example@gmail.com" />
                <Link to="#">Contact</Link>
            </div>
            
        </div>
    )
}

export default Contact
