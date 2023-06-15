import '../global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Newtab';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
