import React from 'react';
import './never-have-i-ever.style.css';
import NHIECard from './nhie-card/nhie-card';

const NeverHaveIEver = () => {
    return (
        <div>
            <h1 className="display-1 my-title-1">Never Have I Ever</h1>
            <div className="vertical-center">
                <div className="container justify-content-center dashboard">
                    <NHIECard />
                </div>
            </div>
        </div>
    )
}
export default NeverHaveIEver;