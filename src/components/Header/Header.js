import React, { useState, useRef, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import './Header.css'
import ROUTES from '../../constants/Routes'

function Header() {

    const sidebar = useRef(null)
    const history = useHistory()
    const [hamburger, setHamburger] = useState(false)
    const burgerControler = () => {
        setHamburger(!hamburger)
    }
    const openPdf = () => {
        window.open('/pdf/JohnBabu_React_js_Resume.pdf')
        return true;
    }
    const pageBtn = (btnClick) => {
        history.push(btnClick)
        setHamburger(!hamburger)
    }
    const largeBtn = (btnClick) => {
        history.push(btnClick)
    }
    useEffect(() => {
        function clickHandler(e) {
            if (hamburger) {
                if (!sidebar.current.contains(e.target)) {
                    setHamburger(false)
                }
            }

        }
        document.addEventListener('click', clickHandler)

    }, [hamburger])
    return (
        <div className="header" ref={sidebar}>

            <div className="logo__container">
                <img className="header__logo" src="images/me.jpeg" alt="" onClick={() => history.push(ROUTES.DASHBOARD)} />

            </div>

            <div className="pages">
                <p
                    onClick={() => largeBtn(ROUTES.DASHBOARD)}

                >Home</p>
                <p
                    onClick={() => largeBtn(ROUTES.PORTFOLIO)}
                >Works</p>
                <p onClick={() => largeBtn(ROUTES.BLOG)}>Bolg</p>
                <p onClick={() => largeBtn(ROUTES.CONTACT)}>Contact</p>
                <p onClick={() => window.open('/pdf/JohnBabu_React_js_Resume.pdf')}>Resume</p>

            </div>

            <div className="hamburger" onClick={burgerControler}>
                <div className={`hamburger__line ${hamburger && 'open'}`}>
                </div>



            </div>
            <div className={`ham ${hamburger ? 'ham__item' : 'trans'}`} >
                <p
                    onClick={() => pageBtn(ROUTES.DASHBOARD)}
                >Home</p>
                <p
                    onClick={() => pageBtn(ROUTES.PORTFOLIO)}

                >Works</p>
                <p onClick={() => pageBtn(ROUTES.BLOG)}>Bolg</p>
                <p onClick={() => pageBtn(ROUTES.CONTACT)}>Contact</p>
                <p onClick={openPdf}>Resume</p>

            </div>


        </div>
    )
}

export default Header
