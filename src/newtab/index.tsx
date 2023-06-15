import '../global.css';
import React from 'react';
import { createRoot } from 'react-dom/client';
import NewTab from './NewTab';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <NewTab />
  </React.StrictMode>
);
