import { GitHub, Instagram, LinkedIn } from '@material-ui/icons'
import React from 'react'
import './Footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__left">
                <Instagram />
                <LinkedIn />
                <GitHub />
            </div>
            <div className="footer__right">
                © All Rights Reserved
            </div>
        </div>
    )
}

export default Footer
