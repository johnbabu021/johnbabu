import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'
import ROUTES from '../../constants/Routes'
function Header() {
    const history = useHistory()
    const [hamburger, setHamburger] = useState(false)
    const burgerControler = () => {
        setHamburger(!hamburger)
    }
    return (
        <div className="header">

            <div className="logo__container">
                <img className="header__logo" src="images/me.jpeg" alt="" onClick={() => history.push(ROUTES.DASHBOARD)} />)

            </div>

            <div className="pages">
                <p
                    onClick={() => history.push(ROUTES.DASHBOARD)}

                >Home</p>
                <p
                    onClick={() => history.push(ROUTES.PORTFOLIO)}
                >Portfolio</p>
                <p>Bolg</p>
                <p>Contact</p>
                <p>Resume</p>

            </div>

            <div className="hamburger" onClick={burgerControler}>
                <div className={`hamburger__line ${hamburger && 'open'}`}>
                </div>



            </div>
            <div className={`ham ${hamburger ? 'ham__item' : 'trans'}`}>
                <p
                    onClick={() => history.push(ROUTES.DASHBOARD)}
                >Home</p>
                <p
                    onClick={() => history.push(ROUTES.PORTFOLIO)}

                >Portfolio</p>
                <p>Bolg</p>
                <p>Contact</p>
                <p>Resume</p>

            </div>


        </div>
    )
}

export default Header
