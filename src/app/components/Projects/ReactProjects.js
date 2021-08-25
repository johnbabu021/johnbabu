import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjects() {
    return (
        <div className="project__component">
            <img src="https://e-commerce-app-hl7jxpyue-johnbabu021.vercel.app/images/vauld.svg" alt="" />
            <div className="view__project">
                <p><a href="https://e-commerce-app-hl7jxpyue-johnbabu021.vercel.app/"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/shopping-cart"><GitHubIcon /></a></p>
            </div>

            <div className="text">
                <h4>E-commerce</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjects
