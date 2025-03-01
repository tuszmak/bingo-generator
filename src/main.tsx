import { ClerkProvider } from '@clerk/react-router';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.tsx';
import Game from './Game/Game.tsx';
import './index.css';
import Notfound from './Notfound/NotFound.tsx';
import Packs from './Packs/Packs.tsx';
import Profile from './Profile/Profile.tsx';
import Setup from './Setup/Setup.tsx';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <Routes>
          <Route path='*' element={<Notfound />} />
          <Route path='/' element={<App />} />
          <Route path='/setup' element={<Setup />} />
          <Route path='/packs' element={<Packs />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/game' element={<Game />} />
        </Routes>
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
