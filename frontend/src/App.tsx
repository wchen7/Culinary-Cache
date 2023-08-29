import React from 'react';
import './App.css';

function App() {
  const [close, setClose] = React.useState<boolean | undefined>(true);
  return (
    <div className='curtain'>
      <div className='curtain__wrapper'>
        <input type="checkbox" checked={close} onClick={(): void => {setClose(!close)}}/>
        <div className="curtain__panel curtain__panel--left">
          <div className='handle' />
        </div>
        <div className='curtain__prize'>
          Hello
        </div>
        <div className='curtain__panel curtain__panel--right'>
          <div className='handle' />
        </div>
      </div>
    </div>
  );
}

export default App;
