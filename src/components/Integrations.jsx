import React from 'react'
import { Cube, Logo, Tik, Tree, TreeIcon1, TreeIcon2, TreeIcon3, TreeIcon4, TreeIcon5, TreeIcon6 } from '../assets/icons'
const Integrations = () => {
    return (
        <div className="integrations flex justify-content-center">
            <div className="integrations-in">
                <div className="integrations-tree-area">
                    <div className="left">
                        <span>
                            <Cube color={"0066FF"} width={"17.36px"} height={"17.36px"} />
                            Integrations
                        </span>
                        <h1>
                            Works with 99.9% of <br />
                            web platforms
                        </h1>
                        <p>
                            We integrate with tons of other apps, ecoomerce platforms or<br /> web builders. Native apps are avaialble, too.
                        </p>
                        <div className="tik-area">
                            <p><Tik width={17} height={13} /> Works with any website</p>
                            <p><Tik width={17} height={13} /> No coding required to embed</p>
                        </div>
                    </div>
                    <div className="right flex">
                        <div className="flex-1">
                            <Logo width={64} height={65} color={"#0066FF"} />
                        </div>
                        <div className="flex-2">
                            <Tree width={240} height={381} />
                        </div>
                        <div className="flex-3">
                            <div className="icons-area">
                                <TreeIcon1 />
                                <TreeIcon2 />
                                <TreeIcon3 />
                                <TreeIcon4 />
                                <TreeIcon5 />
                                <TreeIcon6 />
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>
    )
}

export default Integrations
