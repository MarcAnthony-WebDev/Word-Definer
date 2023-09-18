import { useEffect, useState } from 'react';
import styles from './App.css';
import axios from 'axios';
import { Container } from '@mui/material';

import Header from './components/Header/Header';

function App() {
  const [word, setWord] = useState('');
  const [meanings, setMeanings] = useState([]);

  const dictionaryApi = async () => {
    try {
      const data = await axios.get(
        'https://api.dictionaryapi.dev/api/v2/entries/en/plane'
      );

      setMeanings(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(meanings);

  useEffect(() => {
    dictionaryApi();
  }, []);

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
        <Header />
      </Container>
    </div>
  );
}

export default App;
