import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <a href="https://www.instagram.com/_.joh.n/"><Instagram /></a>
                <a href="https://www.linkedin.com/in/john-babu-3931a319a/"><LinkedIn /></a>
                <a href="https://github.com/johnbabu021"><GitHub /></a>
            </div>
            <div className="footer__right">
                © All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
