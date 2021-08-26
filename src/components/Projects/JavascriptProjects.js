import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function JavascriptProjects() {
    return (
        <div className="project__component">
            <img src="images/quiz.png" alt="" />
            <div className="view__project">
                <p><a href="https://github.com/johnbabu021"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021"><GitHubIcon /></a></p>
            </div>
            <div className="text">
                <h4>Quiz app</h4>
                <p>Javascript</p>
            </div>
        </div>
    )
}

export default JavascriptProjects
