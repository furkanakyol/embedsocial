import React from 'react'
import BenefitsProp from './BenefitsProp';
import MiniUserCard from './MiniUserCard'

const SecondBenefits = () => {
    return (
        <div className="second-benefits">
            <div className="second-benefits-in">
                <div className="title">
                    <h1>
                        <b> Double your <span>conversions.</span><br/>
                            Double your <span>growth.</span></b>
                    </h1>
                </div>
                <div className="benefits-prop-flex">
                    <BenefitsProp title="Brands" text="Enhance the visual showcase of your products with unique content making visitors convert to buyers."/>
                    <BenefitsProp title="Marketers" text="No more re-purposing, re-cropping or re-uploading the same content from your Instagram stories to your website."/>
                    <BenefitsProp title="Web designers" text="Every story you post on Instagram, it is automatically saved in your account. Auto updates you unique content."/>
                </div>
                <div className="flex f-direction cv-area">
                    <h1 className="text-align-center">Clovin</h1>
                    <p className="text-align-center">
                    “Storytelling on another level. EmbedStories is great - it takes <br/>
                    pride of place on our homepage aggregating stories from our<br/>
                    Instagram account. I highly recommend this product. ”.
                    </p>
                    <div className="flex justify-content-center">
                        <div className="flex-s">
                            <MiniUserCard/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SecondBenefits;
