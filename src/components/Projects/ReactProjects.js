import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjects() {
    return (
        <div className="project__component">
            <img src="https://github.com/johnbabu021/sweetgradients/blob/master/public/Group%201%20(1).png?raw=true" alt="" />
            <div className="view__project">
                <p><a href="https://sweetgradients.vercel.app"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/sweetgradients"><GitHubIcon /></a></p>
            </div>

            <div className="text">
                <h4>Sweetgradients</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjects
