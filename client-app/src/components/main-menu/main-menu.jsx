import React from 'react';
import Dashboard from '../dashboard/dashboard';
import './main-menu.style.css'

const MainMenu = () => {
    return (
        <div>
            <h1 className="display-1 my-title-1">The Sesh</h1>
            <Dashboard/>
        </div>
    )
}
export default MainMenu;