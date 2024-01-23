import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import HomePage from "./pages/HomePage";
import LobbyPage from './pages/LobbyPage';

import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif', // Use the same font family as imported
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline>
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/lobby" element={<LobbyPage />} />
          </Routes>
        </CssBaseline>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App