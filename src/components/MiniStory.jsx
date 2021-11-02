import React from 'react'
import {MiniStoryBottomImage} from "../assets/icons"

const MiniStory = () => {
    return (
        <div className="mini-story">
            <div className="mini-story-header">
                <div className="mini-story-header-avatar">
                    <img src="#"/>
                </div>
            </div>
            <div className="mini-story-bottom">
                <div className="mini-story-date">
                    <b>22</b><br/>oct
                </div>
                <div className="mini-story-icon">
                    <MiniStoryBottomImage/>
                </div>
            </div>
        </div>
    )
}
export default MiniStory
