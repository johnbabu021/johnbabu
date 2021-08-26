import React, { useEffect, useRef } from 'react'
import './section.css'
import ScrollReveal from 'scrollreveal'
import lottie from 'lottie-web'
function Section() {
    const container = useRef(null)
    useEffect(() => {
        lottie.loadAnimation({
            container: container.current,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            animationData: require('./program.json'),

        })
    }, [])

    var slideLeft = {
        origin: 'right',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '120px',
        duration: 1000,
        reset: true,

    };
    ScrollReveal().reveal('.paragraph', slideLeft)
    ScrollReveal().reveal('.container', slideLeft)

    return (
        <div className="section">
            <div className="section__text__area">
                <h2>Hello I'm John</h2>
                <p className="paragraph">I'm a Full Stack Developer who helps
                    <br></br>to turn ideas into accessible experiences.</p>
            </div>
            <div className="section__img__area">


                <div className="container" ref={container}></div>

            </div>

        </div>
    )
}

export default Section
