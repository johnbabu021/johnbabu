import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjectTwo() {
    return (
        <div className="project__component">
            <img src="https://github.com/johnbabu021/PlayOn/raw/master/public/assets/images/playon.svg" alt="" />
            <div className="view__project">
                <p><a href="https://play-on.vercel.app"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/playon"><GitHubIcon /></a></p>
            </div>
            <div className="text">
                <h4>PlayOn</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjectTwo
