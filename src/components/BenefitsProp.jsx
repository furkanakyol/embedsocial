import React from 'react'

const BenefitsProp = ({title, text}) => {
    return (
        <div className="benefits-prop">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default BenefitsProp
