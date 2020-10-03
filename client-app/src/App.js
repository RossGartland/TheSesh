import React from 'react';
import logo from './logo.svg';
import './App.css';
import MainMenu from './components/main-menu/main-menu';
import NeverHaveIEver from './components/games/never-have-i-ever/never-have-i-ever';

function App() {
  return (
    <div className="App">
      {/* <MainMenu/> */}
      <NeverHaveIEver/>
    </div>
  );
}

export default App;
