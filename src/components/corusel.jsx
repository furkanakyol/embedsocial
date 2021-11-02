import React from 'react'
import TrialInput from './TrialInput'
import MiniUserCard from './MiniUserCard'
const Corusel = () => {
    return (
        <div className="corusel">
            <div className="corusel-in">
                <div className="left-area">
                    <h1>Display Instagram Stories on any website, <span>in seconds.</span></h1>
                    <p>Display Instagram Stories Widget on your website, that auto-syncs, and updates each time you add a photo in your active story. </p>
                    <TrialInput/>
                    <div className="under-trial-input">
                        <p>Free 7-day trial - Easy setup - Cancel any time</p>
                    </div>
                </div>
                <div className="right-area">
                    <MiniUserCard/>
                    <div className="image-group-1212">
                        <img src="./img/Group-1418.png"/>
                        <div className="mini-story-wrap">
                            <img src="./img/Group-1498.png"/>
                            <img src="./img/Group-1498.png"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Corusel
