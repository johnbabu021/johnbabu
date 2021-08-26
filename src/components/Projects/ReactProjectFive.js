import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjectFive() {
    return (
        <div className="project__component">
            <img src="images/spotify.png" alt="" />
            <div className="view__project">
                <p><a href="https://spotify-xi-jet.vercel.app/"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/spotify"><GitHubIcon /></a></p>
            </div>

            <div className="text">
                <h4>Spotify Clone</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjectFive
