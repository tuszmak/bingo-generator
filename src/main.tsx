import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Game from './Game/Game.tsx';
import './index.css';
import Notfound from './Notfound/NotFound.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Notfound />} />
        <Route path='/' element={<App />} />
        <Route path='/game' element={<Game />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
