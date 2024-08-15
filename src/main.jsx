// import { StrictMode } from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import GameApp from './GameApp.jsx';
import './styles.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GameApp />
  </StrictMode>,
)