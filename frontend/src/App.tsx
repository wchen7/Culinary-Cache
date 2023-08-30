import React from 'react';
import './App.css';
import pantryDB from './PantryData';

function App() {
  const [close, setClose] = React.useState<boolean | undefined>(true);
  const [pantryData, setPantryData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const storedPantryDB = localStorage.getItem("pantryArray");
    if (storedPantryDB !== null) {
      setPantryData(JSON.parse(storedPantryDB));
    } else {
      const initialData = pantryDB();
      setPantryData(initialData);
    }
  }, [])

  return (
    <div className='curtain'>
      <div className='curtain__wrapper'>
        <input type="checkbox" checked={close} onChange={(): void => {setClose(!close)}}/>
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
