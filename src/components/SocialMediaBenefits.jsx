import React from 'react'

const SocialMediaBenefits = ({platform, title, description}) => {
    return (
        <div className="social-media-benefits">
            <div className="icon">
                {platform === platform && <img src={`./img/social/${platform}.png`} /> }
            </div>
            <div className="title">
                <b>{title}</b>
            </div>
            <div className="description">
                {description}
            </div>
        </div>
    )
}
export default SocialMediaBenefits;