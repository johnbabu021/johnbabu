import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjectFour() {
    return (
        <div className="project__component">
            <img src="images/airbnb.png" alt="" />
            <div className="view__project">
                <p><a href="https://airbnb-fawn.vercel.app/"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/airbnb"><GitHubIcon /></a></p>
            </div>

            <div className="text">
                <h4>Airbnb Clone</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjectFour
