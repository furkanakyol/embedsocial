import React from 'react';
import { RightArrow } from '../assets/icons';

 const TrialInput = () => {
    return (
        <div className="trial-input">
            <div className="input-area">
                <input placeholder="Enter your email..." type="email" autoComplete="none"/>
            </div>
            <div className="trial-button-regular"><button>Start free trial <span style={{marginLeft:"10px"}}><RightArrow width={"13px"} height={"12.79px"} /></span></button></div>
        </div>
    )
}
export default TrialInput;
