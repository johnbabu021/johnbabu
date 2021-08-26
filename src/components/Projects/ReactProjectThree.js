import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjectThree() {
    return (
        <div className="project__component">
            <img src="images/tesla.png" alt="" />
            <div className="view__project">
                <p><a href="https://github.com/johnbabu021"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/tesla"><GitHubIcon /></a></p>
            </div>

            <div className="text">
                <h4>Tesla Clone</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjectThree
