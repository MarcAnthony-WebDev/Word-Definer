/* eslint-disable react/prop-types */
import { TextField, createTheme, ThemeProvider } from '@mui/material';
import './Header.css';
import categories from '../../data/category';

const Header = ({ setCategory, category, word, setWord, LightMode }) => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: LightMode ? '#000' : '#fff',
      },
      mode: LightMode ? 'light' : 'dark',
    },
  });

  const handleChange = (language) => {
    setCategory(language);
    setWord('');
  };

  return (
    <div className='header'>
      <h1 className='title'>{word ? word : 'Word Definer'}</h1>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField
            className='search'
            label='Search a word'
            variant='standard'
            value={word}
            onChange={(e) => setWord(e.target.value)}
          />
          <TextField
            id='outlined-select-currency-native'
            className='select'
            select
            onChange={(e) => handleChange(e.target.value)}
            label='Language'
            value={category}
            SelectProps={{
              native: true,
            }}
          >
            {categories.map((option) => (
              <option key={option.label} value={option.label}>
                {option.value}
              </option>
            ))}
          </TextField>
          {/* <TextField
            select
            value={category}
            onChange={(e) => handleChange(e.target.value)}
            defaultValue='English'
            label='Langauge'
            variant='standard'
            className='select'
            SelectProps={{
              native: true,
            }}
          >
            {categories.map((option) => {
              <MenuItem key={option.label} value={option.label}>
                {option.value}
              </MenuItem>;
            })}
          </TextField> */}
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
