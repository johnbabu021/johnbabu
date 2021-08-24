import React from 'react'
import Contact from '../app/components/Contact/Contact'
import Description from '../app/components/Description/Description'
import Section from '../app/components/Section/Section'
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
