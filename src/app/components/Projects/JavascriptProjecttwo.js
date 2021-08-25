import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function JavascriptProjectTwo() {
    return (
        <div className="project__component">
            <img src="images/space.png" alt="" />
            <div className="view__project">
                <p><a href="https://johnbabu021.github.io/space-invader/"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/space-invader"><GitHubIcon /></a></p>
            </div>
            <div className="text">
                <h4>Space Invaders</h4>
                <p>Javascript</p>
            </div>
        </div>
    )
}

export default JavascriptProjectTwo
