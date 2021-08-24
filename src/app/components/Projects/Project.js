import React from 'react'
import './Project.css'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import { useState } from 'react';
import ReactProjects from './ReactProjects';
import ReactProjectTwo from './ReactProjectTwo';
import JavascriptProjects from './JavascriptProjects';
import JavascriptProjectTwo from './JavascriptProjecttwo';
import NodeJsProjects from './NodeJsProjects';
function Project() {
    const [react, setReact] = useState(true)
    const [javascript, setJavascript] = useState(false)
    const [node, setNode] = useState(false)
    var [length, setLength] = useState(0)
    var [reactProject, setReactProject] = useState([{ name: ReactProjects }, { name: ReactProjectTwo }])
    const HandleReact = () => {
        setReact(true)
        setJavascript(false)
        setNode(false)
        setReactProject([{ name: ReactProjects }, { name: ReactProjectTwo }])
    }
    const HandleJavascript = () => {
        setReact(false)
        setJavascript(true)
        setNode(false)
        setReactProject([{ name: JavascriptProjects }, { name: JavascriptProjectTwo }])
    }
    const HandleNode = () => {
        setReact(false)
        setJavascript(false)
        setNode(true)
        setReactProject([{ name: NodeJsProjects }])
    }
    let Rproject = reactProject[length].name
    const decrement = () => {
        if (length > 0) {
            length = length - 1;
            setLength(length)
            Rproject = reactProject[length].name
        }
    }
    const increment = () => {
        if (reactProject.length != length + 1) {
            length = length + 1;
            setLength(length)
            Rproject = reactProject[length].name
        }
    }
    return (
        <div className="project">
            <div className="project__sidebar">
                <p className={`${react && 'side'}`} onClick={HandleReact} ><img alt="" src="images/logo192.png" /> ReactJS</p>
                <p className={`${javascript && 'side'}`} onClick={HandleJavascript}><img alt="" src="images/javascript.png" /> Javascript</p>
                <p className={`${node && 'side'}`} onClick={HandleNode} ><img alt="" src="images/nodejs.png" /> NodeJS</p>

            </div>
            <div className="image__container">
                {react && <img alt="" src="images/logo192.png" />}
                {javascript && <img alt="" src="images/javascript.png" />}
                {node && <img alt="" src="images/nodejs.png" />}            </div>
            <div className="project__contents">

                <div className="arrow__btn">
                    <ExpandLessIcon disabled={length === 0} className={`${length === 0 && 'disable'} button`} onClick={decrement} />
                    <KeyboardArrowDownIcon className={`${reactProject.length === length + 1 && 'disable'} button`} onClick={increment} />
                </div>
                <div className="project__details">
                    <Rproject />

                </div>
            </div>

        </div>
    )
}

export default Project
