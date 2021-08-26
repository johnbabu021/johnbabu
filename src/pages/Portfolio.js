import React from 'react'
import About from '../components/About/About'
import Banner from '../components/Banner/Banner'
import Project from '../components/Projects/Project'
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
