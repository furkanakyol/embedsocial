import React from 'react'
import TrialInput from './TrialInput'
import { Logo } from '../assets/icons'

const CTAandFooter = () => {
    return (
        <>
        <div className="basic">
            <div className="basicIn">
                <h1><b>Ready to dive in?<br/>
                Create your widget today.</b></h1>
                <p>Display Instagram Stories Widget on your website, that auto-syncs, and<br/> updates each time you add a photo in your active story. </p>
                <div className="flex justify-content-center"><TrialInput/></div>
                <p>Free 7-day trial - Easy setup - Cancel any time</p>
            </div>
        </div>
        <div className="footer">
            <div className="flex-area flex justify-content-center">
                <div className="flex-1 fl mr-50">
                    <div className="logo-area">
                        <Logo width={40} height={40} color="#000" />
                        embedsocial
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Id rhoncus suspendisse mattis<br/> ultricies adipiscing quam pretium eleifend. </p>

                </div>
                <div className="flex-2 fl flex f-direction mr-50">
                    <h4>Product</h4>
                    <a href="#">Reviews management</a>
                    <a href="#">Embed Instagram stories</a>
                    <a href="#">Display Instagram feeds</a>
                    <a href="#">Collect reviews</a>
                    <a href="#">Send email requests</a>
                </div>
                <div className="flex-3 fl flex f-direction mr-50">
                    <h4>Company</h4>
                    <a href="#">About EmbedSocial</a>
                    <a href="#">Brand Guidelines</a>
                    <a href="#">Press Kit</a>
                    <a href="#">Support</a>
                </div>
                <div className="flex-4 fl flex f-direction mr-50">
                    <h4>Integrations</h4>
                    <a href="#">WordPress</a>
                    <a href="#">Shopify</a>
                    <a href="#">Magento</a>
                    <a href="#">Squarespace</a>
                    <a href="#">Intercom</a>
                    <a href="#">Slack</a>
                </div>
                <div className="flex-5 fl flex f-direction">
                <h4>Integrations</h4>
                    <a href="#">WordPress</a>
                    <a href="#">Shopify</a>
                    <a href="#">Magento</a>
                    <a href="#">Squarespace</a>
                    <a href="#">Intercom</a>
                    <a href="#">Slack</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default CTAandFooter
