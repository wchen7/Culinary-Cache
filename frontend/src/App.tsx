import React from 'react';
import './App.css';
import pantryDB, { pantryArrayStructure } from './PantryData';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function App() {
  const [close, setClose] = React.useState<boolean | undefined>(true);
  const [pantryData, setPantryData] = React.useState<pantryArrayStructure[]>([]);
  const [searchInput, setSearchInput] = React.useState<string | undefined>('');
  
  const options = pantryData.map((option) => {
    const firstLetter = option.name[0].toUpperCase();
    return {
      firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
      ...option,
    };
  });

  React.useEffect(() => {
    const storedPantryDB: string | null = localStorage.getItem("pantryArray");
    if (storedPantryDB !== null) {
      setPantryData(JSON.parse(storedPantryDB));
    } else {
      const initialData: pantryArrayStructure[] = pantryDB();
      setPantryData(initialData);
    }
  }, [])

  return (
    <div className='curtain'>
      <div className='curtain__wrapper'>
        {false && <input type="checkbox" checked={false} onChange={(): void => {setClose(!close)}}/>}
        <div className="curtain__panel curtain__panel--left">
          <div className='handle' />
        </div>
        <div className='curtain__prize'>
          <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" style={{ marginTop: '10px', paddingLeft: '13px' }}>
            <Button variant="contained" color='success' endIcon={<AddShoppingCartIcon />}>
              Add
            </Button>
            <Autocomplete
              id="autocomplete-grouped"
              options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
              groupBy={(option) => option.firstLetter}
              getOptionLabel={(option) => option.name}
              sx={{ width: 220 }}
              onChange={(event, newValue) => {setSearchInput(newValue?.name)}}
              renderInput={(params) => <TextField {...params} label="Foods Inside Pantry" />}
            />
            <Button variant="contained" color='error' startIcon={<DeleteIcon />}>
              Delete
            </Button>
          </Stack>
        </div>
        <div className='curtain__panel curtain__panel--right'>
          <div className='handle' />
        </div>
      </div>
    </div>
  );
}

export default App;
