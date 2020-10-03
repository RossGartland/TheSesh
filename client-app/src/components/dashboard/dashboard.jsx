import React from 'react';
import GameIcon from './game-icon/game-icon';
import './dashboard.style.css'
const Dashboard = () => {
    return (
        <div className="vertical-center">
        <div className="container justify-content-center dashboard">
            <div className="row">
            <GameIcon title={"Never Have I Ever"} backgroundColor={'orangered'}/>
            <GameIcon title={"Picolo "} backgroundColor={'rgb(255, 165, 0)'}/>
            <GameIcon title={"Most Likely To Drinking Game"} backgroundColor={'rgb(60, 179, 113)'}/>
            <GameIcon title={"Spin the Bottle Drinking Game"} backgroundColor={'rgb(238, 130, 238)'}/>
            <GameIcon title={"Some other game"} backgroundColor={'rgb(255, 0, 0)'}/>
            <GameIcon title={"Cool Game"} backgroundColor={'rgb(106, 90, 205)'}/>
            </div>
        </div>
        </div>
    )
}
export default Dashboard;