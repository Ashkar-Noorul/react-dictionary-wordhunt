import { MenuItem, TextField, ThemeProvider, createTheme } from '@mui/material';
import React from 'react';
import './Header.css';
import categories from '../../data/Category';

const Header = ({setCategory, category, word, setWord, lightTheme}) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: lightTheme?'#000':'#fff',
      },
      mode: lightTheme?'light':'dark',
    },
  });

  const handleChange = (language)=>{
    setCategory(language);
    setWord("");
  }
  return (
    <div className='header'>
      <span className='title'>{word?word:"Word Search"}</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField className='search' id="filled-basic" label="Search a word" variant="standard" value={word}
          onChange={(e)=>setWord(e.target.value)}/>
          <TextField
          className='select'
            id="filled-select-currency"
            select
            label="Language"
            defaultValue={category}
            onChange={(e)=>handleChange(e.target.value)}
            variant='standard'
          >
            {categories.map((option) => (
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>
            ))}


          </TextField>
        </ThemeProvider>

      </div>
    </div>
  )
}

export default Header