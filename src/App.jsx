import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Container } from '@mui/material';

import Header from './components/Header/Header';
import Definitions from './components/Definitions/Definitions';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState('en');

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    dictionaryApi();
  }, [word, category]);

  return (
    <div
      style={{ height: '100vh', backgroundColor: '#282c34', color: '#fff' }}
      className='App'
    >
      <Container
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
        }}
        maxWidth='md'
      >
        <Header
          word={word}
          setWord={setWord}
          category={category}
          setCategory={setCategory}
        />

        {meanings && (
          <Definitions word={word} meanings={meanings} category={category} />
        )}
      </Container>
    </div>
  );
}

export default App;
