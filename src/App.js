import './App.css';
import { React, useState } from 'react';
import Paper from '@mui/material/Paper';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Route, Routes } from 'react-router-dom';
import AppBar from './components/AppBar';
import Switch from '@mui/material/Switch';
import Container from '@mui/material/Container';
import HomePage from './components/HomePage';
import Footer from './components/Footer';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Typography } from '@mui/material';






function App() {

  const [darkMode, setDarkMode] = useState(true);

  const darkTheme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const lightTheme = createTheme({

  });




  return (
    <div className="App">
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Paper >
          <AppBar />
          <Typography>
            <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} ></Switch>
            Dark/Light Mode
          </Typography>


          <Provider store={store}>
            <Container maxWidth="xl">

              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/Shop' element={<Shop />} />
                <Route path='/Login' element={<Login />} />
                <Route path='/Sign-up' element={<Signup />} />

              </Routes>


            </Container>
            <Routes>
            
            </Routes>
          </Provider>


          <Footer />
        </Paper>
      </ThemeProvider>


    </div>
  );
}

export default App;
