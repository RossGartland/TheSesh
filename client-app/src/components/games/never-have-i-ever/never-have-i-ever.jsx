import React, { useState, useEffect } from 'react';
import './never-have-i-ever.style.css';
import NHIECard from './nhie-card/nhie-card';
import axios from 'axios';
import agent from  '../../../api/agent';
const NeverHaveIEver = () => {

    useEffect(() => {
        agent.NeverHaveIEver.list()
            .then(response => {
                let neverHaveIEverQuestions = []
                response.forEach((question) => {
                    neverHaveIEverQuestions.push(question)
                })
            });
    }, []);


    return (
        <div>
            <h1 className="display-1 my-title-1">Never Have I Ever</h1>
            <div className="vertical-center">
                <div className="container justify-content-center dashboard">
                    {/* {neverHaveIEverQuestions.map((item, index) => (
                        <NHIECard key={item.id + index} question={item.question} />
                    ))} */}
                    {/* {neverHaveIEverQuestions[1]} */}
                </div>
            </div>
        </div>
    )
}
export default NeverHaveIEver;