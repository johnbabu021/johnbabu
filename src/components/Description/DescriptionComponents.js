import React from 'react'
import ScrollReveal from 'scrollreveal'

function DescriptionComponents({ right }) {
    var slideLeft = {
        origin: 'top',
        easing: 'cubic-bezier(0.5, 0, 0, 1)',
        distance: '120px',
        duration: 1000,
        delay: 100,
        reset: true,

    };
    ScrollReveal().reveal('.description__info', slideLeft)

    return (
        <div className={`description__info ${right && 'right'}`}>

            <h4 className="">Full Stack Javascript Developer</h4>
            <p>High profficency in Javascript ability to make responsive design



            </p>
        </div>
    )
}

export default DescriptionComponents
