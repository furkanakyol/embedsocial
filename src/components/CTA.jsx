import React from 'react'
import TrialInput from './TrialInput'
const CTA = () => {
    return (
        <div className="cta flex justify-content-center">
            <div className="cta-in flex">
                <div className="left">
                    <h1>
                        Ready to dive in?<br/>
                        Create your widget today.
                    </h1>
                    <p>
                         Display Instagram Stories Widget on your website, that auto-syncs, and <br/> updates each time you add a photo in your active story. 
                    </p>
                    <TrialInput/>
                    <p>Free 7-day trial - Easy setup - Cancel any time</p>
                </div>
                <div className="right">
                    <div className="flex">
                            <img src="./img/Group-1498.png"/>
                            <img src="./img/Group-1498.png"/>
                            <img src="./img/Group-1498.png"/>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default CTA
