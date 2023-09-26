import axios from 'axios';
import './App.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from '@mui/material';
import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';
import { Switch, styled, alpha } from '@mui/material';
import { grey } from '@mui/material/colors';
import Footer from './components/Footer/Footer';

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');
  const [lightTheme, setLightTheme] = useState(false);
  const dictionaryApi = async () => {
    try {
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data);
      setMeanings(data.data);
    }
    catch (err) {
      console.error(err);
    }
  };
  // console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, [word, category])

  const PinkSwitch = styled(Switch)(({ theme }) => ({
    '& .MuiSwitch-switchBase.Mui-checked': {
      color: grey[600],
      '&:hover': {
        backgroundColor: alpha(grey[600], theme.palette.action.hoverOpacity),
      },
    },
    '& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track': {
      backgroundColor: grey[600],
    },
  }));

  return (
    <div className="App" style={{
      height: '100vh',
      backgroundColor: lightTheme ? '#fff' : '#282c34', color: lightTheme ? 'black' : 'white',
      transition: 'all 0.5s linear'
    }}>


      <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-evenly' }}>
        <div style={{ position: "absolute", top: 0, right: 15, paddingTop: 10 }}>
          <span>{lightTheme ? "Dark" : "Light"} Mode</span>
          <PinkSwitch checked={lightTheme} onChange={() => setLightTheme(!lightTheme)} />
        </div>
        <Header category={category} setCategory={setCategory} word={word} setWord={setWord} lightTheme={lightTheme} />
        {meanings && (<Definitions word={word} meanings={meanings} category={category} lightTheme={lightTheme} />)}
      </Container>
      <Footer />
    </div>
  );
}

export default App;
