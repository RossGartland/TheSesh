import React from 'react';
import './nhie-card.style.css';

const NHIECard = (props) => {
    return (
        <div class="jumbotron nhie-card">
            <h1 class="display-4">{props.question}</h1>
            <hr class="my-4" />
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="#" role="button">Next</a>
            </p>
        </div>
    )
}
export default NHIECard;