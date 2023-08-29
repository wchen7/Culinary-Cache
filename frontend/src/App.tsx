import React from 'react';
import './App.css';

function App() {
  return (
    <div className='curtain'>
      <div className='curtain__wrapper'>
        <input type="checkbox" defaultChecked/>
        <div className="curtain__panel curtain__panel--left">
        </div>
        <div className='curtain__prize'>
          Hello
        </div>
        <div className='curtain__panel curtain__panel--right'>
        </div>
      </div>
    </div>
  );
}

export default App;
