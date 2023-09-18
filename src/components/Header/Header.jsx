import { TextField, createTheme, ThemeProvider } from '@mui/material';
import './Header.css';

const Header = () => {
  const darkTheme = createTheme({
    palette: {
      primary: {
        main: '#fff',
      },
      mode: 'dark',
    },
  });

  return (
    <div className='header'>
      <span className='title'>Word Hunt</span>
      <div className='inputs'>
        <ThemeProvider theme={darkTheme}>
          <TextField id='standard-basic' label='Standard' variant='standard' />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default Header;
