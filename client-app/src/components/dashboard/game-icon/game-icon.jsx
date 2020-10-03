import React from 'react';
import './game-icon.style.css';

const GameIcon = (props) => {
    const style = {backgroundColor: props.backgroundColor}
    return (
        <div class="card game-icon" style={style}>
            <div class="card-body">
                <h5 class="card-title">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="card-link">Play</a>
            </div>
        </div>
    )
}
export default GameIcon;