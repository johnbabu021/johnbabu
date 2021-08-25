import React from 'react'
import './ProjectComponent.css'
import VisibilityIcon from '@material-ui/icons/Visibility';
import GitHubIcon from '@material-ui/icons/GitHub';
function ReactProjectTwo() {
    return (
        <div className="project__component">
            <img src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r2.png" alt="" />
            <div className="view__project">
                <p><a href="https://fir-122f6.web.app/"><VisibilityIcon /></a>
                    <a href="https://github.com/johnbabu021/gmail"><GitHubIcon /></a></p>
            </div>
            <div className="text">
                <h4>Gmail Clone</h4>
                <p>ReactJS</p>
            </div>
        </div>
    )
}

export default ReactProjectTwo
