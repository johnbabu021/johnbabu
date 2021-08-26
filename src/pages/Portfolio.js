import React from 'react'
import About from '../app/components/About/About'
import Banner from '../app/components/Banner/Banner'
import Project from '../app/components/Projects/Project'
import './Home.css'
function Portfolio() {
    return (
        <div className="portfolio">
            <Banner />
            <About />
            <Project />
        </div>
    )
}

export default Portfolio
