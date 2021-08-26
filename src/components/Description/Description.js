import React from 'react'
import './Description.css'
import DescriptionComponents from './DescriptionComponents'

function Description() {

    return (
        <div className="description">
            <DescriptionComponents right />
            <DescriptionComponents />
            <DescriptionComponents right />

        </div>
    )
}

export default Description
