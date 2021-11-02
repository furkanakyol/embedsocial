import React from 'react'
import SocialMediaBenefits from './SocialMediaBenefits';

const FirstBenefits = () => {
    return (
        <div className="first-benefits">
            <div className="benefits-title">
                <div className="benefist-title-in">
                    <h1><b>Let your story live <span>more than 24h.</span></b></h1>
                    <p>You've worked hard to create a beautiful Instagram story but it disappears in 24 hours? <br/> No worries, use our story saver for Instagram to bring them to life on your website.</p>
                </div>
            </div>
            <div className="benefits-badge">
                <SocialMediaBenefits platform="instagram" title="Auto-Sync" description="Instagram Stories" />
                <SocialMediaBenefits platform="facebook" title="Upload" description="Facebook Stories" />
                <SocialMediaBenefits platform="tiktok" title="Sync" description="Tiktok Stories" />
                <SocialMediaBenefits platform="twitter" title="Upload" description="Twitter Fleets" />
                <SocialMediaBenefits platform="linkedin" title="Upload" description="LinkedIn Stories" />
            </div>
        </div>
    )
}
export default FirstBenefits;
