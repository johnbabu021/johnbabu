import React from 'react'
import Contact from '../components/Contact/Contact'
import Description from '../components/Description/Description'
import Section from '../components/Section/Section'
import './Home.css'
function Home() {
    return (
        <div className="home">
            <Section />
            <Description />
            <Contact />
        </div>
    )
}

export default Home
