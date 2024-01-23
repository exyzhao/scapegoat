import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CssBaseline from '@mui/material/CssBaseline';

import HomePage from "./pages/HomePage";
import LobbyPage from './pages/LobbyPage';

const App = () => {
  return (
    <BrowserRouter>
      <CssBaseline>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/lobby" element={<LobbyPage />} />
        </Routes>
      </CssBaseline>
    </BrowserRouter>
  )
}

export default App