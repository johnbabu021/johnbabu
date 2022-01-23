import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjectThree() {
    return (
        <div className="project__component">
            <img src="https://github.com/johnbabu021/quizzy/raw/master/public/mainIcon.svg" alt="" />
            <div className="view__project">
                <p><a href="https://quizzy-flax.vercel.app"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/quizzy"><GitHubIcon /></a></p>
            </div>

            <div className="text">
                <h4>Quiz app</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjectThree
